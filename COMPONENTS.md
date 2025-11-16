# 📚 Components Reference

Quick reference for all components in the project.

## 🧭 Navigation Component

**Location:** `src/components/Navigation.jsx`

**Props:**
- `cartItemCount` (number) - Number of items in cart for badge

**Features:**
- Logo/bakery name (links to home)
- Desktop menu (Home, About, Products)
- Mobile hamburger menu
- Cart icon with item count badge
- Responsive breakpoint at `md:` (768px)

**Usage:**
```jsx
<Navigation cartItemCount={5} />
```

---

## 🦶 Footer Component

**Location:** `src/components/Footer.jsx`

**Props:** None

**Features:**
- Business hours section
- Contact information
- Social media links
- Copyright notice
- 3-column grid on desktop, stacks on mobile

**Usage:**
```jsx
<Footer />
```

---

## 🛍️ ProductCard Component

**Location:** `src/components/ProductCard.jsx`

**Props:**
- `product` (object) - Product data
  - `id` - Product ID
  - `name` - Product name
  - `description` - Short description
  - `price` - Product price
  - `image` - Image URL
- `onAddToCart` (function) - Handler for add to cart action

**Features:**
- Product image (links to detail page)
- Product name (links to detail page)
- Short description (truncated to 2 lines)
- Price display
- Add to cart button

**Usage:**
```jsx
<ProductCard 
  product={productData} 
  onAddToCart={(product) => addToCart(product)} 
/>
```

---

## 🏠 Home Page

**Location:** `src/pages/Home.jsx`

**Features:**
- Hero section with large heading and tagline
- CTA button to products page
- Brief introduction section (2-3 paragraphs)

**Sections:**
1. Hero (bg-gray-200 - replace with image)
2. Introduction text

---

## ℹ️ About Page

**Location:** `src/pages/About.jsx`

**Features:**
- Header with logo placeholder
- Company story section
- Values list
- Bakery photo placeholder

**Sections:**
1. Header with circular logo placeholder
2. "Our Story" section
3. "Our Values" with bullet points
4. "Visit Us" with photo placeholder

---

## 📦 Products Page

**Location:** `src/pages/Products.jsx`

**Features:**
- Page title
- Category filter tabs
- Product grid (responsive)
- Empty state message

**Categories:**
- All
- Breads
- Pastries
- Catering

**Grid Breakpoints:**
- Mobile: 1 column
- Small: 2 columns (640px)
- Large: 3 columns (1024px)
- XL: 4 columns (1280px)

**Uses:**
- `useCart()` hook for addToCart
- `ProductCard` component
- Products data from `src/data/products.js`

---

## 🔍 ProductDetail Page

**Location:** `src/pages/ProductDetail.jsx`

**Features:**
- Large product image
- Product name and full description
- Price display
- Quantity selector (+/- buttons)
- Add to cart button
- Back button
- Not found state

**URL Parameter:**
- `:id` - Product ID

**Uses:**
- `useParams()` for product ID
- `useNavigate()` for navigation
- `useCart()` for addToCart

---

## 🛒 Cart Page

**Location:** `src/pages/Cart.jsx`

**Features:**
- Cart items list with thumbnails
- Quantity adjusters for each item
- Remove item button
- Subtotal calculation
- Continue shopping button
- Checkout button
- Empty cart state

**Cart Item Display:**
- Thumbnail image
- Product name
- Price per item
- Quantity controls (+/-)
- Item total
- Remove button

**Uses:**
- `useCart()` hook for all cart operations

---

## 💳 Checkout Page

**Location:** `src/pages/Checkout.jsx`

**Features:**
- Two-column layout (form + summary)
- Customer information form
- Delivery/pickup selector
- Conditional address field
- Order summary sidebar
- Pay button

**Form Fields:**
- Name (required)
- Email (required)
- Phone (required)
- Delivery type (required)
- Address (conditional, required if delivery)
- Special instructions (optional)

**Uses:**
- `useCart()` for cart items and total
- `useNavigate()` to redirect to confirmation

---

## ✅ Confirmation Page

**Location:** `src/pages/Confirmation.jsx`

**Features:**
- Success icon and message
- Order number display
- Order summary
- Customer details recap
- Estimated time
- Contact information
- Return to home button
- Not found state

**Data Source:**
- Receives data via `location.state` from checkout

---

## 🗂️ CartContext

**Location:** `src/context/CartContext.jsx`

**Provides:**
- `cart` - Array of cart items
- `addToCart(product, quantity)` - Add product to cart
- `updateQuantity(productId, newQuantity)` - Update item quantity
- `removeFromCart(productId)` - Remove item from cart
- `clearCart()` - Empty the cart
- `getTotal()` - Calculate cart total
- `getItemCount()` - Get total number of items

**Cart Item Structure:**
```javascript
{
  id: 1,
  name: "Product Name",
  price: 9.99,
  quantity: 2,
  image: "url",
  description: "...",
  // ... other product fields
}
```

**Usage:**
```jsx
import { useCart } from '../context/CartContext';

function MyComponent() {
  const { cart, addToCart, getTotal } = useCart();
  // Use cart functions
}
```

---

## 📊 Products Data

**Location:** `src/data/products.js`

**Structure:**
```javascript
{
  id: 1,
  name: "Product Name",
  category: "breads", // or "pastries" or "catering"
  price: 9.99,
  description: "Short description",
  fullDescription: "Detailed description",
  image: "https://image-url.com/image.jpg"
}
```

**Categories:**
- `breads` - Bread products
- `pastries` - Pastries and sweets
- `catering` - Catering items and platters

**Sample Data:**
- 14 products total
- 4 breads
- 6 pastries
- 4 catering items

---

## 🎨 Styling Convention

All components use Tailwind CSS utility classes.

**Common Patterns:**

### Buttons
```jsx
className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
```

### Containers
```jsx
className="max-w-7xl mx-auto px-4 py-12"
```

### Cards
```jsx
className="bg-white rounded-lg shadow-md p-4"
```

### Responsive Grid
```jsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Input Fields
```jsx
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[44px]"
```

---

## 🔄 Data Flow

```
User Action
    ↓
Component (calls useCart hook)
    ↓
CartContext (updates state)
    ↓
All components re-render with new cart data
    ↓
Navigation badge updates
Cart page updates
Checkout updates
```

---

## 📱 Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Usage Example:**
```jsx
className="text-sm md:text-base lg:text-lg"
// Small text on mobile, medium on tablet, large on desktop
```

---

**Need help?** Check the individual component files for inline comments and implementation details!
