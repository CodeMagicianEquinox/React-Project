# 🛍️ React Online Store

A clean, modern **React-based storefront demo** featuring a hero landing page and a dynamic catalog with filtering, sorting, and product cards.

---

## 🌐 Live Preview (if deployed)

If deployed, provide your app link here:  
👉 https://codemagicianequinox.github.io/React-Project/  
(or your Netlify/Vercel URL)

---

## 📖 Project Overview

This project demonstrates a simple yet polished **e-commerce style catalog** built with:

- ⚡ Vite-powered React for fast development and builds  
- 🧭 React Router for page navigation (Home, Catalog)  
- 🎨 Beautifully styled Hero section, Features grid, and responsive layout  
- 📦 Dynamic Catalog with:  
  - 🔍 Search  
  - 🗂️ Category filter  
  - 💰 Price range slider  
  - ⭐ Sorting (relevance, price, rating)  

---

## ✨ Features

| Feature         | Description                                              |
|-----------------|----------------------------------------------------------|
| 🏠 Home Page    | Hero section, features grid, and prominent CTA buttons   |
| 🛒 Product Catalog | Displays filtered, sorted product cards dynamically     |
| 🎯 Filtering    | Filter by category, search term, and max price           |
| ↕️ Sorting       | Sort by relevance, price (low → high, high → low), rating |
| 📱 Responsive UI | Adjusts across mobile, tablet, and desktop views         |
| 🔗 Routing       | Smooth SPA navigation using React Router                 |

---

## 🛠️ Tech Stack

- ⚛️ **React** with functional components  
- 🚀 **Vite** for fast builds and hot-reload  
- 🧭 **React Router DOM** for SPA navigation  
- 🎨 **Custom CSS** (Flexbox + Grid, styled navbar/footer/buttons)  
- 🖼 **Assets:** Placeholder images from [Picsum Photos](https://picsum.photos/)  
- 🌍 **Version control:** Git + GitHub  

---

## ⚡ Quick Start

### 📋 Prerequisites
- [Node.js](https://nodejs.org/) v14 or higher  
- npm (comes with Node) or Yarn  

### ▶️ Running Locally

```bash
# Clone the repo
git clone https://github.com/CodeMagicianEquinox/React-Project.git
cd React-Project

# Install dependencies
npm install

# Start the dev server
npm run dev

# Open in your browser:
👉 http://localhost:5173/
```
---

## 📂 Project Structure
```React-Project/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   └── Catalog.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── README.md
