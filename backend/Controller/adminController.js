const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../Model/adminModel"); // Import the Admin model
require("dotenv").config();

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      phone,
      role
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
