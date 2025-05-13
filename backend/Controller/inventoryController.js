const Inventory = require("../Model/inventoryModel");
const cloudinary = require('../Config/cloudinaryConfig');
const streamifier = require('streamifier');


// const uploadToCloudinary = (fileBuffer) => {
//     return new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream((error, result) => {
//         if (error) return reject(error);
//         resolve(result);
//       });

//       stream.end(fileBuffer); // this pushes the buffer to the stream
//     });
//   };



const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'inventory_images' },
            (error, result) => {
                if (result) resolve(result);
                else reject(error);
            }
        );

        streamifier.createReadStream(buffer).pipe(stream);
    });
};


// Add a new product to the inventory
exports.addProduct = async (req, res) => {
    try {
        const result = await uploadToCloudinary(req.file.buffer);
        const newProduct = new Inventory({
            ...req.body,
            image: result.secure_url,
            // result.public_id
        });

        await newProduct.save();

        res.status(201).json({
            message: 'Product added successfully',
            product: newProduct,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};


// Get all products in the inventory
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Inventory.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Inventory.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update product details
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product from the inventory
exports.deleteProduct = async (req, res) => {
    try {
        // if (product.imagePublicId) {
        //     await cloudinary.uploader.destroy(product.imagePublicId);
        //   }

        const deletedProduct = await Inventory.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Reduce stock when a purchase is made
exports.reduceStock = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Inventory.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.stock < quantity) {
            return res.status(400).json({ message: "Not enough stock available" });
        }

        product.stock -= quantity;
        await product.save();
        res.status(200).json({ message: "Stock updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get products that are low in stock
exports.getLowStockProducts = async (req, res) => {
    try {
        const threshold = req.query.threshold || 5; // Default threshold is 5
        const lowStockProducts = await Inventory.find({ stock: { $lt: threshold } });
        res.status(200).json(lowStockProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
