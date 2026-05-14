# TechPro Admin Portal

A modern React-based inventory management system for electronics businesses. Built with Vite, React Router, and JSON Server for a seamless development experience.

## 🚀 Features

- **📱 Product Management**: Add, view, edit, and remove electronics products
- **🔍 Smart Search**: Filter products by name or category (phones, laptops, tablets, accessories)
- **💰 Price Editing**: Inline price updates with real-time synchronization
- **🗑️ Product Removal**: Delete products directly from the inventory view
- **📊 Admin Dashboard**: Centralized management interface
- **🎨 Modern UI**: Clean, responsive design with intuitive navigation

## 🛠️ Tech Stack

- **Frontend**: React 19.2.6 with React Router DOM
- **Build Tool**: Vite 8.0.12
- **Backend**: JSON Server (for development)
- **Styling**: CSS with custom components
- **Linting**: ESLint with React-specific rules

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd summative-lab-Building-a-React--based-personal-project-showcase-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (in a separate terminal)
   ```bash
   npx json-server --watch src/Data.json --port 3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AddProductForm.jsx      # Form to add new products
│   ├── Home.jsx                # Landing page with overview
│   ├── Navbar.jsx              # Navigation component
│   ├── ProductCard.jsx         # Individual product display with edit/remove
│   └── ProductContainer.jsx    # Product grid with search functionality
├── App.jsx                     # Main app component with routing
├── App.css                     # Global styles
├── Data.json                   # Mock data for JSON Server
├── index.css                   # Base styles
└── main.jsx                    # App entry point
```

## 🎯 Usage

### Navigation
- **Home**: Overview of the admin portal and services
- **Browse Inventory**: View all products with search and management options
- **List New Arrivals**: Add new products to inventory

### Product Management
1. **Adding Products**: Use the "List New Arrivals" page to add new electronics
2. **Editing Prices**: Click "Edit Price" on any product card to update pricing
3. **Removing Products**: Click "Remove Product" (red button) to delete items
4. **Searching**: Use the search bar to filter by product name or category

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 API Endpoints

The app uses JSON Server with the following endpoints:
- `GET /products` - Fetch all products
- `POST /products` - Add new product
- `PATCH /products/:id` - Update product price
- `DELETE /products/:id` - Remove product

## 🎨 Styling

The application uses custom CSS with:
- Modern card-based layout
- Responsive grid system
- Consistent color scheme (#00d4ff for accents)
- Hover effects and smooth transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@techpro.com or create an issue in the repository.

---

**Built with ❤️ using React & Vite**
