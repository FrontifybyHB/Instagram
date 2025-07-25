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
                mimeType: file.mimetype,
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },

    ];
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
            systemInstruction: `
            You have to analyze the image and generate a caption in simple text format.
            and also use emojis in the caption. 
            and also use hashtags in the caption.
            and the caption should be in 100 characters.
            `
        }
    });
    return response.text;
}