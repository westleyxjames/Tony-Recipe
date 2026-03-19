// Reusable Components

// Header Component
function renderHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    header.innerHTML = `
        <div class="header-banner">
            <p>FREE SHIPPING ON ALL ORDERS OVER $75 | USE CODE: FREESHIP</p>
        </div>
        <div class="header-main container">
            <a href="index.html" class="logo">NEXTERA FASHION</a>
            
            <nav class="nav-desktop">
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="shop-men.html">Men</a>
                <a href="shop-women.html">Women</a>
                <a href="about.html">About Us</a>
                <a href="faq.html">FAQ</a>
                <a href="contact.html">Contact</a>
            </nav>
            
            <div class="header-icons">
                <button class="icon-btn" onclick="openSearch()" aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
                <a href="profile.html" class="icon-btn" aria-label="Profile">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </a>
                <button class="icon-btn" onclick="openWishlist()" aria-label="Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="badge wishlist-badge" style="display: none;">0</span>
                </button>
                <button class="icon-btn" onclick="openCart()" aria-label="Cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span class="badge cart-badge" style="display: none;">0</span>
                </button>
                <button class="icon-btn menu-toggle" onclick="toggleMobileMenu()" aria-label="Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
        
        <div class="mobile-menu container" id="mobile-menu">
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="shop-men.html">Men</a>
            <a href="shop-women.html">Women</a>
            <a href="about.html">About Us</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
            <a href="profile.html">My Profile</a>
        </div>
    `;
}

// Footer Component
function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>About NextEra Fashion</h3>
                    <p>Modern, stylish, and comfortable clothing for people who value quality and individuality.</p>
                    <div style="margin-top: 1rem;">
                        <p><strong>📞 Phone:</strong> +1-888-397-1980</p>
                        <p><strong>📍 Address:</strong><br>
                        1040 Tori Lane<br>
                        Salt Lake City, Utah 84106<br>
                        United States</p>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="faq.html">Help Center</a></li>
                        <li><a href="return-policy.html">Return Policy</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Shipping Information</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="shop.html">Shop All</a></li>
                        <li><a href="shop-men.html">Men's Collection</a></li>
                        <li><a href="shop-women.html">Women's Collection</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Stay Connected</h3>
                    <p>Subscribe for exclusive offers and updates</p>
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                        <input type="email" placeholder="Your email" style="flex: 1; padding: 0.5rem; border-radius: 0.25rem; border: none;">
                        <button class="btn btn-primary" style="padding: 0.5rem 1.5rem;">Join</button>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2026 NextEra Fashion. All rights reserved.</p>
                <div class="footer-links">
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms.html">Terms & Conditions</a>
                    <a href="return-policy.html">Return Policy</a>
                </div>
            </div>
        </div>
    `;
}

// Product Card Component
function createProductCard(product) {
    const isWishlisted = cartManager.isInWishlist(product.id);
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn ${isWishlisted ? 'active' : ''}" 
                            onclick="toggleProductWishlist(${product.id})" 
                            data-wishlist-btn="${product.id}"
                            aria-label="Add to wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-rating">${stars}</div>
                <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `;
}

// Render product grid
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No products found</p></div>';
        return;
    }

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Drawer controls
function openCart() {
    cartManager.renderCart();
    document.getElementById('cart-drawer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-drawer').classList.remove('active');
    document.body.style.overflow = '';
}

function openWishlist() {
    cartManager.renderWishlist();
    document.getElementById('wishlist-drawer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWishlist() {
    document.getElementById('wishlist-drawer').classList.remove('active');
    document.body.style.overflow = '';
}

function openSearch() {
    document.getElementById('search-modal').classList.add('active');
    document.getElementById('search-input').focus();
    document.body.style.overflow = 'hidden';
}

function closeSearch() {
    document.getElementById('search-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle wishlist for product
function toggleProductWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const isNowInWishlist = cartManager.toggleWishlist(product);
    
    // Update all wishlist buttons for this product
    const buttons = document.querySelectorAll(`[data-wishlist-btn="${productId}"]`);
    buttons.forEach(btn => {
        const svg = btn.querySelector('svg path');
        if (isNowInWishlist) {
            btn.classList.add('active');
            if (svg) svg.setAttribute('fill', 'currentColor');
        } else {
            btn.classList.remove('active');
            if (svg) svg.setAttribute('fill', 'none');
        }
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            const results = searchProducts(query);
            if (results.length === 0) {
                searchResults.innerHTML = '<p style="text-align: center; color: #6b7280;">No products found</p>';
                return;
            }

            searchResults.innerHTML = results.slice(0, 5).map(product => `
                <a href="product.html?id=${product.id}" class="search-result-item">
                    <img src="${product.image}" alt="${product.name}" class="search-result-image">
                    <div class="search-result-details">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-price">$${product.price.toFixed(2)}</div>
                    </div>
                </a>
            `).join('');
        }, 300);
    });
}

// Event listeners for drawer/modal overlays
document.addEventListener('DOMContentLoaded', () => {
    // Close drawers/modals when clicking overlay
    document.querySelectorAll('.drawer-overlay, .modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeCart();
                closeWishlist();
                closeSearch();
            }
        });
    });

    // Close buttons
    document.querySelectorAll('.drawer-close, .modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeCart();
            closeWishlist();
            closeSearch();
        });
    });

    // Initialize search
    initSearch();

    // Render header and footer
    renderHeader();
    renderFooter();
});