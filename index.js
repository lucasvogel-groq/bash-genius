#!/usr/bin/env node

import fetch from "node-fetch";
import { promptTemplate } from "./prompts.js";

const userInput = process.argv.slice(2).join(" ");

if (!userInput) {
  console.log("Please provide a prompt");
  process.exit(1);
}

const prompt = promptTemplate(userInput);

const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer YOUR_GROQ_API_KEY`,
  },
  body: JSON.stringify({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 200,
  }),
});

const data = await res.json();
const output = data.choices[0].message.content;

console.log(output);
