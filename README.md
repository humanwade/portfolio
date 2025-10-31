# 🌐 MyPortfolio – Full-Stack Developer Showcase

## 🧩 Overview
**MyPortfolio** is a full-stack personal portfolio web application built to showcase my projects, technical skills, and contact information in a modern, responsive format.  
It features a **React (Vite)** front-end and a **Node/Express + MongoDB** back-end, now fully self-hosted on a **Raspberry Pi 5 (8 GB)** server for continuous deployment and network management.

Originally deployed on **Oracle Cloud Compute**, the application has since been migrated to my own **Raspberry Pi-based home server** environment for enhanced control, learning flexibility, and energy-efficient self-hosting.

---

## 🚀 Live Demo
🔗 **[MyPortfolio : portfolio.wadeverse.net](http://portfolio.wadeverse.net)**

> ⚙️ Hosted on a **Raspberry Pi 5 (Ubuntu 24.04)** running **Nginx reverse proxy + PM2** for production-grade process and service management.

---

## 💡 Key Features
✅ Responsive React (Vite) frontend with smooth routing  
✅ Dynamic project pages using **React Router v7**  
✅ Secure Express API integrated with **MongoDB Atlas**  
✅ Contact form powered by **EmailJS**  
✅ Automated deployment and monitoring via **PM2**  
✅ Reverse-proxied and SSL-secured through **Nginx**  
✅ Migrated from cloud (Oracle Compute) to self-hosted (Raspberry Pi 5)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Frontend** | React, Vite, EmailJS, FontAwesome |
| **Backend** | Node.js, Express.js, Mongoose, JWT, Helmet |
| **Database** | MongoDB Atlas |
| **Deployment** | Raspberry Pi 5, Ubuntu 24.04, Nginx, PM2 |
| **Tools** | Git, VS Code, npm, Concurrently |

---

## 📁 Project Structure
```text
📁 portfolio/
├── server.js                # Express backend entry point
├── config/                  # MongoDB and JWT configuration
├── portfolio/               # Frontend React application
│   ├── src/
│   │   ├── pages/           # Home, About, Contact pages
│   │   ├── components/      # Reusable UI elements
│   │   ├── assets/          # Images and icons
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 💻 Deployment Setup (Raspberry Pi 5 + PM2)
```bash
# 1. Clone repository
git clone https://github.com/humanwade/portfolio.git
cd portfolio

# 2. Install dependencies for backend and frontend
npm install
cd portfolio/portfolio
npm install

# 3. Start frontend + backend via PM2
pm2 start "npm run dev" --name portfolio
pm2 save
pm2 startup
```

## 💬 Contact Me
📧 **Email:** [seounghoon.wade@gmail.com](mailto:seounghoon.wade@gmail.com)  
💼 **LinkedIn:** [linkedin.com/in/seounghoonjung](https://linkedin.com/in/seounghoonjung)

---

## 🧠 Migration Insight
Migrating from **Oracle Cloud Compute** to a **Raspberry Pi 5 self-hosted environment** provided hands-on experience with system administration, process automation, and reverse-proxy configuration.  
This migration reinforced practical understanding of **network management, Linux service deployment, and DevOps practices**, while maintaining continuous uptime on a personal device.
