# 🛍️ ShopSphere

A modern and responsive e-commerce frontend built with **React** and **Vite**. ShopSphere provides a seamless shopping experience where users can browse products, search and filter items, manage their cart and wishlist, and place orders through a secure checkout flow.

---

## ✨ Features

- Responsive and modern UI for desktop, tablet, and mobile
- Product listing with search, category filters, sorting, ratings, and discount prices
- Detailed product pages with complete product information
- Wishlist management
- Persistent shopping cart using Local Storage
- User authentication (Login & Register)
- Protected checkout and order history pages
- Multiple payment options (UPI, Credit/Debit Card, Cash on Delivery)
- Duplicate order prevention
- Order history with delete functionality
- Toast notifications for user actions
- Responsive navigation and clean user experience

---

## Live Demo

https://shop-sphere-alpha-seven.vercel.app/

---

## 🛠️ Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Icons
- React Hot Toast
- Local Storage

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/your-username/shopsphere.git

cd shopsphere

npm install

npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server

npm run build    # Build for production

npm run preview  # Preview production build

npm run lint     # Run ESLint
```

---

## 📄 Application Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section, categories, featured products, testimonials, and newsletter |
| `/products` | Browse all products with search, filters, and sorting |
| `/product/:id` | Product details page |
| `/wishlist` | Saved wishlist items |
| `/cart` | Shopping cart |
| `/checkout` | Protected checkout page |
| `/orders` | Protected order history |
| `/login` | User login |
| `/register` | User registration |

---

## 📁 Project Structure

```
src/
│
├── components/      # Reusable UI components
├── contexts/        # Auth, Cart & Wishlist Context
├── pages/           # Application pages
├── routes/          # Protected Routes
├── services/        # API calls
├── utils/           # Helper functions
└── assets/          # Images & Icons
```

---

## 💾 Data Storage

This is a frontend-only project.

The following data is stored using **Local Storage**:

- User Authentication
- Shopping Cart
- Wishlist
- Order History

---

## 💳 Payment

The payment section is designed for demonstration purposes.

Available payment options:

- UPI
- Credit / Debit Card
- Cash on Delivery (COD)

> No real payment gateway is integrated.

---

## 📌 Future Improvements

- Backend Integration
- JWT Authentication
- Online Payment Gateway (Stripe/Razorpay)
- Product Reviews
- User Profile Management
- Admin Dashboard
- Order Tracking

---

## 👩‍💻 Author

**Simran Jaiswal**

GitHub: https://github.com/simranjaiswal801
