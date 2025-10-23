# 🌐 MyPortfolio – Full-Stack Developer Showcase

## 🧩 Overview
**MyPortfolio** is a full-stack personal portfolio web application designed to showcase projects, contact details, and technical skills.  
It combines a modern **React (Vite)** front-end with a **Node/Express + MongoDB** backend, and is fully deployed on **Oracle Cloud** with process management handled by **PM2**.

---

## 🚀 Live Demo
🔗 [**My Portfolio**](http://132.145.108.97:3000) 

> ⚙️ Hosted on Oracle Cloud Compute (Ubuntu 24.04) using Nginx reverse proxy + PM2

---

## 💡 Features
✅ Responsive React Frontend built with **Vite**  
✅ Dynamic project routing via **React Router v7**  
✅ Secure backend using **Express.js + MongoDB Atlas**  
✅ Contact form powered by **EmailJS**  
✅ Continuous deployment via **PM2** process manager  
✅ Fully containerized + reverse-proxied via **Nginx**

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, Vite, EmailJS, FontAwesome |
| **Backend** | Node.js, Express.js, Mongoose, JWT, Helmet |
| **Database** | MongoDB Atlas |
| **Deployment** | Oracle Cloud, Nginx, PM2 |
| **Tools** | Git, VSCode, npm, Concurrently |


## 📁 Project Structure

```text
📁 portfolio/
├── server.js                # Express backend entry
├── config/                  # MongoDB / JWT config
├── portfolio/               # Frontend React app
│   ├── src/
│   │   ├── pages/           # Home, About, Contact pages
│   │   ├── components/      # Reusable UI elements
│   │   ├── assets/          # Images, icons
│   ├── vite.config.js
│   └── package.json
└── README.md
```


## 💬 Contact Me
📧 **Email:** [seounghoon.wade@gmail.com](mailto:seounghoon.wade@gmail.com)  
💼 **LinkedIn:** [linkedin.com/in/seounghoonjung](https://linkedin.com/in/seounghoonjung)

---

## 🖥️ Deployment Setup (Oracle Cloud + PM2)

```bash
# 1. Clone repository
git clone https://github.com/humanwade/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
cd portfolio/portfolio
npm install

# 3. Start both frontend + backend via PM2
pm2 start "npm run dev" --name portfolio
pm2 save
pm2 startup
```

