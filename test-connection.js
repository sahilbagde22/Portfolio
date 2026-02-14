import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';

// Try to load from .env.local first, then .env
dotenv.config({ path: '.env.local' });
if (!process.env.GOOGLE_GEMINI_API_KEY) {
    dotenv.config();
}

async function testConnection() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.VITE_GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
        console.error("ERROR: No API Key found in environment variables.");
        return;
    }

    console.log(`Testing with API Key: ${apiKey.substring(0, 10)}...`);

    const modelsToTest = ["gemini-1.5-flash", "gemini-2.0-flash"];

    for (const modelName of modelsToTest) {
        console.log(`\n--- Testing ${modelName} ---`);
        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent("Hello, are you working?");
            const response = await result.response;
            const text = response.text();

            console.log(`SUCCESS: ${modelName} responded.`);
            console.log(`Response: ${text.substring(0, 50)}...`);
        } catch (error) {
            console.error(`FAILED: ${modelName}`);
            console.error(`Error details: ${error.message}`);
            if (error.message.includes("429")) {
                console.error(">>> RATE LIMIT EXCEEDED <<<");
            }
        }
    }
}

testConnection();
