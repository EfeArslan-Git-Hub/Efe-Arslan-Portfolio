# Modern Bento-Grid Portfolio

Online version efe-arslan-portfolio.vercel.app/

A stunning, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. 
Features a data-driven content management system where you can update your projects and profile by editing a single file.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🛠️ Installation Guide

Follow these steps to set up the project locally.

### Prerequisites

- Node.js installed on your machine.
- Terminal/Command Prompt.

### Steps

1.  **Install Dependencies**
    All dependencies are managed locally. Run the following command in the project root:

    ```bash
    npm install
    ```

2.  **Start Development Server**
    To run the app locally with hot-reload:

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:5173`.

3.  **Build for Production**
    To create an optimized production build:

    ```bash
    npm run build
    ```

    The output will be in the `dist` folder.

## 📂 Project Structure

- `src/data/portfolio.js` - **Edit this file** to change your name, bio, social links, and projects.
- `src/components/BentoGrid.jsx` - Main grid layout logic.
- `src/components/ProjectCard.jsx` - Individual project card component.
- `src/App.jsx` - Main application entry point.

## 🎨 Customizing

### Changing Data
Open `src/data/portfolio.js` and modify the `projects` array or `profile` object. The UI will automatically update.

### Changing Styles
Tailwind configuration is located in `tailwind.config.js`. Global styles are in `src/index.css`.
