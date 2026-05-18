# GigFlow – Smart Leads Dashboard

<div align="center">

**A Modern, Full-Stack Lead Management CRM Built with MERN**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18%2B-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Live Demo](#live-demo) • [Quick Start](#quick-start) • [Documentation](#api-documentation) • [Docker Setup](#docker-setup)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [API Documentation](#api-documentation)
- [Role-Based Access Control](#role-based-access-control)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## 🎯 Overview

**GigFlow** is a professional-grade Smart Leads CRM Dashboard designed to help sales teams efficiently manage, track, and convert leads. Built with the MERN stack (MongoDB, Express, React, Node.js) and modern development practices, this application demonstrates clean architecture, scalable code design, and excellent user experience.

This project was developed as a Full Stack Development Internship assignment with emphasis on:
- Production-ready code quality
- TypeScript best practices
- Scalable system design
- Real-world engineering patterns
- Professional UI/UX

### Key Capabilities

- **Lead Management**: Create, read, update, and delete leads with detailed information
- **Advanced Filtering**: Multi-filter search with status, source, and name/email search
- **Role-Based Access**: Admin and Sales User roles with appropriate permissions
- **Data Export**: CSV export functionality for reporting and analysis
- **Pagination**: Backend-driven pagination for performance optimization
- **Responsive Design**: Mobile-friendly dashboard that works on all devices
- **Secure Authentication**: JWT-based auth with bcrypt password hashing
- **Docker Ready**: Fully containerized for easy deployment

---

## 🚀 Live Demo

| Component | URL |
|-----------|-----|
| **Frontend** | [https://gigflow-leads.vercel.app](https://gigflow-leads.vercel.app) |
| **Backend API** | [https://gigflow-api.onrender.com](https://gigflow-api.onrender.com) |
| **API Docs** | [https://gigflow-api.onrender.com/api-docs](https://gigflow-api.onrender.com/api-docs) |

### Demo Credentials

```
Admin Account:
Email: admin@gigflow.com
Password: Admin@123

Sales User Account:
Email: sales@gigflow.com
Password: Sales@123
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with modern Hooks
- **TypeScript 5** - Static type checking for reliability
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client for API communication
- **React Router v6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **React Query** - Server state management
- **Zod** - Schema validation

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express.js** - Minimal web framework
- **TypeScript** - Type-safe backend code
- **MongoDB Atlas** - Cloud NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Secure token authentication
- **bcryptjs** - Password hashing
- **Joi** - Request validation
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment configuration

### DevOps & Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Render** - Backend deployment (PaaS)
- **Vercel** - Frontend deployment (PaaS)
- **Git** - Version control

---

## ✨ Features Implemented

### 1. Authentication & Security
- ✅ User registration with email validation
- ✅ JWT-based login authentication
- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ Protected API routes with auth middleware
- ✅ Secure token storage and refresh mechanism
- ✅ Session timeout handling

### 2. Lead Management (CRUD)
- ✅ **Create Leads**: Form validation with TailwindCSS styling
- ✅ **View Leads**: List view with pagination
- ✅ **View Details**: Single lead detail page
- ✅ **Update Leads**: Edit modal with pre-filled data
- ✅ **Delete Leads**: Confirmation dialog before deletion

### 3. Lead Fields & Properties
```typescript
interface Lead {
  _id: string;
  name: string;
  email: string;
  status: "New" | "Contacted" | "Qualified" | "Lost";
  source: "Website" | "Instagram" | "Referral";
  createdAt: Date;
  updatedAt: Date;
  assignedTo: string; // User ID
}
```

### 4. Advanced Filtering & Search
- ✅ **Filter by Status**: New, Contacted, Qualified, Lost
- ✅ **Filter by Source**: Website, Instagram, Referral
- ✅ **Search**: By name or email (case-insensitive)
- ✅ **Debounced Search**: 300ms debounce for optimal performance
- ✅ **Multi-Filter Support**: Combine multiple filters simultaneously
- ✅ **Sort Options**: Latest (newest first), Oldest (oldest first)

**Example Filter Combination:**
```
Status: Qualified
Source: Instagram
Search: "Rahul"
Sort: Latest
```

### 5. Pagination
- ✅ Backend-driven pagination (mandatory requirement)
- ✅ 10 records per page
- ✅ Proper skip and limit implementation
- ✅ Metadata in API response (totalRecords, totalPages, currentPage)
- ✅ Frontend pagination controls

### 6. Dashboard UI/UX
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Reusable component architecture
- ✅ Loading states with skeleton screens
- ✅ Empty states with helpful messages
- ✅ Error handling with user-friendly messages
- ✅ Form validation with real-time feedback
- ✅ Clean sidebar navigation
- ✅ Modal-based forms for lead operations

### 7. CSV Export Functionality
- ✅ Export filtered leads to CSV
- ✅ Includes all lead information
- ✅ Respects current filters and search
- ✅ Browser-based download

### 8. Role-Based Access Control (RBAC)
- ✅ **Admin Role**: Full system access
- ✅ **Sales User Role**: Limited to assigned leads
- ✅ Route protection based on roles
- ✅ UI elements hidden based on permissions

### 9. API Standards
- ✅ RESTful API design
- ✅ Proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)
- ✅ Centralized error handling
- ✅ Request validation middleware
- ✅ Consistent JSON response format
- ✅ API documentation with examples

---

## 📁 Project Structure

```
gigflow/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── ProtectedRoute.tsx
│   │   │   ├── Leads/
│   │   │   │   ├── LeadsTable.tsx
│   │   │   │   ├── LeadForm.tsx
│   │   │   │   ├── LeadDetails.tsx
│   │   │   │   ├── FilterBar.tsx
│   │   │   │   └── ExportButton.tsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   └── SideBar.tsx
│   │   │   ├── Common/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Loading.tsx
│   │   │   │   ├── ErrorBoundary.tsx
│   │   │   │   └── Modal.tsx
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── LeadsPage.tsx
│   │   │   ├── LeadDetailPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── leads.service.ts
│   │   │   └── types.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useLeads.ts
│   │   │   └── usePagination.ts
│   │   ├── utils/
│   │   │   ├── validation.ts
│   │   │   ├── constants.ts
│   │   │   └── helpers.ts
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── .env.example
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Lead.ts
│   │   │   └── types.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── leads.controller.ts
│   │   │   └── stats.controller.ts
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── leads.routes.ts
│   │   │   └── stats.routes.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── rbac.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── errorHandler.middleware.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── leads.service.ts
│   │   │   └── email.service.ts
│   │   ├── validators/
│   │   │   ├── auth.validator.ts
│   │   │   └── leads.validator.ts
│   │   ├── utils/
│   │   │   ├── jwt.util.ts
│   │   │   ├── password.util.ts
│   │   │   ├── response.util.ts
│   │   │   └── constants.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   └── environment.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 💻 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **MongoDB** (local or Atlas account)
- **Git** ([Download](https://git-scm.com/))
- **Docker** (optional, for containerized setup)

### Local Development Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gigflow.git
cd gigflow
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
cp .env.example .env

# Start the backend server
npm run dev
```

The backend will start on `http://localhost:5000`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (in new terminal)
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the frontend development server
npm run dev
```

The frontend will start on `http://localhost:5173`

#### 4. Verify Setup

- Open `http://localhost:5173` in your browser
- Register a new account or use demo credentials
- Start managing leads!

---

## 🔧 Environment Variables

### Backend `.env`

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/gigflow?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:5173

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Environment
VITE_ENV=development
```

### `.env.example` Files

Create `.env.example` files in both directories with the above structure (without sensitive values):

**backend/.env.example**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://username:password@your-cluster.mongodb.net/gigflow
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
FRONTEND_URL=http://localhost:5173
```

**frontend/.env.example**
```env
VITE_API_URL=http://localhost:5000/api
VITE_ENV=development
```

---

## 🐳 Docker Setup

### Prerequisites

- Docker installed ([Download](https://www.docker.com/products/docker-desktop))
- Docker Compose included with Docker Desktop

### Quick Start with Docker

#### 1. Prepare Environment Files

```bash
# Create environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Update backend/.env with your MongoDB URI and JWT_SECRET
```

#### 2. Run with Docker Compose

```bash
# From the root directory
docker-compose up --build
```

This will:
- Build both frontend and backend images
- Start MongoDB container
- Start backend service on port 5000
- Start frontend service on port 5173

#### 3. Verify Services

- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000/api`

#### 4. Stop Services

```bash
docker-compose down
```

### Docker Compose File Structure

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://admin:password@mongodb:27017/gigflow
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://localhost:5000/api

volumes:
  mongodb_data:
```

### Build Individual Images

```bash
# Build backend
docker build -t gigflow-backend ./backend

# Build frontend
docker build -t gigflow-frontend ./frontend

# Run containers
docker run -p 5000:5000 gigflow-backend
docker run -p 5173:5173 gigflow-frontend
```

---

## 📚 API Documentation

### Base URL

```
Development: http://localhost:5000/api
Production: https://gigflow-api.onrender.com/api
```

### Response Format

All responses follow a consistent JSON structure:

**Success Response (2xx)**
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation successful"
}
```

**Error Response (4xx, 5xx)**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [ /* validation errors */ ]
  }
}
```

### Authentication Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass@123",
  "role": "SALES_USER"
}
```

**Response (201 Created)**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "email": "user@example.com",
      "role": "SALES_USER"
    }
  },
  "message": "User registered successfully"
}
```

#### Login User

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass@123"
}
```

**Response (200 OK)**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "email": "user@example.com",
      "role": "SALES_USER"
    }
  },
  "message": "Login successful"
}
```

### Leads Endpoints

#### Get All Leads (with Pagination & Filters)

```http
GET /api/leads?page=1&status=Qualified&source=Instagram&search=Rahul&sort=latest
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (number): Page number, default 1
- `limit` (number): Records per page, default 10
- `status` (string): Filter by status (New, Contacted, Qualified, Lost)
- `source` (string): Filter by source (Website, Instagram, Referral)
- `search` (string): Search by name or email
- `sort` (string): Sort order (latest, oldest)

**Response (200 OK)**
```json
{
  "success": true,
  "data": {
    "leads": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "name": "Rahul Kumar",
        "email": "rahul@example.com",
        "status": "Qualified",
        "source": "Instagram",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalRecords": 47,
      "recordsPerPage": 10,
      "hasNextPage": true,
      "hasPreviousPage": false
    }
  },
  "message": "Leads retrieved successfully"
}
```

#### Create Lead

```http
POST /api/leads
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "New",
  "source": "Website"
}
```

**Response (201 Created)**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "New",
    "source": "Website",
    "createdAt": "2024-01-20T14:20:00Z",
    "updatedAt": "2024-01-20T14:20:00Z"
  },
  "message": "Lead created successfully"
}
```

#### Get Single Lead

```http
GET /api/leads/:id
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Rahul Kumar",
    "email": "rahul@example.com",
    "status": "Qualified",
    "source": "Instagram",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-18T16:45:00Z"
  },
  "message": "Lead retrieved successfully"
}
```

#### Update Lead

```http
PUT /api/leads/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "Contacted",
  "source": "Referral"
}
```

**Response (200 OK)**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Rahul Kumar",
    "email": "rahul@example.com",
    "status": "Contacted",
    "source": "Referral",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-20T15:00:00Z"
  },
  "message": "Lead updated successfully"
}
```

#### Delete Lead

```http
DELETE /api/leads/:id
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
  "success": true,
  "message": "Lead deleted successfully"
}
```

#### Get Lead Statistics

```http
GET /api/leads/stats
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
  "success": true,
  "data": {
    "totalLeads": 145,
    "newLeads": 32,
    "contactedLeads": 45,
    "qualifiedLeads": 52,
    "lostLeads": 16,
    "sourceBreakdown": {
      "Website": 58,
      "Instagram": 62,
      "Referral": 25
    }
  },
  "message": "Statistics retrieved successfully"
}
```

### Error Responses

#### Validation Error (400)

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "email", "message": "Invalid email format" },
      { "field": "password", "message": "Password must be at least 8 characters" }
    ]
  }
}
```

