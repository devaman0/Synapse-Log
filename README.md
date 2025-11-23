# 📝 QuillBoard | MERN Blogging Platform

**QuillBoard** is a full‑stack blog application built using the **MERN stack (MongoDB, Express, React, Node.js)**.
Created as a **minor project**, this application provides a clean, modern interface along with a secure backend for user authentication and post management.

Users can **register**, **log in**, and manage their own posts with complete **CRUD functionality**.

---

## ✨ Key Features

* 🔐 **Secure Authentication** (Register & Login)
* 🔑 **JWT-based Authorization** for protected routes
* 🧂 **Hashed Passwords** using bcryptjs
* 📝 **Create / Read / Update / Delete** blog posts
* 🧍 **Author-only edit & delete** permissions
* 📦 **REST API Architecture**
* ⚡ **Fast Frontend** built with React + Vite
* 🎨 **Tailwind CSS UI** with a customizable theme
* 📱 **Fully Responsive** across all devices

---

## 🛠️ Tech Stack

| Category     | Technology   | Description                  |
| ------------ | ------------ | ---------------------------- |
| **Frontend** | React (Vite) | Component‑based UI framework |
|              | React Router | Client-side navigation       |
|              | Tailwind CSS | Utility-first styling        |
|              | Axios        | API requests                 |
| **Backend**  | Node.js      | JavaScript runtime           |
|              | Express.js   | Backend routing & server     |
|              | MongoDB      | NoSQL database               |
|              | Mongoose     | MongoDB ORM                  |
|              | JWT          | Token authentication         |
|              | bcryptjs     | Password hashing             |

---

## 🏁 Getting Started (Local Setup)

Follow these steps to run the project on your system:

### ✅ Requirements

* Node.js (with npm)
* MongoDB Atlas account or local MongoDB
* Code editor (VS Code recommended)

---

### 1️⃣ Backend Setup (`/server`)

```bash
git clone <your-repo-url>
cd your-repo-name/server
npm install
```

Create a `.env` file inside `/server`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run the server:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup (`/client`)

```bash
cd ../client
npm install
```

Update Axios baseURL (`client/src/api/api.js`):

```js
baseURL: "http://localhost:5000/api"
```

Start frontend:

```bash
npm run dev
```

App opens at:

```
http://localhost:5173
```

---

## 📖 API Endpoints

### 🔐 Authentication

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/auth/register` | Register user         |
| POST   | `/auth/login`    | Login & receive token |

### 📝 Posts

| Method | Endpoint     | Access  | Description   |
| ------ | ------------ | ------- | ------------- |
| GET    | `/posts`     | Public  | Get all posts |
| POST   | `/posts`     | Private | Create post   |
| PUT    | `/posts/:id` | Author  | Update post   |
| DELETE | `/posts/:id` | Author  | Delete post   |

---

## 💡 Future Improvements

* Tags & category filters
* Post search bar
* Comments section
* Image uploads
* User profile page

---

## 🧑‍💻 Author

**Annu Singh**

---
