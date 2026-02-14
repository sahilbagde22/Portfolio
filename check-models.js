import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Try to load from .env.local first, then .env
dotenv.config({ path: '.env.local' });
if (!process.env.GOOGLE_GEMINI_API_KEY) {
    dotenv.config();
}

async function checkModels() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.VITE_GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
        console.error("ERROR: No API Key found.");
        return;
    }

    console.log(`Testing key starts with: ${apiKey.substring(0, 5)}...`);

    // Ordered by preference: Flash -> Pro -> Older/Experimental
    const candidates = [
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-1.0-pro",
        "gemini-pro",
        "gemini-2.0-flash-exp" // Experimental models often work free
    ];

    for (const modelName of candidates) {
        process.stdout.write(`Trying ${modelName.padEnd(20)} ... `);
        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelName });

            // Short timeout to avoid hanging
            const result = await Promise.race([
                model.generateContent("Hello"),
                new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000))
            ]);

            const response = await result.response;
            const text = response.text();

            console.log("SUCCESS! ✅");
            console.log(`Response: ${text.substring(0, 30)}...`);
            // Stop after finding one working model? No, let's keep checking to inform user best choice.
            // Actually, finding one is enough.
            console.log(`\nRECOMMENDATION: Use '${modelName}'`);
            return;
        } catch (error) {
            console.log("FAILED ❌");
            if (error.message.includes("429")) {
                console.log("  -> Rate Limit Exceeded");
            } else if (error.message.includes("404")) {
                console.log("  -> Model Not Found");
            } else {
                console.log(`  -> Error: ${error.message.substring(0, 50)}`);
            }
        }
    }
    console.log("\nALL MODELS FAILED. Please wait for quota reset.");
}

checkModels();
