# Node.js Backend Repository

This repository contains multiple Node.js backend implementations using **Express.js** and related technologies, designed to demonstrate real-world backend concepts and best practices.

---

## Features & Implementations

### 1. Express.js Server Setup
- Basic server setup with Express.
- Middleware integration (body-parser, cors, etc.).
- Route handling and error management.

### 2. CRUD Operations with Array
- In-memory data storage using arrays.
- Create, Read, Update, Delete (CRUD) endpoints.
- Ideal for learning basic CRUD logic without a database.

### 3. CRUD Operations with MongoDB
- Integration with MongoDB using **Mongoose**.
- Schema design, model creation, and validation.
- Full CRUD functionality with persistent storage.

### 4. CRUD Operations with MVC Architecture
- Separation of concerns: **Model-View-Controller (MVC)**.
- Clean, maintainable, and scalable code structure.
- Includes routes, controllers, and models for modular development.

### 5. Authentication & JWT
- User registration and login system.
- Password hashing using **bcrypt**.
- Authentication using **JSON Web Tokens (JWT)**.
- Protected routes accessible only to authenticated users.

### 6. Socket.io Chat Application
- Real-time chat implementation using **Socket.io**.
- Private and group messaging support.
- Real-time notifications for new messages.

---

## Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose**  
- **JWT & bcrypt**  
- **Socket.io**  

---

## Learning Outcomes
- Understand RESTful API design and CRUD operations.  
- Learn authentication and authorization with JWT.  
- Build scalable and maintainable backend architecture (MVC).  
- Implement real-time communication using Socket.io.

---

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nodejs-backend-repo.git
cd nodejs-backend-repo
```
2. Install dependencies
```bash
npm install
```
3. Set environment variables
```bash
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4. Run the server
```bash
npm run dev
```
5. Access API

CRUD routes: /api/items
Authentication routes: /api/auth
Socket.io chat: /chat


