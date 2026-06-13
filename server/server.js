const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", require("./routes/adminRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected 🚀");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("DOLPINE Backend Running 🚀");
});

app.use("/api/enquiry", enquiryRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});