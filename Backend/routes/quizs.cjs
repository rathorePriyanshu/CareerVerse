const express = require('express');
const quizdata = require('../utils/data.cjs')
const Quiz = require("../models/quiz.cjs");
const { getAIFeedback, getCareerSuggestion } = require("../utils/ai.cjs");

const router = express.Router();

router.get('/quiz', async (req, res) => {
    try {
        const { classLevel } = req.query;

        if (!classLevel) {
            return res.status(400).json({ error: "classLevel query parameter is required" })
        }

        const quizzes = await Quiz.find({ classLevel });

        const formatted = quizzes.map(q => ({
            id: q._id.toString(),
            classLevel: q.classLevel,
            question: q.question,
            options: q.options.map(opt => ({
                id: opt._id.toString(),
                text: opt.text,
                stream: opt.stream,
                skills: opt.skills
            }))
        }))

        res.json(formatted);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
})

router.post('/quiz/submit', async (req, res) => {
    try {
        const { answers } = req.body;

        const quizId = answers.map(a => a.questionId);
        const quizs = await Quiz.find({
            _id: { $in: quizId }
        });

        const streamCount = { Science: 0, Commerce: 0, Arts: 0 };
        const allskill = [];

        quizs.forEach(q => {
            const selected = answers.find(a => a.questionId === q._id.toString());
            if (!selected) return;

            const option = q.options.id(selected.selectedOptionId);
            if (option) {
                streamCount[option.stream]++;
                allskill.push(...option.skills);
            }
        })

        const recommendedStream = Object.keys(streamCount).reduce((a, b) =>
            streamCount[a] > streamCount[b] ? a : b
        );

        const aiFeedback = await getAIFeedback(recommendedStream, allskill);
        const careers = await getCareerSuggestion(recommendedStream, allskill);

        res.json({
            recommendedStream,
            topskills: allskill.slice(0, 3),
            careers,
            aiFeedback
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = router;