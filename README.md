# Stock Manager App

A comprehensive full-stack application for managing stock and inventory with real-time tracking, user authentication, and analytics.

## Features
- 📦 **Inventory Tracking** - Track stock levels in real-time
- 👤 **User Authentication** - Secure login with JWT
- 📊 **Reports & Analytics** - Generate detailed inventory reports
- 🔔 **Stock Alerts** - Get notified when stock levels are low
- ➕ **CRUD Operations** - Add, update, delete, and view products
- 📈 **Dashboard** - Visual representation of stock data

## Tech Stack
- **Frontend**: React, Axios, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure
```
stock-manager-app/
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ismailnevergiveup2022-lab/stock-manager-app.git
cd stock-manager-app
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Stock
- `GET /api/stock` - Get all stock records
- `POST /api/stock/alert` - Create stock alert
- `GET /api/stock/alerts` - Get all alerts

### Reports
- `GET /api/reports/inventory` - Generate inventory report
- `GET /api/reports/low-stock` - Get low stock items

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/stock-manager
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## License
MIT

## Author
ismailnevergiveup2022-lab