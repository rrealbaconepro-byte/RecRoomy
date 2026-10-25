
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve website files
app.use(express.static(__dirname));

// Open the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`MediaVerse server running on port ${PORT}`);
});
