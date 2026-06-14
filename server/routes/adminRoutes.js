const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  console.log(username, password);

  // TEMP DEBUG LOGIN
  if (
    username === "ahamed" &&
    password === "Dolphine@2026"
  ) {

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      message: "Login Success"
    });

  }

  return res.status(400).json({
    message: "Invalid Credentials"
  });

});

module.exports = router;