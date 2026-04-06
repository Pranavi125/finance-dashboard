```md
# 💰 Finance Dashboard (Full Stack)

A full-stack Finance Dashboard application that allows users to manage financial records, view analytics, and access data based on role-based permissions.

This project demonstrates backend architecture, API design, access control, and frontend integration.

---

## 🚀 Objective

This project showcases:

- Backend API design and structure  
- Role-based access control  
- Financial data management  
- Dashboard analytics  
- Frontend integration with backend  
- Clean and scalable architecture  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Tools
- Postman  
- Git & GitHub  

---

## 📁 Project Structure

```

finance-dashboard/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
│── README.md

```

---

## 👥 User Roles & Permissions

### Viewer
- Can view dashboard  
- Cannot modify data  

### Analyst
- Can view records  
- Can access analytics  

### Admin
- Full access  
- Can manage users and records  

---

## 🔐 Authentication

- User signup and login implemented  
- Authentication can be extended using JWT  

---

## 📊 Financial Records

Each record contains:

- Amount  
- Type (Income / Expense)  
- Category  
- Date  
- Notes  

---

## 📡 API Endpoints

### Authentication
POST /api/auth/register  
POST /api/auth/login  

### Users
GET /api/users  
POST /api/users  
PATCH /api/users/:id  

### Records
POST /api/records  
GET /api/records  
PUT /api/records/:id  
DELETE /api/records/:id  

### Dashboard
GET /api/dashboard/summary  

---

## 📈 Dashboard Features

- Total Income  
- Total Expenses  
- Net Balance  
- Transaction listing  
- Future support for charts  

---

## 🔐 Access Control

Role-based access control is enforced:

- Viewer → Read-only  
- Analyst → Read + analytics  
- Admin → Full CRUD  

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

### Clone Repository
```

git clone [https://github.com/Pranavi125/finance-dashboard.git](https://github.com/Pranavi125/finance-dashboard.git)
cd finance-dashboard

```

### Backend Setup
```

cd backend
npm install
npm start

```

### Frontend Setup
```

cd frontend
npm install
npm run dev

```

---

## 🎯 Features Implemented

- User signup UI  
- Dashboard UI with financial summary  
- Record creation and listing  
- Clean UI with responsive design  

---

## 🚧 Future Enhancements

- JWT Authentication  
- Charts and analytics  
- Pagination and search  
- Role-based UI rendering  
- API documentation  

---

## 👩‍💻 Author

Pranavi K  
GitHub: https://github.com/Pranavi125  

---

## 📜 License

This project is for educational and assessment purposes.
```
