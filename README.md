# Hover AI Translator

This project is a browser extension that allows users to translate selected text into various languages. The extension utilizes the OpenAI API to perform translations.

## Features

- Translate selected text on websites
- Support for multiple languages (English, French, German)
- This project is still under development, and additional features will be added in the future.

## Prerequisites

- Node.js
- npm
- An API key from OpenAI

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/mrbelane/hover-translate.git
   cd hover-translate
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Place your API key in the `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. Load the extension in your browser:
   - Go to the `chrome://extensions/` page.
   - Click on "Load unpacked" and select the project folder.

2. Select the text you want to translate on any webpage and view the translation in the selected target language.