#### Authentication Error (401)

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid credentials or token expired"
  }
}
```

#### Authorization Error (403)

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions for this action"
  }
}
```

#### Not Found (404)

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

---

## 🔐 Role-Based Access Control (RBAC)

### Roles Overview

#### Admin Role
- **Permissions**: Full system access
- **Capabilities**:
  - Create, read, update, delete all leads
  - View all leads regardless of assignment
  - Access admin dashboard with system statistics
  - Manage user roles and permissions
  - Export all leads data
  - View activity logs

#### Sales User Role
- **Permissions**: Limited to assigned leads
- **Capabilities**:
  - Create new leads
  - View only leads assigned to them
  - Update leads assigned to them
  - Delete leads assigned to them
  - Search and filter their assigned leads
  - Export their assigned leads
  - Cannot manage other users or system settings

### Implementation Details

```typescript
// Backend Middleware
export const checkRole = (requiredRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    
    if (!userRole || !requiredRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        error: {
          code: "FORBIDDEN",
          message: "Insufficient permissions"
        }
      });
    }
    
    next();
  };
};

// Route Protection
router.get('/leads', 
  verifyToken, 
  checkRole(['ADMIN', 'SALES_USER']), 
  getLeads
);

router.delete('/leads/:id', 
  verifyToken, 
  checkRole(['ADMIN']), 
  deleteLead
);
```

