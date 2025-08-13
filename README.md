🧰 out-of-the-box 🚀

<img width="1833" height="905" alt="Screenshot 2025-08-09 110647" src="https://github.com/user-attachments/assets/8608a2ba-7d7f-470c-b152-83b609e1f2ce" />

🔗 Live Demo: https://andrewmelnykx.github.io/out-of-the-box-test/

📌 Overview out-of-the-box is a fully responsive, modern single-page React application built with Vite. It follows BEM naming conventions for SCSS, features Redux Toolkit for state management, includes robust testing, smooth animations with Framer Motion, and API integration.

🛠️ Tech Stack Framework: React + Vite

Styling: SCSS with BEM methodology

UI Enhancements:

react-toastify (notifications)

react-scroll-height (scroll behavior)

framer-motion (animations) ✅

Data & State:

axios for HTTP requests

@reduxjs/toolkit for state management

Testing:

jest, @testing-library/react

📂 Project Structure bash Copy Edit src/ ├── assets/ # Images, icons, SVGs ├── components/ # Reusable UI components (BEM-based) ├── features/ # Redux slices/features ├── pages/ # Main views/pages ├── services/ # Axios API abstraction ├── styles/ # Global styles and variables ├── utils/ # Utility functions ├── tests/ # Unit & integration tests └── main.tsx / index.tsx # Entry point 🚀 Getting Started ✅ Prerequisites Node.js (v18+ recommended)

pnpm installed globally:

bash Copy Edit npm install -g pnpm 📦 Install Dependencies bash Copy Edit pnpm install 🧪 Run Tests bash Copy Edit pnpm test 🛠 Start Development Server bash Copy Edit pnpm dev 🏗 Build for Production bash Copy Edit pnpm build 🌐 Deployment This project is deployed using GitHub Pages: https://andrewmelnykx.github.io/out-of-the-box-test/

🔗 Live Site: 🌿 Branch: gh-pages

🧾 Manual Deployment Instructions Build the app:

bash Copy Edit pnpm build Deploy the contents of dist/ to the gh-pages branch:

bash Copy Edit pnpm install --save-dev gh-pages pnpm run build npx gh-pages -d dist
