// Cart and Wishlist Management

class CartManager {
    constructor() {
        this.cart = this.loadFromStorage('cart') || [];
        this.wishlist = this.loadFromStorage('wishlist') || [];
        this.init();
    }

    init() {
        this.updateCartCount();
        this.updateWishlistCount();
    }

    // LocalStorage helpers
    loadFromStorage(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Cart methods
    addToCart(product, quantity = 1, size = null) {
        const cartItemId = `${product.id}-${size || 'no-size'}-${Date.now()}`;
        const existingItem = this.cart.find(item => 
            item.id === product.id && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity,
                size,
                cartItemId
            });
        }

        this.saveToStorage('cart', this.cart);
        this.updateCartCount();
        this.showToast('Added to cart!', 'success');
        this.renderCart();
    }

    removeFromCart(cartItemId) {
        this.cart = this.cart.filter(item => item.cartItemId !== cartItemId);
        this.saveToStorage('cart', this.cart);
        this.updateCartCount();
        this.renderCart();
        this.showToast('Removed from cart', 'success');
    }

    updateQuantity(cartItemId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(cartItemId);
            return;
        }

        const item = this.cart.find(item => item.cartItemId === cartItemId);
        if (item) {
            item.quantity = quantity;
            this.saveToStorage('cart', this.cart);
            this.renderCart();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveToStorage('cart', this.cart);
        this.updateCartCount();
        this.renderCart();
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    // Wishlist methods
    toggleWishlist(product) {
        const exists = this.wishlist.find(item => item.id === product.id);
        
        if (exists) {
            this.wishlist = this.wishlist.filter(item => item.id !== product.id);
            this.showToast('Removed from wishlist', 'success');
        } else {
            this.wishlist.push(product);
            this.showToast('Added to wishlist!', 'success');
        }

        this.saveToStorage('wishlist', this.wishlist);
        this.updateWishlistCount();
        this.renderWishlist();
        return !exists;
    }

    isInWishlist(productId) {
        return this.wishlist.some(item => item.id === productId);
    }

    // UI Update methods
    updateCartCount() {
        const count = this.getCartCount();
        const badges = document.querySelectorAll('.cart-badge');
        badges.forEach(badge => {
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        });

        const totalElement = document.getElementById('cart-total-amount');
        if (totalElement) {
            totalElement.textContent = '$' + this.getCartTotal().toFixed(2);
        }
    }

    updateWishlistCount() {
        const count = this.wishlist.length;
        const badges = document.querySelectorAll('.wishlist-badge');
        badges.forEach(badge => {
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        });
    }

    // Render methods
    renderCart() {
        const container = document.getElementById('cart-items');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p>Your cart is empty</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    ${item.size ? `<div class="item-size">Size: ${item.size}</div>` : ''}
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="item-quantity">
                        <button class="qty-btn" onclick="cartManager.updateQuantity('${item.cartItemId}', ${item.quantity - 1})">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="cartManager.updateQuantity('${item.cartItemId}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="cartManager.removeFromCart('${item.cartItemId}')" title="Remove">×</button>
            </div>
        `).join('');

        this.updateCartCount();
    }

    renderWishlist() {
        const container = document.getElementById('wishlist-items');
        if (!container) return;

        if (this.wishlist.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p>Your wishlist is empty</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.wishlist.map(item => `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <button class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;" 
                            onclick="cartManager.addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}, 1, null)">
                        Add to Cart
                    </button>
                </div>
                <button class="remove-btn" onclick="cartManager.toggleWishlist(${JSON.stringify(item).replace(/"/g, '&quot;')})" title="Remove">×</button>
            </div>
        `).join('');

        this.updateWishlistCount();
    }

    // Toast notifications
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => {
                container.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Initialize cart manager
const cartManager = new CartManager();
