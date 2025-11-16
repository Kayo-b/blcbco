# Bakery E-commerce Website# React + Vite



A modern, responsive bakery e-commerce website built with React, Vite, Tailwind CSS, and React Router.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## FeaturesCurrently, two official plugins are available:



- **Homepage** with hero section and introduction- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **About Page** with company story and values- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Products Page** with category filtering (Breads, Pastries, Catering)

- **Product Detail** pages with quantity selection## React Compiler

- **Shopping Cart** with quantity adjustments

- **Checkout** with delivery/pickup optionsThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Order Confirmation** page

- **Responsive Design** - mobile-first approach with breakpoints for tablet and desktop## Expanding the ESLint configuration

- **Cart State Management** using React Context API

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Context API** - State management for shopping cart

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Header with navigation and cart icon
│   ├── Footer.jsx       # Footer with contact info
│   └── ProductCard.jsx  # Product display card
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   ├── About.jsx        # About page
│   ├── Products.jsx     # Product listing
│   ├── ProductDetail.jsx # Individual product view
│   ├── Cart.jsx         # Shopping cart
│   ├── Checkout.jsx     # Checkout form
│   └── Confirmation.jsx # Order confirmation
├── context/             # React Context
│   └── CartContext.jsx  # Cart state management
├── data/                # Static data
│   └── products.js      # Sample product data
├── App.jsx              # Main app component with routing
└── main.jsx             # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

The project has already been initialized with dependencies installed.

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Routes

- `/` - Homepage
- `/about` - About page
- `/products` - Product listing with filters
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout form
- `/confirmation` - Order confirmation

## Customization

### Update Bakery Name

1. Change "Bakery Name" in `src/components/Navigation.jsx`
2. Update the title in `index.html`
3. Update contact info in `src/components/Footer.jsx`

### Add/Edit Products

Edit the `src/data/products.js` file to add, remove, or modify products.

### Styling

All components use Tailwind CSS utility classes. You can:
- Modify existing classes in component files
- Add custom styles in `src/index.css`
- Extend Tailwind config in `tailwind.config.js`

### Mobile Responsiveness

The design follows a mobile-first approach:
- All touch targets are minimum 44px height
- Text is minimum 16px for readability
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Hamburger menu for mobile navigation

## Next Steps

To complete the application, consider:

1. **Backend Integration**
   - Connect to a database (Firebase, MongoDB, etc.)
   - Implement real product data fetching
   - Add user authentication

2. **Payment Processing**
   - Integrate Stripe or another payment gateway
   - Handle payment processing in checkout

3. **Enhanced Features**
   - Product search functionality
   - User reviews and ratings
   - Wishlist/favorites
   - Order history
   - Email notifications

4. **Image Optimization**
   - Replace placeholder images with real product photos
   - Implement lazy loading
   - Use proper image optimization

## License

This is a starter template for educational purposes.
