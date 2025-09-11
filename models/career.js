const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        enum: ["Science", "Commerce", "Humanities"],                                   // restrict to valid streams
        required: true
    },
    avgSalary: {
        type: String,
        required: true
    },
    topColleges: [
        {
            name: { type: String, required: true },                                               // college name
            description: { type: String, required: true },                                    // short description
        }
    ],
    roadmap: [
        {
            title: { type: String, required: true },       // e.g. "After 10th"
            steps: { type: [String], required: true }      // e.g. ["Choose Science", "Focus on PCM"]
        }
    ],
    img: {
        type: String,                                                                          // single image URL
        default: ""
    }
});

// Export model
const Career = mongoose.model("Career", careerSchema);
module.exports = Career;