### Frontend Role Check

```typescript
// Check user role before rendering
{user?.role === 'ADMIN' && (
  <AdminPanel />
)}

{user?.role === 'SALES_USER' && (
  <SalesUserDashboard />
)}
```

---

## 📸 Screenshots

### Authentication
- **Login Page** - Clean login form with email/password validation
- **Register Page** - User registration with role selection

### Dashboard
- **Main Dashboard** - Overview with stats cards and lead summary
- **Stats Cards** - Total leads, new leads, qualified leads, conversion metrics

### Leads Management
- **Leads Table** - Paginated leads list with sorting
- **Filter Bar** - Multi-filter interface (status, source, search)
- **Create Lead Modal** - Form to add new leads
- **Edit Lead Modal** - Form to update existing leads
- **Lead Details Page** - Detailed view of single lead

### Features
- **CSV Export** - Download filtered leads as CSV
- **Responsive Design** - Mobile, tablet, and desktop layouts
- **Loading States** - Skeleton screens during data fetch
- **Empty States** - Helpful messages when no data exists
- **Error Handling** - User-friendly error notifications

### Docker Setup
- **Docker Compose** - Multi-container setup
- **Containerized Services** - Frontend, backend, and database

---

## 🔄 TypeScript Implementation

This project enforces strict TypeScript practices:

