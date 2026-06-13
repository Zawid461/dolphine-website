const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const Admin = require("../models/Admin");

router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  try {

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid Username"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      message: "Login Successful"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

});

module.exports = router;