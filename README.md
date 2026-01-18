# Experiment 1 – State Management using Context API and Redux Toolkit

## 📌 Aim
To develop a React application that demonstrates state management using Context API for authentication and Redux Toolkit for product management with role-based access.

## 🧠 Description
This project is a simple React application created as part of the **Full Stack – 2** course.  
It uses:
- **Context API** to manage authentication state (login, logout, user role)
- **Redux Toolkit** to manage product data
- **Role-based UI** to show different features for admin and normal users

## 🛠 Technologies Used
- React (Vite)
- Context API
- Redux Toolkit
- React Redux
- JavaScript

## 🗂 Project Structure
src/
│── components/
│ ├── Login.jsx
│ └── Dashboard.jsx
│
│── context/
│ └── AuthContext.jsx
│
│── redux/
│ ├── ProductSlice.js
│ └── store.js
│
│── App.jsx
│── main.jsx

## ⚙️ How the Experiment Works

### 1️⃣ Authentication using Context API
- AuthContext stores:
  - isLoggedIn
  - userName
  - role (admin or user)
- Login and logout functions update global authentication state.

### 2️⃣ Product Management using Redux Toolkit
- Redux slice manages product list.
- Actions available:
  - Add product
  - Remove product

### 3️⃣ Role-Based Access
- Admin user can add and remove products.
- Normal user can only view products.
- UI changes dynamically based on user role.

## 🔐 Login Credentials

### Admin Login
- Email: `admin@example.com`
- Password: `password`

### Normal User Login
- Email: `user@example.com` (or any email)
- Password: `password`

## ▶️ How to Run the Project
```bash
npm install
npm run dev
