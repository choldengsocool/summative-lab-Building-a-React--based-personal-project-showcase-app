# TechPro Product Manager

A modern, full-featured e-commerce platform built with React and Vite, combining a public shopping experience with a secure admin inventory management system.

## 🎯 Project Overview

TechPro Product Manager is a Single Page Application (SPA) that demonstrates advanced React concepts including client-side routing, state management with hooks, data fetching, and responsive UI design. The platform serves both customers (browsing and shopping) and administrators (inventory management with audit logging).

## ✨ Features

### 👥 Customer Features
- **Home Page**: Hero section with product category showcase
- **Product Shop**: Browse all products with grid layout, filtering, and search
- **Product Details**: Click through to view full product information
- **Shopping Cart**: Add/remove items, adjust quantities, view totals
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile

### 🔐 Admin Features
- **Secure Login**: Authentication required for inventory access
- **Product Management**: 
  - Add new products
  - Edit product prices and details
  - Delete products from inventory
- **Search & Filter**: Find products by name or category
- **Security Audit Log**: 
  - Track all admin actions (login, logout, create, update, delete)
  - Timestamp and details for each action
  - Real-time log display

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + Vite |
| **Routing** | React Router DOM v6 |
| **State Management** | React Hooks (useState, useEffect) |
| **Backend (Dev)** | json-server (mock API) |
| **Data Storage** | JSON (Data.json) |
| **Styling** | CSS3 (custom theme) |
| **Package Manager** | npm |

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app component with routing & state
├── App.css                 # Global styles and theme
├── main.jsx               # Entry point
├── components/
│   ├── Home.jsx           # Landing page
│   ├── Navbar.jsx         # Navigation with cart count
│   ├── Shop.jsx           # Product catalog
│   ├── ShopProductCard.jsx # Product card for shop
│   ├── ProductDetail.jsx  # Single product view
│   ├── Cart.jsx           # Shopping cart page
│   ├── ProductContainer.jsx # Admin inventory view
│   ├── ProductCard.jsx    # Admin product card (edit/delete)
│   ├── AddProductForm.jsx # Add product form
│   ├── LoginForm.jsx      # Admin login form
│   └── assets/            # Images and icons
├── Data.json              # Product database
└── index.html             # HTML template

public/                     # Static assets
eslint.config.js            # ESLint configuration
vite.config.js              # Vite configuration
package.json                # Project metadata & dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone or navigate to the project:**
```bash
cd /path/to/products
```

2. **Install dependencies:**
```bash
npm install
```

### Running the Application

You'll need to run two terminals:

**Terminal 1: Start the backend API server**
```bash
npx json-server --watch src/Data.json --port 3000
```
Backend will be available at `http://localhost:3000`

**Terminal 2: Start the development server**
```bash
npm run dev
```
Frontend will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

## 🗺️ Routes

| Route | Purpose | Auth Required |
|-------|---------|---------------|
| `/` | Home page / landing | No |
| `/shop` | Product catalog | No |
| `/products/:productId` | Product detail page | No |
| `/cart` | Shopping cart | No |
| `/admin` | Inventory dashboard | Yes |
| `/add` | Add new product form | Yes |

## 🔐 Admin Access

### Test Login
- **Username**: admin
- **Password**: (any value)

The login system is a demo implementation. In production, integrate with:
- Firebase Authentication
- Auth0
- JWT tokens
- OAuth 2.0

## 📊 State Management

App.jsx manages:
- `products`: Array of all available products
- `cartItems`: Shopping cart with quantities
- `currentUser`: Logged-in admin user
- `logs`: Audit trail entries

All state is passed down via props to child components.

## 🔍 Key Components

### App.jsx
- Central state management
- Route definitions
- Cart operations (add, remove, update quantity)
- Login/logout handlers
- Product CRUD operations

### ProductContainer.jsx
- Admin inventory view
- Product grid with search/filter
- Edit and delete actions
- Audit log display

### Cart.jsx
- Shopping cart visualization
- Quantity controls
- Item removal
- Total price calculation

### LoginForm.jsx
- Simple authentication UI
- Validation for empty fields
- Triggers audit log entries

## 🎨 Design

- **Theme**: Dark mode with blue accents
- **Colors**:
  - Primary: `#2563eb` (Blue)
  - Background: `#09101f` (Dark Navy)
  - Text: `#eef2ff` (Light Blue)
- **Animations**: Smooth transitions and hover effects
- **Typography**: Inter font family with responsive scaling

## 📝 Available Scripts

```bash
npm run dev           # Start development server with HMR
npm run build         # Build for production
npm run lint          # Run ESLint
npm run preview       # Preview production build locally
```

## 🔄 Data Flow

```
User Action
    ↓
Event Handler in Component
    ↓
Update React State (App.jsx)
    ↓
Fetch API Call to json-server (optional)
    ↓
Re-render Component Tree
    ↓
UI Updates
    ↓
Audit Log Entry (if admin action)
```

## 🧪 Testing

The app is ready for testing frameworks like:
- Jest (unit tests)
- React Testing Library (component tests)
- Cypress (e2e tests)

Example component test stub:
```javascript
describe('ShopProductCard', () => {
  it('should display product details', () => {
    // Test implementation
  });
});
```

## 📈 Future Enhancements

- [ ] Real database (PostgreSQL, MongoDB)
- [ ] Payment processing (Stripe, PayPal)
- [ ] User accounts for customers
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Advanced admin permissions
- [ ] Real-time notifications
- [ ] Performance analytics
- [ ] Search optimization (Algolia)
- [ ] Image upload system

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the existing process
pkill -f "json-server"

# Restart json-server
npx json-server --watch src/Data.json --port 3000
```

### Data Not Persisting
- Ensure `json-server` is running on port 3000
- Check that `src/Data.json` exists and is readable
- Verify API calls in browser DevTools Network tab

### Routing Issues
- Clear browser cache
- Ensure all route paths are correct in `App.jsx`
- Check that `react-router-dom` is installed: `npm install react-router-dom`

## 📚 Learning Resources

This project demonstrates:
- React hooks (useState, useEffect)
- React Router for SPA navigation
- Component composition and prop drilling
- Fetch API for data operations
- Event handling and form management
- Conditional rendering
- List rendering with .map()
- CSS styling and responsive design

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 👤 Author

Created as a comprehensive e-commerce platform demo combining React fundamentals with enterprise-grade patterns.

---

**Status**: ✅ Production Ready (as a demo/learning project)  
**Last Updated**: May 2026