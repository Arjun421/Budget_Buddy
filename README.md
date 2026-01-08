# Budget Buddy 💰

A full-stack personal finance management application to track income, expenses, and manage your budget effectively. Built with React, Node.js, Prisma ORM, and PostgreSQL.

---

## 🌐 Live Demo

- **Frontend**: [https://budget-buddy-alpha-five.vercel.app](https://budget-buddy-alpha-five.vercel.app)
- **Backend API**: [https://budget-buddy-w2aq.onrender.com](https://budget-buddy-w2aq.onrender.com)
- **GitHub Repository**: [https://github.com/Arjun421/Budget_Buddy](https://github.com/Arjun421/Budget_Buddy)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Local Setup](#-local-setup)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)

---

## ✨ Features

### 🏠 Landing Experience
- 🎨 Beautiful home page with comprehensive budgeting information
- 📖 Interactive welcome/onboarding flow
- 💡 Educational content about why budgeting matters
- 👥 Success stories and testimonials
- ❓ FAQ section for common questions

### Authentication & Security
- 🔐 JWT-based authentication (Login/Signup)
- 🔒 Secure password hashing with bcrypt
- 👤 Role-based access control (Admin/User)

### Transaction Management
- 💳 Full CRUD operations for transactions
- 🔍 Search by transaction name or description
- 🎯 Filter by amount range, type (income/expense), and category
- 📊 Sort by date, amount, or name (ascending/descending)
- 📄 Pagination for transaction history
- 📝 Categories: Food, Transport, Bills, Shopping, Entertainment, Healthcare, Other

### Budget Management
- 💰 Set monthly spending limits per category
- 📈 Track spending progress with visual progress bars
- ⚠️ Color-coded warnings (Green < 70%, Orange 70-90%, Red > 90%)
- 🎯 Budget vs actual spending comparison

### Dashboard Analytics
- 📊 Financial overview with 4 key metrics:
  - Total Income
  - Total Expenses
  - Current Balance
  - Estimated In-Hand Salary
- 🥧 Pie chart for expense breakdown by category
- 📈 Line chart for monthly income/expense trends (last 6 months)
- 📋 Recent transactions widget
- 🎯 Budget goals with progress tracking

### UI/UX
- 🎨 Clean, modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🌈 Color scheme: Emerald & Teal gradients
- ⚡ Fast and smooth animations
- 📊 Interactive charts using Recharts library
- 🇮🇳 Indian context with ₹ currency support

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Build Tool**: Vite
- **Deployment**: Vercel (Coming Soon)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL (Neon)
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Deployment**: Render (Coming Soon)

---

## 📁 Project Structure

```
Budget_Buddy/
├── backend/
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── prisma/
│   │   ├── schema.prisma        # Database schema
│   │   └── migrations/          # Database migrations
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── transaction.js       # Transaction CRUD & stats
│   │   └── budget.js            # Budget goals management
│   ├── .env                     # Environment variables
│   ├── .env.example             # Environment template
│   ├── server.js                # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── config/
│   │   │   └── api.js           # API URL configuration
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Welcome.jsx      # Onboarding flow
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Signup.jsx       # Signup page
│   │   │   ├── Dashboard.jsx    # Dashboard with analytics
│   │   │   ├── Transactions.jsx # Transaction management
│   │   │   └── Budget.jsx       # Budget goals page
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── .env.example             # Environment template
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (or Neon account)

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/Arjun421/Budget_Buddy.git
cd Budget_Buddy/backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
JWT_SECRET="your-super-secret-jwt-key-change-this"
PORT=4000
NODE_ENV=development
```

4. **Set up database**
```bash
npx prisma generate
npx prisma db push
```

5. **Start the server**
```bash
npm run dev
```

Backend will run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to frontend folder**
```bash
cd ../frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:4000
```

4. **Start the development server**
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

---

## 📚 API Documentation

### Base URL
- **Local Development**: `http://localhost:4000`
- **Production (Render)**: `https://budget-buddy-w2aq.onrender.com`

### Authentication Endpoints

#### Register User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Transaction Endpoints (Protected)

All transaction endpoints require JWT token in Authorization header:
```http
Authorization: Bearer <your-jwt-token>
```

#### Get All Transactions
```http
GET /api/transaction?page=1&limit=10&sortBy=date&order=desc&search=food&minAmount=100&maxAmount=5000&type=expense&category=Food
```

#### Create Transaction
```http
POST /api/transaction
Content-Type: application/json

{
  "name": "Grocery Shopping",
  "amount": 2500,
  "type": "expense",
  "category": "Food",
  "description": "Weekly groceries"
}
```

#### Update Transaction
```http
PUT /api/transaction/:id
Content-Type: application/json

{
  "name": "Updated name",
  "amount": 3000
}
```

#### Delete Transaction
```http
DELETE /api/transaction/:id
```

#### Get Statistics
```http
GET /api/transaction/stats/summary
GET /api/transaction/stats/category
GET /api/transaction/stats/monthly
```

### Budget Endpoints (Protected)

#### Get All Budgets
```http
GET /api/budget
```

#### Create Budget Goal
```http
POST /api/budget
Content-Type: application/json

{
  "category": "Food",
  "limit": 8000
}
```

#### Update Budget
```http
PUT /api/budget/:id
Content-Type: application/json

{
  "limit": 10000
}
```

#### Delete Budget
```http
DELETE /api/budget/:id
```

---

## 🚀 Deployment

### Backend Deployment on Render

1. **Create a Render Account**
   - Go to [render.com](https://render.com) and sign up
   - Connect your GitHub account

2. **Create a New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `https://github.com/Arjun421/Budget_Buddy`
   - Select the repository from the list

3. **Configure Web Service Settings**

   **Basic Settings:**
   ```
   Name: budget-buddy-backend
   Region: Oregon (US West) or Singapore (closest to you)
   Branch: main
   Root Directory: backend
   Runtime: Node
   ```

   **Build & Deploy Settings:**
   ```
   Build Command: npm install && npx prisma generate && npx prisma db push
   Start Command: node server.js
   ```

   **Instance Type:**
   ```
   Free (for testing) or Starter ($7/month for better performance)
   ```

4. **Environment Variables**
   
   Add these environment variables in Render dashboard:
   
   ```env
   DATABASE_URL=postgresql://neondb_owner:npg_VDmB5An3LGCk@ep-snowy-shadow-adkhncha-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-make-it-long-and-random
   
   PORT=4000
   
   NODE_ENV=production
   
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

   **Important Notes:**
   - Replace `JWT_SECRET` with a strong, random string (at least 32 characters)
   - Update `CORS_ORIGIN` with your actual Vercel frontend URL after deployment
   - The `DATABASE_URL` is your existing Neon PostgreSQL connection string

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your backend
   - Wait for the build to complete (usually 2-3 minutes)
   - Your backend will be available at: `https://budget-buddy-backend.onrender.com`

### Frontend Deployment on Vercel

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Connect your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository: `Budget_Buddy`
   - Select the repository

3. **Configure Project Settings**

   **Framework Preset:** Vite
   
   **Root Directory:** `frontend`
   
   **Build Settings:**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables**
   
   Add this environment variable in Vercel dashboard:
   ```env
   VITE_API_URL=https://budget-buddy-backend.onrender.com
   ```
   
   **Note:** Replace with your actual Render backend URL after backend deployment

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your frontend
   - Your frontend will be available at: `https://budget-buddy-frontend.vercel.app`

### Post-Deployment Steps

1. **Update CORS Origin**
   - After frontend deployment, update the `CORS_ORIGIN` environment variable in Render
   - Set it to your actual Vercel URL (e.g., `https://budget-buddy-frontend.vercel.app`)
   - Redeploy the backend service

2. **Test the Application**
   - Visit your Vercel frontend URL
   - Test user registration and login
   - Verify all features are working correctly

### Deployment Checklist

- [ ] Backend deployed on Render with correct environment variables
- [ ] Frontend deployed on Vercel with correct API URL
- [ ] CORS origin updated in backend
- [ ] Database connection working
- [ ] Authentication flow tested
- [ ] All API endpoints responding correctly

---

## 📸 Screenshots

### Login Page
Clean and modern login interface with gradient design.

### Dashboard
Comprehensive financial overview with charts and statistics.

### Transactions
Full transaction management with search, filter, sort, and pagination.

### Budget Goals
Visual budget tracking with progress bars and warnings.

---

## 🎯 Key Features Implemented

✅ **CRUD Operations**: Complete Create, Read, Update, Delete for transactions  
✅ **Searching**: Real-time search by transaction name or description  
✅ **Filtering**: Multiple filters (amount range, type, category)  
✅ **Sorting**: Sort by date, amount, or name (asc/desc)  
✅ **Pagination**: Navigate through large transaction lists  
✅ **Authentication**: Secure JWT-based auth system  
✅ **Role-based Access**: Admin privileges for certain operations  
✅ **Dashboard Analytics**: Visual charts and financial insights  
✅ **Budget Management**: Set and track spending limits  
✅ **Responsive Design**: Works on desktop, tablet, and mobile  

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 👨‍💻 Author

**Arjun Singh**
- GitHub: [@Arjun421](https://github.com/Arjun421)
- Repository: [Budget_Buddy](https://github.com/Arjun421/Budget_Buddy)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Neon for PostgreSQL database hosting
- Tailwind CSS for beautiful styling
- Recharts for interactive data visualization

---

**Made with ❤️ by Arjun Singh using React, Node.js, and Prisma**