### Type Definitions

```typescript
// Shared Types
export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Lost';
export type LeadSource = 'Website' | 'Instagram' | 'Referral';
export type UserRole = 'ADMIN' | 'SALES_USER';

// Lead Interface
export interface Lead {
  _id: string;
  name: string;
  email: string;
  status: LeadStatus;
  source: LeadSource;
  createdAt: Date;
  updatedAt: Date;
  assignedTo: string;
}

// API Response Interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown[];
  };
  message?: string;
}
```

### Backend Controllers with Proper Types

```typescript
export const getLeads = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, status, source, search, sort } = req.query;
    
    const leads: Lead[] = await Lead.find(filters)
      .skip((page - 1) * 10)
      .limit(10);
    
    res.json({
      success: true,
      data: { leads, pagination },
      message: 'Leads retrieved'
    });
  } catch (error) {
    handleError(res, error);
  }
};
```

---

## ✅ Quality Assurance

### Code Quality Standards

- ✅ **TypeScript Strict Mode**: All files use `strict: true`
- ✅ **No `any` Types**: Properly typed functions and variables
- ✅ **Interfaces & Types**: Comprehensive type definitions
- ✅ **Error Handling**: Try-catch blocks and error middleware
- ✅ **Validation**: Request validation with Joi/Zod
- ✅ **Reusable Components**: DRY principle followed
- ✅ **Clean Architecture**: Separation of concerns
- ✅ **Git Commits**: Meaningful, descriptive commit messages

