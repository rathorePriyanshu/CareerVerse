const mongoose = require("mongoose");

const optionschema = new mongoose.Schema({
    text: { type: String, required: true },
    stream: { type: String, enum: ["Science", "Commerce", "Arts"], required: true },
    skills: [{ type: String, required: true }]
})

const quizSchema = new mongoose.Schema({
    classLevel: {
        type: String,
        enum: ["10", "12"],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [optionschema],
        required: true,
        validate: [arr => arr.length >= 2, "At least 2 options required"]
    }
}, { timestamps: true });

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;