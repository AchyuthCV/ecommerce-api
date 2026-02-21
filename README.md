# 🛒 E-Commerce Backend API — Database Integration 

This project is a RESTful E-Commerce Backend API developed as part of **Task 3: Database Integration (Intermediate Level)**.  
It demonstrates database integration using MongoDB and Mongoose with full CRUD operations and relational data modeling.

---

## 🎯 Task Objective

Integrate a database and perform CRUD operations on stored data using an ORM.

---

## 🚀 Features

- 🛢 MongoDB Atlas Integration
- ⚡ Mongoose ORM
- 📦 Product Management (CRUD)
- 🏷 Category Management
- 👤 User (Seller) Management
- 🔗 Relationships between collections
- ✅ Data validation
- 📄 RESTful API design
- 🧪 Tested using Postman

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **ORM:** Mongoose  
- **Testing:** Postman  

---

## 🧠 Database Design

### Collections

#### 👤 Users (Sellers)
Stores seller information.

#### 🏷 Categories
Groups products.

#### 📦 Products
References:
- Category
- Seller

Relationships implemented using MongoDB ObjectId references and populated using Mongoose `.populate()`.

---

## 🔧 CRUD Operations

### 📦 Products

| Method | Endpoint                  | Description        |
|--------|--------------------------|--------------------|
| POST   | /api/products            | Create product     |
| GET    | /api/products            | Get all products   |
| GET    | /api/products/:id        | Get product by ID  |
| PUT    | /api/products/:id        | Update product     |
| DELETE | /api/products/:id        | Delete product     |

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-backend-api.git
cd ecommerce-backend-api
```
### 2️⃣ Install dependencies
npm install

### 3️⃣ Create .env file

Create a .env file in the root directory and add:

PORT=5000
MONGODB_URI=your_mongodb_connection_string

### 4️⃣ Run the server
npm run dev

