
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const logFile = 'model_list.log';
fs.writeFileSync(logFile, "Listing Models...\n");

function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + "\n");
}

async function listModels() {
    try {
        const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
        if (!apiKey) throw new Error("API Key not found");

        // The SDK doesn't expose listModels directly on GoogleGenerativeAI instance in all versions?
        // Actually it's on the GoogleAIFileManager usually or via REST.
        // Let's try raw REST to be sure.

        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            log(`Found ${data.models.length} models:`);
            data.models.forEach(m => {
                log(`- ${m.name} (${m.displayName}) [Supported methods: ${m.supportedGenerationMethods}]`);
            });
        } else {
            log("No models found or error in response: " + JSON.stringify(data));
        }

    } catch (error) {
        log("Error listing models: " + error.message);
    }
}

listModels();
