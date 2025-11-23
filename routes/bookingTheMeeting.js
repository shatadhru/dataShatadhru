const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const axios = require("axios");

// Initialize Firebase Admin (only once in your project)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require("./serviceAccountKey.json")),
  });
}

const db = admin.firestore();



// POST route to handle bookings
router.post("/booking", async (req, res) => {
  try {
    const data = req.body;

    // Save booking in Firestore
    const docRef = db.collection("bookings").doc(data.id);
    await docRef.set({
      fullName: data.fullName,
      email: data.email,
      meetingTopic: data.meetingTopic,
      startTime: data.startTime,
      endTime: data.endTime,
      meetingDate: data.meetingDate,
      notes: data.notes,
      mentor: data.mentor,
      createdAt: new Date().toISOString(),
    });

    console.log("Booking saved:", data);

    res.status(200).json({ message: "Booking saved successfully!" });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ GET route to fetch all bookings
router.get("/bookings", async (req, res) => {
  try {
    const snapshot = await db
      .collection("bookings")
      .orderBy("createdAt", "desc")
      .get();
    const bookings = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

module.exports = router;
