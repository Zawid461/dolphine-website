const express = require("express");

const router = express.Router();

const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {

  try {

    const enquiry = new Enquiry(req.body);

    await enquiry.save();

    console.log("Enquiry Saved 🚀");

    res.status(201).json({
      success: true,
      message: "Enquiry Saved"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const enquiries = await Enquiry.find();

    res.json(enquiries);

  } catch (error) {

    res.status(500).json({
      success: false,
    });

  }

});
router.delete("/:id", async (req, res) => {

  try {

    await Enquiry.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Enquiry Deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false
    });

  }

});

module.exports = router;