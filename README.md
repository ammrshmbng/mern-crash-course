# MERN Product Store 🛒

A simple yet powerful fullstack web application for product management built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Key Features 🚀

- View list of products with beautiful cards
- Add new products with form validation
- Update existing products
- Delete products with confirmation
- Dark/Light mode theme switch
- Fully responsive design
- Toast notifications for user feedback
- Clean and modern UI with Chakra UI

## Tech Stack 💻

### Backend
- **Node.js & Express.js** - Runtime environment and web framework
- **MongoDB & Mongoose** - Database and ODM
- **Dotenv** - Environment variables management
- **REST API** - API architecture

### Frontend
- **React** - UI library
- **Vite** - Next generation frontend build tool
- **Chakra UI** - Modern component library
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **React Icons** - Icon library

## Project Structure 📁

```
mern-product-store/
├── backend/                      # Backend Express.js application
│   ├── config/                   # Application configurations
│   │   └── db.js                # MongoDB configuration
│   ├── controllers/             # Business logic
│   │   └── product.controller.js # Product controllers
│   ├── models/                  # Database models
│   │   └── product.model.js     # Product schema and model
│   ├── routes/                  # API route definitions
│   │   └── product.route.js     # Product routes
│   └── server.js               # Express server entry point
│
├── frontend/                    # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Navbar.jsx     # Navigation component
│   │   │   └── ProductCard.jsx # Product card component
│   │   ├── pages/             # Application pages
│   │   │   ├── HomePage.jsx   # Main page
│   │   │   └── CreatePage.jsx # Product creation page
│   │   ├── store/             # State management
│   │   │   └── product.js     # Zustand store for products
│   │   ├── App.jsx           # Main React component
│   │   └── main.jsx          # React entry point
│   ├── index.html            # Main HTML file
│   └── vite.config.js        # Vite configuration
│
└── package.json              # Project dependencies and scripts
```

## Getting Started 🚀

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB instance (local or Atlas)
- npm or yarn package manager

### Installation Steps

1. Clone the repository
```bash
git clone <repository-url>
cd mern-product-store
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install
```

3. Environment Setup
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

4. Running the Application
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## API Documentation 🛣️

### Products Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products | Fetch all products |
| POST   | /api/products | Create new product |
| PUT    | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

### Request & Response Examples

#### Create Product
```json
POST /api/products
{
    "name": "Product Name",
    "price": 99.99,
    "image": "image_url"
}
```

## Development 👨‍💻

### Code Style
- ESLint configuration for code consistency
- Prettier for code formatting
- React best practices and hooks
- Modular component architecture

### State Management
Using Zustand for global state management with actions for:
- Fetching products
- Creating products
- Updating products
- Deleting products

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details

## Acknowledgments 🙏

- [Chakra UI](https://chakra-ui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)


