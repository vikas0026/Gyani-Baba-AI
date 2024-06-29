/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */
import {GoogleGenerativeAI , HarmCategory ,HarmBlockThreshold} from "@google/generative-ai"

const apiKey = "AIzaSyBEPi5AKHppE0v3BmRzDcJphO8Lfi4frsA";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "what is car\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "\"Car\" is a broad term, so to give you the most helpful answer, I need a bit more context!  What specifically would you like to know about cars? \n\nFor example, are you interested in:\n\n* **The definition of a car?** (A motor vehicle with four wheels, designed to carry passengers)\n* **The history of cars?** (From the first steam-powered carriages to modern electric vehicles)\n* **Types of cars?** (Sedans, SUVs, trucks, sports cars, etc.)\n* **How cars work?** (Engines, transmissions, steering, etc.)\n* **The impact of cars on society?** (Transportation, pollution, economics)\n\nPlease provide me with more information, and I'll be happy to answer your question! \n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;