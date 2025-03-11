require('dotenv').config(); // Load environment variables from .env file

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.text) {
    let translation = await getTranslation(request.text);
    sendResponse({ translation });
  }
  return true;
});

async function getTranslation(text) {
  const apiKey = process.env.OPENAI_API_KEY; // کلید API را از متغیر محیطی بگیر
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1:free",
      messages: [{ role: "system", content: "ترجمه کن: " + text }],
    }),
  });

  let data = await response.json();
  return data.choices[0].message.content;
}
