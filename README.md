# NextEra Fashion - HTML/CSS/JavaScript Version

This is a complete conversion of the NextEra Fashion e-commerce website from React to pure HTML, CSS, and vanilla JavaScript.

## ✅ Complete Features

### Core Functionality
- **Product Catalog**: 57 products (29 women's, 28 men's) with images, ratings, and prices
- **Shopping Cart**: Add/remove items, update quantities, persistent localStorage
- **Wishlist**: Save favorite products, persistent across sessions
- **Search**: Real-time product search with instant results
- **Filtering & Sorting**: Category filters and multiple sort options
- **Responsive Design**: Mobile-first, works on all devices
- **Toast Notifications**: User feedback for all actions
- **LocalStorage**: Cart and wishlist persist across browser sessions

### Pages Included
1. **index.html** - Homepage with hero, categories, featured products
2. **shop.html** - All products with filtering and sorting
3. **shop-men.html** - Men's collection
4. **shop-women.html** - Women's collection
5. **product.html** - Individual product detail page
6. **checkout.html** - Checkout form
7. **profile.html** - Customer profile with orders and wishlist
8. **about.html** - About Us page
9. **faq.html** - Frequently Asked Questions
10. **contact.html** - Contact form
11. **privacy-policy.html** - Privacy policy
12. **terms.html** - Terms & conditions
13. **return-policy.html** - Return policy

## 📁 File Structure

```
html-version/
├── index.html              # Homepage
├── shop.html               # All products page
├── shop-men.html           # Men's collection
├── shop-women.html         # Women's collection
├── product.html            # Product detail page
├── checkout.html           # Checkout page
├── profile.html            # Customer profile
├── about.html              # About page
├── faq.html                # FAQ page
├── contact.html            # Contact page
├── privacy-policy.html     # Privacy policy
├── terms.html              # Terms & conditions
├── return-policy.html      # Return policy
├── css/
│   ├── styles.css          # Main styles (layout, components)
│   └── components.css      # Reusable component styles
└── js/
    ├── products.js         # Product data and filtering
    ├── cart.js             # Cart and wishlist management
    ├── components.js       # Reusable UI components
    └── main.js             # Main application logic
```

## 🚀 How to Use

### Quick Start
1. Open `index.html` in any modern web browser
2. No build process or server required!
3. All pages are linked and fully functional

### Local Development
For the best experience, use a local server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js**
```bash
npx serve .
```

**Option 3: VS Code**
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

Then open: `http://localhost:8000`

## 💾 Data Persistence

All data is stored in browser localStorage:
- **Cart**: `localStorage.getItem('cart')`
- **Wishlist**: `localStorage.getItem('wishlist')`

To reset:
```javascript
localStorage.clear();
```

## 🎨 Styling

### CSS Architecture
- **styles.css**: Base styles, layout, responsive design
- **components.css**: Modular components (drawers, modals, filters)

### CSS Variables
```css
--color-bg: #ffffff;
--color-text: #1a1a1a;
--color-dark: #1a1a1a;
--color-primary: #000000;
--color-accent: #f3e8d2;
--color-danger: #ef4444;
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚙️ JavaScript Modules

### products.js
- Product database (57 items)
- Filter by category
- Search functionality
- Get product by ID

### cart.js (CartManager class)
- Add/remove cart items
- Update quantities
- Wishlist management
- localStorage integration
- Toast notifications

### components.js
- Header/Footer rendering
- Product card generation
- Drawer controls (cart, wishlist)
- Modal controls (search)
- Mobile menu toggle

### main.js
- Page initialization
- Event handlers
- Smooth scroll
- Newsletter form

## 🛠️ Key Functions

### Add to Cart
```javascript
cartManager.addToCart(product, quantity, size);
```

### Toggle Wishlist
```javascript
cartManager.toggleWishlist(product);
```

### Search Products
```javascript
const results = searchProducts('query');
```

### Filter by Category
```javascript
const menProducts = getProductsByCategory('men');
```

## 📱 Features by Page

### Homepage (index.html)
- Hero section with CTA
- Category cards (Men/Women)
- Featured products grid (8 products)
- Lifestyle showcase
- Newsletter signup

### Shop Pages
- **shop.html**: All products with filters
- **shop-men.html**: Men's collection only
- **shop-women.html**: Women's collection only
- Sorting: Featured, Price, Name
- Category filtering
- Responsive product grid

### Product Page (product.html)
- Large product image
- Price and rating
- Size selector
- Quantity selector
- Add to cart/wishlist
- Product description
- Related products

### Checkout (checkout.html)
- Order summary
- Shipping information form
- Payment information form
- Order total calculation

### Profile (profile.html)
- User information
- Order history
- Wishlist display
- Editable profile

## 🎯 Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

### Required Features
- ES6 JavaScript
- CSS Grid & Flexbox
- LocalStorage API
- SVG support

## 🔧 Customization

### Add New Products
Edit `js/products.js`:
```javascript
products.push({
  id: 58,
  name: "Product Name",
  price: 99.99,
  rating: 4.5,
  category: "men",
  image: "https://..."
});
```

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --color-primary: #your-color;
}
```

### Add New Pages
1. Copy an existing HTML file
2. Update title and content
3. Header/footer load automatically
4. Link from navigation

## 📦 No Dependencies

This project uses **zero external libraries**:
- ✅ No jQuery
- ✅ No React
- ✅ No Bootstrap
- ✅ No Tailwind
- ✅ Pure vanilla JavaScript
- ✅ Custom CSS Grid/Flexbox

## 🚨 Common Issues

### Images Not Loading
- Check internet connection
- Unsplash URLs require online access
- Replace with local images if needed

### Cart/Wishlist Not Saving
- Check browser localStorage is enabled
- Try different browser
- Clear localStorage and retry

### Styles Not Applied
- Ensure CSS files are in correct directory
- Check browser console for errors
- Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

## 📈 Performance

- **Page Load**: < 2s (with caching)
- **Image Optimization**: Lazy loading enabled
- **JavaScript**: Minify for production
- **CSS**: Single request, minimal size

## 🔒 Security Notes

- Form validation on checkout
- XSS prevention in dynamic content
- No sensitive data in localStorage
- Use HTTPS in production

## 🎓 Learning Resources

This project demonstrates:
- DOM manipulation
- Event handling
- LocalStorage API
- CSS Grid & Flexbox
- Responsive design
- Component architecture
- State management
- Form validation

## 📝 License

This is a demonstration project for NextEra Fashion.

## 🤝 Support

For issues or questions:
1. Check console for errors
2. Verify file paths
3. Test in different browser
4. Clear cache and localStorage

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
