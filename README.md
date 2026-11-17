# SidByte

SidByte is a responsive electronics shopping website built with React. You can browse products by category, filter and search the full catalogue, view product details, add items to a cart and sign in.

**Live demo:** https://sid-byte.vercel.app

<img width="1916" height="1060" alt="image" src="https://github.com/user-attachments/assets/a7ea34fe-ade6-4142-8608-e876a89753f6" />


## Features

- **Home page** with a product carousel and category buttons (Smartphones, Laptops, Tablets, Mobile Accessories)
- **Products page** with filters for category, brand, price range and search, a reset button, a "no products found" message, a loading state and pagination (8 products per page)
- **Category pages** that show only the products of the chosen category
- **Product details page** with an image slider, price and discount details
- **Shopping cart** where you can add items, change quantities, remove items and see the total cost
- **Authentication** (sign in and sign out) with Clerk
- **Location detection** in the navbar, using the browser's geolocation and OpenStreetMap Nominatim
- **Responsive layout** for phones, tablets and desktops
- About and Contact pages

## Tech Stack

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for routing
- React Context API for the cart and product data
- [Clerk](https://clerk.com/) for authentication
- [Axios](https://axios-http.com/) for API requests
- [react-slick](https://react-slick.neostack.com/) for the sliders
- [lucide-react](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/) for icons
- [DummyJSON](https://dummyjson.com/) for product data
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A free [Clerk](https://clerk.com/) account for the publishable key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/sidbyte.git
cd sidbyte

# 2. Install dependencies
npm install

# 3. Create a .env file in the project root and add your Clerk key
echo "VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key" > .env

# 4. Start the development server
npm run dev
```

Then open the local address that Vite prints (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/   # Navbar, Footer, Carousel, Category, ProductCard, FilterSection
├── context/      # CartContext and DataContext
├── pages/        # Home, Product, CategoryProduct, SingleProduct, Cart, About, Contact
├── App.jsx       # Routes and location detection
└── main.jsx      # App entry point with providers
```

## Notes

- The app currently uses Clerk's **development keys**, so the browser console shows a development-mode warning. Production keys need a custom domain.
- Product data comes from the free DummyJSON API, so the products and prices are sample data.
- The cart is kept in memory only, so it resets when the page is reloaded.

## What I Learned

Building SidByte taught me React state and props, the Context API, routing with URL parameters, filtering and pagination logic, responsive design with Tailwind, authentication, and how to deploy a project.

## Author

Made by **Siddhi Naikare** 
