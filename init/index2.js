const mongoose = require("mongoose");
const initData = require("./data2.js");
const Career = require("../models/career.js");

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
  await Career.deleteMany({});
  await Career.insertMany(initData.data);
  console.log("🎉Career data seeded successfully!");
};

initDB();
