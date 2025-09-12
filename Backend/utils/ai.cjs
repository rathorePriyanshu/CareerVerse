const { OpenAI } = require("openai");
require("dotenv").config();

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.OPENAI_API_KEY,
});

async function getAIFeedback(stream, skills) {
    const prompt = `This student is best suited for the ${stream} stream.
They have skills in ${skills.join(", ")}.
Write a motivational feedback (3-4 sentences) explaining why they might succeed in this stream.`;

    const response = await client.chat.completions.create({
        model: "Qwen/Qwen3-Next-80B-A3B-Thinking:novita",
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content || `You have great potential in ${stream}!`;
}

async function getCareerSuggestion(stream, skills) {
    const prompt = `A student is interested in ${stream} with skills like ${skills.join(", ")}.
Suggest 4 career paths they might succeed in.
Only output the career names, separated by commas.`;

    const response = await client.chat.completions.create({
        model: "Qwen/Qwen3-Next-80B-A3B-Thinking:novita",
        messages: [{ role: "user", content: prompt }],
    });

    const careersText = response.choices[0].message.content || "";
    return careersText
        .split(/,|\n/)
        .map(c => c.trim())
        .filter(c => c)
        .map(title => ({ title }));
}

module.exports = { getAIFeedback, getCareerSuggestion };
