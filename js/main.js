// Main application initialization

document.addEventListener('DOMContentLoaded', () => {
    // Initialize featured products on homepage
    if (document.getElementById('featured-products-grid')) {
        const featuredProducts = products.slice(0, 8);
        renderProducts(featuredProducts, 'featured-products-grid');
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            cartManager.showToast('Thank you for subscribing!', 'success');
            e.target.reset();
        });
    }

    // Initialize cart and wishlist UI
    cartManager.init();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
