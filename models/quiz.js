const mongoose = require("mongoose");                      // Import mongoose library (used to connect and interact with MongoDB)  

const quizSchema = new mongoose.Schema({
    classLevel: {
        type: String,
        enum: ["10", "12"],                                                              // Class 10th or 12th
        required: true
    },
    stream: {
        type: String,
        enum: ["Science", "Commerce", "Arts", null], 
        required: function () {
          return this.classLevel === "12";
        }
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true,
        validate: [arr => arr.length >= 2, "At least 2 options required"]
    }
}, { timestamps: true });

const Quiz = mongoose.model("Quiz", quizSchema);     
module.exports = Quiz; 