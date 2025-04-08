const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log("✅ Connected to the database successfully");
    } catch (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};


module.exports = connectDB; 