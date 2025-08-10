// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Only these three products
    const products = [
        {
            id: '1',
            name: 'Chocolate Cake',
            price: 54.99,
            description: 'Indulgent chocolate cake with rich frosting',
            imageUrl: 'https://assets.giftalove.com/resources/common/giftimages/productimage1/mouthwatering-chocolate-cake.jpg'
        },
        {
            id: '2',
            name: 'Croissant',
            price: 5.99,
            description: 'Flaky and buttery croissant, perfect for breakfast',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG1QDy04Ngy9XN_F5lD3L99Bjel2S7bh9AA&s'
        },
        {
            id: '3',
            name: 'Sourdough Bread',
            price: 10.49,
            description: 'artisan sourdough bread with a crispy crust',
            imageUrl: 'https://www.allrecipes.com/thmb/-fO5306sLSln_OWNPERC8eIV9rE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/260540-Chef-Johns-Sourdough-Bread-DDMFS-004-4x3-6791a75a5d804ec28424d04756054c5b.jpg'
        }
    ];

    // Function to display featured products
    function displayFeaturedProducts() {
        const featuredProductsContainer = document.getElementById('featuredProducts');
        if (!featuredProductsContainer) return;

        featuredProductsContainer.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Add event listeners to add-to-cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-id');
                const product = products.find(p => p.id === productId);
                if (product) {
                    window.delightBakery.addToCart(product.id, products);
                }
            });
        });
    }

    // Display featured products
    displayFeaturedProducts();

    // Update cart count in header
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }

    // Add product to cart
    function addToCart(productId, productsArray) {
        const product = productsArray.find(p => p.id === productId);

        if (product) {
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image || '../images/default-product.jpg'
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showCartConfirmation(product.name);
            return true;
        }
        return false;
    }

    // Remove item from cart
    function removeFromCart(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            return true;
        }
        return false;
    }

    // Show cart confirmation message
    function showCartConfirmation(productName) {
        // Remove any existing confirmation
        const existingConfirmation = document.querySelector('.cart-confirmation');
        if (existingConfirmation) {
            existingConfirmation.remove();
        }

        const confirmation = document.createElement('div');
        confirmation.className = 'cart-confirmation';
        confirmation.textContent = `${productName} added to cart!`;
        document.body.appendChild(confirmation);

        setTimeout(() => {
            confirmation.classList.add('fade-out');
            setTimeout(() => confirmation.remove(), 500);
        }, 2000);
    }

    // Initialize cart count
    updateCartCount();

    // Make cart functions available globally
    window.delightBakery = {
        cart,
        updateCartCount,
        addToCart,
        removeFromCart
    };

    // Cart indicator click event
    const cartIndicator = document.getElementById('cartIndicator');
    if (cartIndicator) {
        cartIndicator.addEventListener('click', (e) => {
            // Only navigate if not already on order page
            if (!window.location.pathname.includes('delight-order.html')) {
                window.location.href = 'delight-order.html';
            }
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Testimonial Slider Functionality
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-slider-dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        // Remove active class from all testimonials and dots
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current testimonial and dot
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    function startTestimonialSlider() {
        testimonialInterval = setInterval(() => {
            let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextTestimonial);
        }, 5000);
    }

    // Initialize slider if testimonials exist
    if (testimonials.length > 0) {
        // Show first testimonial
        showTestimonial(0);

        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                showTestimonial(index);
                startTestimonialSlider();
            });
        });

        // Start auto-rotation
        startTestimonialSlider();
    }
});