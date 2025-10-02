n# Sample Text Generator

This project is a React application built with Vite. It generates sample text using a customizable API and allows users to select the number of paragraphs and whether to include HTML formatting.

## Features
- Generate sample text from an API
- Choose number of paragraphs
- Option to include HTML formatting
- Copy generated text to clipboard
- Modern React (functional and class components)
- Styled with CSS

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
- `src/App.jsx`: Main application logic
- `src/components/controls/`: Input components
- `src/components/output.jsx`: Output display and copy functionality
- `src/index.css`: Styles

## API
The app fetches sample text from `/api/api?type=hipster-centric&paras=...&sentences=...`. You may need to set up a backend or mock this endpoint for full functionality.

## License
MIT
