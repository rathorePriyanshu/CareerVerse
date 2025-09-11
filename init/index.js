const mongoose = require("mongoose");
const initData = require("./data.js");
const Quiz = require("../models/quiz.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Grow-genie");
  console.log("✅ MongoDB connected for seeding");
}

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    })

const initDB = async () => {
  await Quiz.deleteMany({});
  await Quiz.insertMany(initData.data);
  console.log("🎉 Quiz data seeded successfully!");
};

initDB();
