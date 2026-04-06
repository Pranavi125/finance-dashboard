# 💰 Finance Dashboard Backend

A backend system for a Finance Dashboard Application that manages financial records, user roles, and access control. This project demonstrates backend architecture, API design, data modeling, and role-based authorization.

---

## 🚀 Objective

This project showcases:
- API design and structure
- Role-based access control
- Financial data processing
- Dashboard analytics
- Clean and maintainable backend architecture

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js  
- Database: MongoDB  
- Authentication: JWT (if implemented)  
- Tools: Postman  

---

## 📁 Project Structure

finance-dashboard-backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/
│── server.js
│── package.json
│── README.md

---

## 👥 User Roles & Permissions

Viewer
- Can view dashboard data  
- Cannot modify records  

Analyst
- Can view financial records  
- Can access analytics  

Admin
- Full access  
- Can manage users and records  

---

## 📊 Financial Records

Fields:
- Amount  
- Type (Income / Expense)  
- Category  
- Date  
- Notes  

---

## 📡 API Endpoints

Authentication (Optional)
POST /api/auth/register  
POST /api/auth/login  

Users
GET /api/users  
POST /api/users  
PATCH /api/users/:id  

Financial Records
POST /api/records  
GET /api/records  
PUT /api/records/:id  
DELETE /api/records/:id  

Dashboard
GET /api/dashboard/summary  

---

## 🔐 Access Control

Viewer → Read only  
Analyst → Read + analytics  
Admin → Full CRUD access  

---

## ✅ Validation & Error Handling

- Input validation  
- Proper status codes  
- Clear error messages  

---

## 💾 Data Persistence

MongoDB is used for storing users and financial records.

---

## ⚙️ Installation & Setup

git clone https://github.com/Pranavi125/finance-dashboard.git  
cd finance-dashboard  
npm install  
npm start  

---

## 🎯 Optional Enhancements

- JWT Authentication  
- Pagination  
- Search  
- Soft delete  
- API documentation  

---

## 👩‍💻 Author

Pranavi K  
GitHub: https://github.com/Pranavi125  

---

## 📜 License

This project is for educational purposes.
