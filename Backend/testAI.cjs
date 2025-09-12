// testAI.cjs
const { OpenAI } = require("openai");
require("dotenv").config();

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_API_KEY,
});

async function testModel() {
    try {
        const res = await client.chat.completions.create({
            model: "Qwen/Qwen3-Next-80B-A3B-Thinking:novita",
            messages: [{ role: "user", content: "Hello, how are you?" }],
        });

        console.log("✅ Model Response:", res.choices[0].message.content);
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

testModel();
