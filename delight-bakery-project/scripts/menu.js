// Menu page functionality
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: "Elegant vanilla cake",
            price: 28,
            category: "cakes",
            description: "Delightful vanilla cake with buttercream frosting",
            imageUrl: "https://assets.giftalove.com/resources/common/giftimages/productimage1/PRCAKE093.jpg"
        },
        {
            id: 2,
            name: "Croissant",
            price: 5.99,
            category: "pastries",
            description: "Flaky and buttery croissant, perfect for breakfast",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG1QDy04Ngy9XN_F5lD3L99Bjel2S7bh9AA&s"
        },
        {
            id: 3,
            name: "Cinnamon Rolls",
            price: 6.50,
            category: "pastries",
            description: "soft and gooey cinnamon rolls with cream cheese icing",
            imageUrl: "https://thebigmansworld.com/wp-content/uploads/2020/05/cinnamon-roll-for-one4.jpg"
        },
        {
            id: 4,
            name: "Rich Chocolate Cupcake",
            price: 12.99,
            category: "cakes",
            description: "Decadent chocolate cupcake with rich frosting",
            imageUrl: "https://assets.giftalove.com/resources/common/giftimages/productimage2/rich-chocolate-cupcakes.jpg"
        },
        {
            id: 5,
            name: "Sourdough Bread",
            price: 10.49,
            category: "bread",
            description: "artisan sourdough bread with a crispy crust",
            imageUrl: "https://www.allrecipes.com/thmb/-fO5306sLSln_OWNPERC8eIV9rE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/260540-Chef-Johns-Sourdough-Bread-DDMFS-004-4x3-6791a75a5d804ec28424d04756054c5b.jpg"
        },
        {
            id: 6,
            name: "Pane di Casa Loaf",
            price: 10.99,
            category: "bread",
            description: "Traditional Italian bread with a soft interior",
            imageUrl: "https://www.cobsbread.com/wp-content/uploads/2018/01/cobs-product-pane-di-casa-loaf-583x400.png"
        },
        {
            id: 7,
            name: "Wholemeal Bread",
            price: 11.50,
            category: "bread",
            description: "Healthy wholemeal bread perfect for sandwiches",
            imageUrl: "https://www.myheart.org.sg/wp-content/uploads/2019/01/Wholemeal-Bread-scaled.jpg"
        },
        {
            id: 8,
            name: "Chocolate Cake",
            price: 54.99,
            category: "cakes",
            description: "Indulgent chocolate cake with rich frosting",
            imageUrl: "https://assets.giftalove.com/resources/common/giftimages/productimage1/mouthwatering-chocolate-cake.jpg"
        },
        {
            id: 9,
            name: "Designer Vanilla Cake",
            price: 80.99,
            category: "cakes",
            description: "Beautifully designed vanilla cake for birthdays",
            imageUrl: "https://assets.giftalove.com/resources/common/giftimages/productimage1/designer-vanilla-cake-for-birthday.jpg"
        },
        {
            id: 9,
            name: "Scrumptious Vanilla Cupcake",
            price: 13.99,
            category: "cakes",
            description: "Delicious vanilla cupcake with creamy frosting",
            imageUrl: "https://assets.giftalove.com/resources/common/giftimages/productimage1/scrumptious-vanilla-cupcake.jpg"
        },
    ];

    const productGrid = document.getElementById('menuProducts');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render products
    function renderProducts(category = 'all') {
        const filtered = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);
        
        productGrid.innerHTML = filtered.map(product => `
            <div class="product-card">
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
        
        // Add event listeners to new buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                window.delightBakery.addToCart(productId, products);
            });
        });
    }
    
    // Initial render
    renderProducts();
    
    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
});