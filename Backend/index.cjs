const mongoose = require("mongoose");
const initData = require("./utils/data.cjs");
const Quiz = require("./models/quiz.cjs");

async function main() {
  await mongoose.connect("mongodb://localhost/Grow-genie");
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
