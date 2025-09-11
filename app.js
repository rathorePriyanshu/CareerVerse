const express = require("express");
const mongoose = require("mongoose");
const Quiz = require("./models/quiz.js");
const Career = require("./models/career.js");

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



app.get("/careers", async (req, res) => {
  try {
    const { stream } = req.query;

    let query = {};
    if (stream) {
      const validStreams = ["Science", "Commerce", "Humanities"];
      if (!validStreams.includes(stream)) {
        return res.status(400).json({ error: "Invalid stream name" });
      }
      query.stream = stream;
    }

    const careers = await Career.find(query);
    res.json(careers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});