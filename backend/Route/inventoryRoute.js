const express = require("express");
const router = express.Router();
const inventoryController = require("../Controller/inventoryController");

const multer = require('multer');
const storage = multer.memoryStorage(); // keeps file in RAM
const upload = multer({ storage });

router.post("/add",upload.single("image"),inventoryController.addProduct);
router.get("/", inventoryController.getAllProducts);
router.get("/:id", inventoryController.getProductById);
router.put("/:id", inventoryController.updateProduct);
router.delete("/:id", inventoryController.deleteProduct);

router.post("/reduce-stock", inventoryController.reduceStock);
router.get("/low-stock", inventoryController.getLowStockProducts);

module.exports = router;