### Performance Optimizations

- ✅ Debounced search (300ms)
- ✅ Backend pagination for large datasets
- ✅ Lazy loading of components
- ✅ Optimized database queries with indexes
- ✅ CSS minification with TailwindCSS
- ✅ Image optimization

### Security Measures

- ✅ JWT authentication with expiration
- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ CORS configuration
- ✅ Input validation and sanitization
- ✅ Protected routes with middleware
- ✅ Environment variable protection
- ✅ SQL injection prevention (MongoDB)

---

## 🚀 Deployment

### Backend Deployment (Render)

1. Push repository to GitHub
2. Connect GitHub repository to Render
3. Add environment variables in Render dashboard
4. Deploy: Render will automatically build and deploy

**Backend URL**: `https://gigflow-api.onrender.com`

### Frontend Deployment (Vercel)

1. Connect GitHub repository to Vercel
2. Set `VITE_API_URL` environment variable
3. Deploy: Vercel will automatically build and deploy

**Frontend URL**: `https://gigflow-leads.vercel.app`

### Database (MongoDB Atlas)

1. Create free MongoDB cluster on Atlas
2. Get connection string
3. Add to backend environment variables as `MONGO_URI`
4. Whitelist IP addresses

---

## 📈 Future Improvements

- [ ] **Dark Mode**: Theme toggle for dark/light interface
- [ ] **Advanced Analytics**: Graphs and charts for lead trends
- [ ] **Real-time Notifications**: WebSocket integration for live updates
- [ ] **Email Notifications**: Send updates on lead status changes
- [ ] **Bulk Operations**: Bulk edit, delete, or export leads
- [ ] **Lead Comments**: Add notes and comments to leads
- [ ] **Activity Timeline**: Track all lead interactions
- [ ] **Mobile App**: React Native or Flutter mobile application
- [ ] **Advanced Search**: Elasticsearch integration
- [ ] **AI-Powered Insights**: Predictive analytics for lead conversion
- [ ] **Integration APIs**: Connect with Slack, WhatsApp, etc.
- [ ] **Two-Factor Authentication**: Enhanced security
- [ ] **Audit Logs**: Complete system activity tracking

---

## 🛟 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5000 (Backend)
lsof -i :5000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 5173 (Frontend)
lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### MongoDB Connection Issues

```bash
# Verify connection string in .env
# Check MongoDB Atlas cluster is running
# Ensure IP is whitelisted
# Test connection: mongosh "your_connection_string"
```

### CORS Errors

```bash
# Update CORS_ORIGIN in backend .env
# Ensure frontend URL matches exactly
# Restart backend after changes
```

### Docker Issues

```bash
# Remove all containers
docker-compose down -v

# Rebuild from scratch
docker-compose up --build

# View logs
docker-compose logs -f
```

---

## 📝 Available Scripts

### Backend

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript to JavaScript
npm start        # Run compiled JavaScript
npm run lint     # Check code quality
npm run format   # Format code with Prettier
```

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
npm run format   # Format code with Prettier
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

### Acknowledgments

- **Assignment By**: Service Hive / Hiring Team
- **Project Mentor**: [Mentor Name]
- **Built with**: MERN Stack, TypeScript, TailwindCSS, Docker

---

## 📞 Support

For issues, questions, or feedback, please:

1. Check existing [Issues](https://github.com/yourusername/gigflow/issues)
2. Create a new issue with detailed description
3. Email: your.email@example.com

---

<div align="center">

**Made with ❤️ for the GigFlow Project**

⭐ Star this repository if you found it helpful!

</div>
