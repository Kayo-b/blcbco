# Quick Customization Guide

## 🏪 Branding

### Change Bakery Name
**File:** `src/components/Navigation.jsx`
```jsx
// Line 14 - Change this:
<Link to="/" className="text-2xl font-bold text-gray-800">
  BalacoBaco{/* <-- Change this */}
</Link>
```

**File:** `src/components/Footer.jsx`
```jsx
// Line 38 - Change this:
<p>&copy; {new Date().getFullYear()} Bakery Name. All rights reserved.</p>
```

**File:** `index.html`
```html
<!-- Change the title -->
<title>Bakery - Fresh Baked Goods</title>
```

### Update Contact Information
**File:** `src/components/Footer.jsx`
```jsx
// Lines 18-22 - Update with your info:
<li>Phone: (555) 123-4567</li>
<li>Email: info@bakery.com</li>
<li>Address: 123 Main St, City, ST 12345</li>
```

### Business Hours
**File:** `src/components/Footer.jsx`
```jsx
// Lines 11-15 - Update your hours:
<li>Monday - Friday: 7am - 7pm</li>
<li>Saturday: 8am - 6pm</li>
<li>Sunday: 9am - 5pm</li>
```

## 🍞 Products

### Add/Edit Products
**File:** `src/data/products.js`

Add a new product:
```javascript
{
  id: 15, // Increment ID
  name: 'Your Product Name',
  category: 'breads', // or 'pastries' or 'catering'
  price: 9.99,
  description: 'Short description for card',
  fullDescription: 'Longer description for detail page',
  image: 'https://your-image-url.com/image.jpg',
}
```

### Change Product Categories
Update the categories array in `src/pages/Products.jsx`:
```javascript
const categories = ['all', 'breads', 'pastries', 'catering'];
```

## 🎨 Styling

### Colors
To change the primary color from blue, search and replace in all files:
- `bg-blue-600` → `bg-[yourcolor]-600`
- `hover:bg-blue-700` → `hover:bg-[yourcolor]-700`
- `text-blue-600` → `text-[yourcolor]-600`

Common Tailwind colors: red, orange, yellow, green, teal, cyan, blue, indigo, purple, pink

### Fonts
**File:** `tailwind.config.js`
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    },
  },
}
```

Then add Google Fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 📱 Layout Adjustments

### Change Max Width
Replace `max-w-7xl` with:
- `max-w-4xl` - Narrower
- `max-w-full` - Full width
- `max-w-screen-2xl` - Wider

### Grid Columns (Product Grid)
**File:** `src/pages/Products.jsx`
```jsx
// Current: 1 col mobile, 2 tablet, 3 desktop, 4 xl
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// Change to 3 max:
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

## 🖼️ Images

### Replace Placeholder Images
1. Add your images to `public/images/`
2. Update `src/data/products.js`:
```javascript
image: '/images/your-product.jpg'
```

### Hero Image
**File:** `src/pages/Home.jsx`
```jsx
// Line 7 - Replace bg-gray-200 with image:
<section className="relative bg-cover bg-center h-96" 
         style={{backgroundImage: 'url(/images/hero.jpg)'}}>
  {/* Add overlay for text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative text-center px-4">
    {/* Content here */}
  </div>
</section>
```

## 💰 Pricing Display

### Change Currency Symbol
Search all files for `$` and replace with your currency symbol (€, £, etc.)

### Number Format
For comma separators: `${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`

## 🔗 Social Media Links

**File:** `src/components/Footer.jsx`
```jsx
// Lines 26-34 - Update href values:
<a href="https://facebook.com/yourbakery" className="text-gray-300 hover:text-white">
  Facebook
</a>
```

## 📧 Contact Form (Future Enhancement)

To add a contact form to the About page:
1. Create `src/pages/Contact.jsx`
2. Add route in `App.jsx`
3. Add link in `Navigation.jsx`

## 🛒 Cart Icon Customization

**File:** `src/components/Navigation.jsx`
- Change badge color: `bg-red-500` → `bg-[yourcolor]-500`
- Change badge position: Adjust `-top-2 -right-2` values

## 🎯 Call-to-Action Buttons

To make buttons stand out more:
```jsx
// Add shadow and larger size:
className="bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-bold 
           shadow-lg hover:shadow-xl hover:bg-blue-700 transform hover:scale-105 
           transition-all"
```

## 📝 Text Content

### Homepage
**File:** `src/pages/Home.jsx`
- Hero title: Line 10
- Tagline: Line 13
- Intro text: Lines 30-36

### About Page
**File:** `src/pages/About.jsx`
- Company story: Lines 18-28
- Values list: Lines 33-49

---

**Tip:** Use VS Code's search and replace (Ctrl/Cmd + Shift + F) to find all instances of text you want to change!
