import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

async function testGemini() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const modelsToTry = [
        "gemini-2.5-flash",
        "gemini-flash-latest",
        "gemini-pro-latest",
        "gemini-2.0-flash"
    ];

    let output = "";

    for (const modelName of modelsToTry) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
        try {
            output += `\nTesting ${modelName}...\n`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
            });

            output += `Status: ${response.status} ${response.statusText}\n`;

            if (!response.ok) {
                const data = await response.json();
                output += `Error: ${JSON.stringify(data.error?.message || data)}\n`;
            } else {
                output += "SUCCESS!\n";
            }
        } catch (e) {
            output += `Error exception: ${e.message}\n`;
        }
    }

    fs.writeFileSync('results.txt', output);
    console.log("Done. Results saved to results.txt");
}

testGemini();
