import { GoogleGenAI } from "@google/genai";
import config from '../config/config.js'

const ai = new GoogleGenAI({
    apiKey: config.genai.apiKey,
});

export async function generateCaption(file) {
    const base64ImageFile = new Buffer.from(file.buffer).toString("base64");
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },
    ];
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
    });
    return response.text;
}