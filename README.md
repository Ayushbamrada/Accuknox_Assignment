# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

✅ README.md
md
Copy
Edit
# Dynamic Widget Dashboard

This is a modern, responsive dashboard application built using **Vite + React + Tailwind CSS**, featuring dynamic widget management with interactive chart support using **Chart.js**.

Users can:
- Add/remove widgets by category
- View widget graphs (doughnut, bar)
- Edit widget content
- Search widgets
- Store dashboard data persistently in localStorage

---

## 🚀 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)
- Context API for state management

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
The app will run at: http://localhost:5173

🧩 Folder Structure
kotlin
Copy
Edit
src/
├── components/         // Reusable components (Widget, Header, Category)
├── context/            // Dashboard state using Context API
├── data/               // initialData.js for demo categories & widgets
├── pages/              // Main Dashboard page
├── App.jsx             // Root component
├── main.jsx            // Entry point
├── index.css           // Tailwind styles
📊 Features
🧱 Dashboard with multiple categories

➕ Dynamic add/remove widgets per category

✏️ Editable widget name & content

🔍 Search across all widgets

📊 Charts with Chart.js

💾 Persistent storage using localStorage

📁 Local Storage Reset (Optional)
If you want to reset the dashboard to the default data:

Open browser DevTools → Console

Run:

js
Copy
Edit
localStorage.removeItem("dashboard")
Refresh the browser.

📌 Notes
Make sure your browser supports localStorage

For custom widget types, update logic in Widget.js

🛠️ Future Improvements
Add authentication

Backend API to sync widget data

Drag-and-drop widget sorting

Export/import dashboard layout

📄 License
This project is licensed under the MIT License.