# 🏃‍♂️ MS Marathon – Event Management App

**MS Marathon** is a full-stack marathon event management application built with the **MERN stack + Firebase Authentication**. It allows users to create and manage marathon events, register as participants, view statistics, and interact through a secure and dynamic dashboard.

🔗 **Live Website**: [https://ms-marathon.netlify.app/](https://ms-marathon.netlify.app/)

---

## ✨ Features

- 📅 Create, update, and delete marathon events
- 👥 Register and manage participant information
- 🔐 Secure authentication using Firebase with role-based access
- 📊 Dashboard to track total marathons and registrations
- 🔍 Search and filter marathon and participant data
- ✅ Firebase token-based protected routes
- ⚡ Fast and responsive UI with TailwindCSS & DaisyUI

---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend

| Package                     | Version    |
|-----------------------------|------------|
| React                      | ^19.1.0    |
| Vite                       | ^6.3.5     |
| Tailwind CSS               | ^4.1.8     |
| DaisyUI                    | ^5.0.43    |
| React Router               | ^7.6.1     |
| Axios                      | ^1.9.0     |
| SweetAlert2                | ^11.22.0   |
| Lottie React               | ^2.4.1     |
| React Hot Toast            | ^2.5.2     |
| React Countdown Timer      | ^3.2.1     |
| Swiper                     | ^11.2.8    |
| React Datepicker           | ^8.4.0     |
| React Helmet Async         | ^2.0.5     |
| React Icons                | ^5.5.0     |
| LDRS (Loaders)             | ^1.1.7     |

### 🖥️ Backend

| Package           | Version     |
|-------------------|-------------|
| Node.js           | ≥18.x       |
| Express           | ^5.1.0      |
| MongoDB (native)  | ^6.17.0     |
| Firebase Admin    | ^13.4.0     |
| Dotenv            | ^16.5.0     |
| CORS              | ^2.8.5      |
| Nodemon           | ^3.1.10     |

---

## 🚀 Getting Started

### 🔹 Frontend

```bash
git clone https://github.com/tahmid122/m11-assignment11-client.git
cd ms-marathon-client
npm install
npm run dev
```

### 🔹 Backend

```bash
git clone https://github.com/tahmid122/m11-assignment11-server.git
cd ms-marathon-server
npm install
```

Create a `.env` file in the root:

```
PORT=5000
DB_USER=your_db_username
DB_PASS=your_db_password
SERVICE_KEY=your_firebase_service_account_key_in_base64
```

Then run:

```bash
npm start
```

---

## 📡 API Overview

| Method | Endpoint                | Description                            |
|--------|-------------------------|----------------------------------------|
| GET    | /marathons              | Get marathons for a specific user      |
| GET    | /limited-marathons      | Get limited number of marathons        |
| GET    | /all-marathons          | Get all marathons                      |
| GET    | /specific-marathons     | Get details of a specific marathon     |
| POST   | /marathons              | Create new marathon                    |
| PUT    | /marathons              | Update marathon details                |
| DELETE | /marathons              | Delete a marathon                      |
| GET    | /participants           | Get participant details                |
| POST   | /participants           | Register as a participant              |
| PUT    | /participants           | Update participant info                |
| DELETE | /participants           | Delete participant registration        |
| GET    | /total-numbers          | Get total marathon & registration data |

---

## 🔐 Security

- Firebase Admin SDK is used for verifying tokens and securing routes.
- Middleware functions `verifyToken` and `verifyEmail` protect sensitive endpoints.

---

## 📝 Author

- **Name**: Tahmid Alam  
- **GitHub**: [@tahmid122](https://www.github.com/tahmid122)  
- **Email**: <mdtahmidalam122@gmail.com>
