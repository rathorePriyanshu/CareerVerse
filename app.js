const express = require("express");
const mongoose = require("mongoose");
const Quiz = require("./models/quiz.js");

const app = express();
app.use(express.json());

const port = 8080;

// MongoDB connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Grow-genie");
  console.log("✅ MongoDB connection successful");
}

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    });


// Routes
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Get all quizzes
app.get("/quiz", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});