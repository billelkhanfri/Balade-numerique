const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("./path/to/your/firebase/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // replace with your Firebase project URL
});

const app = express();

// Define a route to fetch data from Firebase
app.get("/api/data", async (req, res) => {
  try {
    const db = admin.firestore();
    const data = await db.collection("your_collection").get(); // replace with your collection name

    const result = [];
    data.forEach((doc) => {
      result.push(doc.data());
    });

    res.json(result);
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 react js app