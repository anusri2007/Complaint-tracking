const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/complaint", (req, res) => {
  const { title, description, category, priority } = req.body;

  const complaintId = "CMP" + Math.floor(10000 + Math.random() * 90000);
  const timestamp = new Date().toLocaleString();

  res.json({
    message: "Your complaint has been recorded and will be rectified as soon as possible.",
    complaintId,
    status: "Open",
    category,
    priority,
    timestamp,
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
