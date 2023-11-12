const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3002;

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to the origin of your React app
    credentials: true,
  })
);

// Create MySQL Connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "balade",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Define a simple route to fetch data from your database
app.get("/places", (req, res) => {
  // Assuming you have a 'places' table in your database
  const query = "SELECT * FROM places";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
