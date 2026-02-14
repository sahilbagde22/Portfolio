
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const logFile = 'debug_result.log';
fs.writeFileSync(logFile, "Starting Diagnostics...\n");

function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + "\n");
}

async function testModel(modelName) {
    log(`\nTesting model: ${modelName}...`);
    try {
        const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
        if (!apiKey) throw new Error("API Key not found in environment");

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });

        const result = await model.generateContent("Test.");
        const response = await result.response;
        log(`[SUCCESS] ${modelName} is working. Response: ${response.text()}`);
        return true;
    } catch (error) {
        log(`[FAILED] ${modelName} error: ${error.message}`);
        return false;
    }
}

async function runDiagnostics() {
    log("--- Starting Diagnostics ---");
    const key = process.env.GOOGLE_GEMINI_API_KEY;
    log("API Key loaded: " + (key ? `Yes (starts with ${key.substring(0, 8)}...)` : "NO"));

    const modelsToTest = [
        "gemini-2.0-flash-lite-001",
        "gemini-2.0-flash-lite",
        "gemini-flash-latest",
        "gemini-2.5-pro"
    ];

    for (const model of modelsToTest) {
        await testModel(model);
    }
    log("--- Diagnostics Complete ---");
}

runDiagnostics();
