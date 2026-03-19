<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NextEra Fashion - Modern Fashion for Everyone</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <!-- Header -->
    <header id="header"></header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Define Your Style</h1>
                <p class="hero-subtitle">Discover the latest fashion trends</p>
                <a href="shop.html" class="btn btn-primary">Shop Now</a>
            </div>
        </section>

        <!-- Featured Categories -->
        <section class="featured-categories">
            <div class="container">
                <h2 class="section-title">Shop by Category</h2>
                <div class="categories-grid">
                    <div class="category-card">
                        <img src="https://images.unsplash.com/photo-1617952125960-38d76f3659d6?w=600&h=800&fit=crop" alt="Men's Collection">
                        <div class="category-overlay">
                            <h3>Men's Collection</h3>
                            <a href="shop-men.html" class="btn btn-secondary">Shop Men</a>
                        </div>
                    </div>
                    <div class="category-card">
                        <img src="https://images.unsplash.com/photo-1760551938129-01da7f950fe1?w=600&h=800&fit=crop" alt="Women's Collection">
                        <div class="category-overlay">
                            <h3>Women's Collection</h3>
                            <a href="shop-women.html" class="btn btn-secondary">Shop Women</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="featured-products">
            <div class="container">
                <h2 class="section-title">Featured Products</h2>
                <div id="featured-products-grid" class="products-grid"></div>
            </div>
        </section>

        <!-- Lifestyle Section -->
        <section class="lifestyle-section">
            <div class="container">
                <div class="lifestyle-grid">
                    <div class="lifestyle-card">
                        <img src="https://images.unsplash.com/photo-1753874383454-23d1601167b9?w=800&h=600&fit=crop" alt="Summer Vibes">
                        <div class="lifestyle-content">
                            <h3>Summer Collection</h3>
                            <p>Light, breezy, and perfect for any occasion</p>
                        </div>
                    </div>
                    <div class="lifestyle-card">
                        <img src="https://images.unsplash.com/photo-1688685567150-f3f6bf7c17e1?w=800&h=600&fit=crop" alt="Urban Style">
                        <div class="lifestyle-content">
                            <h3>Urban Essentials</h3>
                            <p>Modern pieces for city living</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="newsletter-section">
            <div class="container">
                <div class="newsletter-content">
                    <h2>Join Our Community</h2>
                    <p>Get exclusive access to new products and special offers</p>
                    <form class="newsletter-form" id="newsletter-form">
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer id="footer"></footer>

    <!-- Cart Drawer -->
    <div id="cart-drawer" class="drawer">
        <div class="drawer-overlay"></div>
        <div class="drawer-content">
            <div class="drawer-header">
                <h3>Shopping Cart</h3>
                <button class="drawer-close">&times;</button>
            </div>
            <div class="drawer-body" id="cart-items"></div>
            <div class="drawer-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span id="cart-total-amount">$0.00</span>
                </div>
                <a href="checkout.html" class="btn btn-primary btn-block">Checkout</a>
            </div>
        </div>
    </div>

    <!-- Wishlist Drawer -->
    <div id="wishlist-drawer" class="drawer">
        <div class="drawer-overlay"></div>
        <div class="drawer-content">
            <div class="drawer-header">
                <h3>Wishlist</h3>
                <button class="drawer-close">&times;</button>
            </div>
            <div class="drawer-body" id="wishlist-items"></div>
        </div>
    </div>

    <!-- Search Modal -->
    <div id="search-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Search Products</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <input type="text" id="search-input" class="search-input" placeholder="Search for products...">
                <div id="search-results" class="search-results"></div>
            </div>
        </div>
    </div>

    <!-- Toast Container -->
    <div id="toast-container"></div>

    <!-- Scripts -->
    <script src="js/products.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/components.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
