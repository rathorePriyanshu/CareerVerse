const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require('dotenv');

dotenv.config();

async function getAIFeedback(stream, skills) {
    const prompt = `This student is best suited for the ${stream} stream.
       They have skills in ${skills.join(", ")}.
       Write a motivational feedback (5-6 Sentences) explaining why they might succeed in this stream.`;

    console.log("HF_API_TOKEN:", process.env.HF_API_KEY ? "Loaded ✅" : "Missing ❌");

    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 150 } })
        }
    )

    const data = await response.json();
    return data[0]?.generated_text?.trim() || `You have great potential in ${stream}!`;
}

async function getCareerSuggestion(stream, skills) {
    const prompt = `A student is interested in ${stream} with skills like ${skills.join(", ")}.
  Suggest 4 career paths they might succeed in.
  Only output the career names, separated by commas.
  `;

    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base"
        ,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 150 } })
        }
    )

    const data = await response.json();
    const careersText = data[0]?.generated_text || "";

    console.log("Raw career AI output:", data); // Debugging 
    return careersText.split(",").map(c => ({ title: c.trim() })).filter(c => c.title);
}

module.exports = { getAIFeedback, getCareerSuggestion };