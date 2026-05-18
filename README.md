# 🚀 GigFlow – Smart Leads Dashboard

<p align="center">
  <b>A Full-Stack MERN Lead Management Dashboard</b><br/>
  Built for the <b>ServiceHive Full Stack Internship Assignment</b>
</p>

---

## 🚀 Live Demo

### 🌐 Frontend
```bash
https://gigflow-smart-leads-dashboard-ekvs.vercel.app/
```

### ⚙️ Backend API
```bash
https://gigflow-backend-cc47.onrender.com/
```

---

# 📌 Project Objective

The objective of this assignment was to build a scalable Lead Management Dashboard using the MERN stack with:

- Clean architecture
- TypeScript best practices
- RESTful API design
- Secure authentication
- Advanced filtering & pagination
- Role-based access control
- Docker setup
- Professional UI/UX
- Deployment-ready structure

The assignment evaluates real-world engineering practices including frontend architecture, backend APIs, database modeling, state management, code quality, and scalability.

---

# 🛠️ Tech Stack

## 🎨 Frontend
- React.js
- TypeScript
- TailwindCSS
- React Router DOM
- Axios
- Vite

## ⚙️ Backend
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## 🚀 DevOps & Deployment
- Docker
- Docker Compose
- Render (Backend Deployment)
- Vercel (Frontend Deployment)

---

# ✨ Features

## 🔐 Authentication & Security
- JWT-based Authentication
- Secure Login System
- Password Hashing using bcrypt
- Protected Routes
- Auth Middleware
- Role-Based Access Control (RBAC)

---

## 👥 Lead Management
- Create Lead
- Update Lead
- Delete Lead
- View Leads List
- View Single Lead Details

---

## 🔍 Advanced Filtering & Search
- Filter by Status
- Filter by Source
- Search by Name or Email
- Combined Filtering Support
- Sorting (Latest / Oldest)
- Debounced Search

---

## 📄 Pagination
- Backend Pagination
- Pagination Metadata
- Proper skip & limit usage

---

## 📊 Dashboard Features
- Dynamic Stats Cards
- CSV Export Functionality
- Leads Table
- Sidebar Navigation
- Loading States
- Empty States
- Error Handling UI

---

## 🎨 UI/UX
- Responsive Layout
- Reusable Components
- Modular Folder Structure
- Modal-based Forms
- Clean SaaS-style Interface

---

## 🐳 DevOps
- Dockerized Frontend
- Dockerized Backend
- Docker Compose Setup
- Production Deployment

---

# 🔐 Role-Based Access Control (RBAC)

The project supports two user roles:

| Role | Permissions |
|------|-------------|
| Admin | Full Access |
| Sales User | Limited Access |

---

## 👑 Admin Permissions
- Create Leads
- Edit Leads
- Delete Leads
- Export CSV
- Access all dashboard features

---

## 👤 Sales User Permissions
- View Leads
- Limited dashboard access
- Restricted CRUD actions

---

RBAC is enforced on both:

- Frontend UI
- Backend middleware

This ensures secure authorization beyond UI-level restrictions.

---

# 📁 Folder Structure

```bash
gigflow-smart-leads-dashboard
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   └── utils
│   │
│   ├── Dockerfile
│   └── .dockerignore
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── types
│   │   └── utils
│   │
│   ├── Dockerfile
│   │
│   └── .dockerignore
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Environment Variables

## Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Frontend `.env`

```env
VITE_API_URL=your_backend_api_url
```

---

# 💻 Local Development Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/gigflow-smart-leads-dashboard.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🐳 Docker Setup

The application is fully Dockerized.

## ▶️ Run Full Application

From project root:

```bash
docker compose up --build
```

---

## ⏹️ Stop Containers

```bash
docker compose down
```

---

# 📡 API Endpoints

## 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## 👥 Leads

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/leads` | Get All Leads |
| GET | `/api/leads/:id` | Get Single Lead |
| POST | `/api/leads` | Create Lead |
| PUT | `/api/leads/:id` | Update Lead |
| DELETE | `/api/leads/:id` | Delete Lead |
| GET | `/api/leads/stats` | Dashboard Stats |

---

# 📊 Core Assignment Requirements Covered

| Requirement | Status |
|-------------|--------|
| React + TypeScript | ✅ |
| Node + Express + TypeScript | ✅ |
| MongoDB + Mongoose | ✅ |
| JWT Authentication | ✅ |
| CRUD Operations | ✅ |
| Advanced Filtering | ✅ |
| Debounced Search | ✅ |
| Pagination | ✅ |
| CSV Export | ✅ |
| RBAC | ✅ |
| Docker Setup | ✅ |
| Deployment | ✅ |
| Responsive UI | ✅ |

---

# 🖼️ Screenshots

## 🔐 Login Page
<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/213f0bfa-57b5-4a55-99c3-cde4b3918561" />

---

## 📊 Dashboard
<img width="1918" height="973" alt="image" src="https://github.com/user-attachments/assets/459f36a5-0101-4372-b721-d90bc734d032" />


---

## 📋 Leads Table
<img width="1918" height="977" alt="image" src="https://github.com/user-attachments/assets/3baed493-640e-426d-8150-9e3a4151e0ca" />
<img width="1917" height="972" alt="image" src="https://github.com/user-attachments/assets/18221333-ffa5-4336-a1cb-79285d0ee66c" />



---

## ➕ Create Lead Modal
<img width="1918" height="968" alt="image" src="https://github.com/user-attachments/assets/1fb4dd20-477d-471c-ba60-f76ca9421f17" />

<img width="1918" height="982" alt="image" src="https://github.com/user-attachments/assets/264531b4-7e34-4b18-bb72-588ddbf6b01f" />


---

## 🐳 Dockerized Application
_Add screenshot here_

---

# 🚀 Future Improvements

- Dark Mode Support
- Real-time Notifications
- Advanced Analytics Dashboard
- Email Integration
- Activity Logs
- Team Collaboration Features
- Real-time Updates using WebSockets

---

# 📚 Learning Outcomes

This project helped strengthen understanding of:

- Full-stack TypeScript development
- JWT Authentication
- RESTful API architecture
- MongoDB schema design
- React component architecture
- Docker & containerization
- Production deployment workflows
- RBAC implementation
- Real-world engineering practices

---

<p align="center">
  Made for ServiceHive Assessment
</p>
