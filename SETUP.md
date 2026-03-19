# NextEra Fashion - Setup Guide

## ✅ ALL FILES CREATED - READY TO USE!

Your complete HTML/CSS/JavaScript e-commerce website is ready to use.

## 📂 Complete File List

### HTML Pages (13 total)
- ✅ index.html - Homepage
- ✅ shop.html - All products
- ✅ shop-men.html - Men's collection
- ✅ shop-women.html - Women's collection
- ✅ product.html - Product detail page
- ✅ checkout.html - Checkout page
- ✅ profile.html - Customer profile
- ✅ about.html - About us
- ✅ faq.html - FAQ
- ✅ contact.html - Contact form
- ✅ privacy-policy.html - Privacy policy
- ✅ terms.html - Terms & conditions
- ✅ return-policy.html - Return policy

### CSS Files (2 total)
- ✅ css/styles.css - Main styles
- ✅ css/components.css - Component styles

### JavaScript Files (4 total)
- ✅ js/products.js - Product data (57 products)
- ✅ js/cart.js - Cart & wishlist management
- ✅ js/components.js - Reusable components
- ✅ js/main.js - Application initialization

## 🚀 How to Run

### Option 1: Direct Open (Quick Test)
1. Navigate to the `html-version` folder
2. Double-click `index.html`
3. The website will open in your default browser

**Note:** Some features may not work perfectly with file:// protocol. Use Option 2 for full functionality.

### Option 2: Local Server (Recommended)

#### Using Python (Built-in):
```bash
cd html-version
python -m http.server 8000
```
Then open: http://localhost:8000

#### Using Node.js:
```bash
cd html-version
npx serve .
```
Then open: http://localhost:3000

#### Using PHP (Built-in):
```bash
cd html-version
php -S localhost:8000
```
Then open: http://localhost:8000

#### Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## ✨ Features Working Out-of-the-Box

✅ Shopping Cart with localStorage
✅ Wishlist functionality
✅ Product search
✅ Product filtering & sorting
✅ Add to cart with size selection
✅ Responsive design (mobile/tablet/desktop)
✅ Toast notifications
✅ All 13 pages with navigation
✅ Header & Footer on all pages
✅ 57 products with images

## 🧪 Quick Test Checklist

1. **Homepage**
   - [ ] Hero section loads
   - [ ] Featured products display
   - [ ] Category cards show images
   - [ ] Navigation works

2. **Shop Pages**
   - [ ] Products load in grid
   - [ ] Filters work (All/Men/Women)
   - [ ] Sort options work
   - [ ] Product cards show images

3. **Product Page**
   - [ ] Click any product
   - [ ] Image displays
   - [ ] Size selector works
   - [ ] Add to cart works

4. **Cart & Wishlist**
   - [ ] Click cart icon
   - [ ] Drawer slides in
   - [ ] Items display
   - [ ] Quantity controls work
   - [ ] Remove button works

5. **Search**
   - [ ] Click search icon
   - [ ] Modal opens
   - [ ] Type product name
   - [ ] Results appear

## 🔧 Troubleshooting

### Website doesn't display?
- **Check file paths**: Make sure you're in the `html-version` folder
- **Check browser console**: Press F12 and look for errors
- **Use a local server**: Don't use file:// protocol

### Images not loading?
- **Internet required**: Images are hosted on Unsplash
- **Check connection**: Verify you have internet access

### Cart/Wishlist not saving?
- **localStorage required**: Check browser settings
- **Check browser**: Use modern browser (Chrome, Firefox, Safari, Edge)

### JavaScript not working?
- **Check console**: Press F12 → Console tab
- **Verify files**: Make sure all JS files are in `js/` folder
- **Check paths**: Verify script src paths are correct

## 📱 Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

## 🎯 What Works

### Cart System
- Add items with size selection
- Update quantities
- Remove items
- Persistent storage (localStorage)
- Real-time total calculation

### Wishlist
- Add/remove favorites
- Heart icon toggles
- Persistent storage
- View in profile page

### Product Features
- 57 products total
- Categories: Men (28), Women (29)
- Product images from Unsplash
- Star ratings
- Price display
- Related products

### Navigation
- Responsive header
- Mobile menu
- Breadcrumbs
- Footer links
- All pages linked

## 💡 Tips

1. **Clear Data**: To reset cart/wishlist, open browser console and type:
   ```javascript
   localStorage.clear();
   location.reload();
   ```

2. **Test Offline**: Products work offline, but images won't load

3. **Mobile Testing**: Use browser DevTools (F12) → Toggle Device Toolbar

4. **Performance**: Images use lazy loading for faster page loads

## 📞 Common Tasks

### Add New Product
Edit `js/products.js`:
```javascript
products.push({
  id: 58,
  name: "New Product",
  price: 99.99,
  rating: 4.5,
  category: "men",
  image: "https://your-image-url.jpg"
});
```

### Change Colors
Edit `css/styles.css`:
```css
:root {
  --color-primary: #000000;
  --color-accent: #f3e8d2;
}
```

### Modify Header
Edit `js/components.js` → `renderHeader()` function

## 🎉 You're All Set!

Your complete e-commerce website is ready to use. All features are working and all pages are connected.

**Start with:** `index.html`

Enjoy your new website! 🚀
