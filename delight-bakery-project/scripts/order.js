// // Order page functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // 1. Initialize elements and cart
//     const cart = window.delightBakery?.cart || [];
//     const form = document.getElementById('checkoutForm');
//     const cartItemsEl = document.getElementById('cartItems');
//     const deliveryTypeSelect = document.getElementById('deliveryType');

//     // 2. Calculate order totals
//     function calculateTotals() {
//         const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//         const tax = subtotal * 0.08; // 8% tax
//         const deliveryFee = deliveryTypeSelect.value === 'delivery' ? 5 : 0;
//         const total = subtotal + tax + deliveryFee;
        
//         return {
//             subtotal: subtotal.toFixed(2),
//             tax: tax.toFixed(2),
//             deliveryFee: deliveryFee.toFixed(2),
//             total: total.toFixed(2)
//         };
//     }

//     // 3. Render cart items with enhanced remove functionality
//     function renderCartItems() {
//         if (!cartItemsEl) return;
        
//         if (cart.length === 0) {
//             cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="delight-menu.html">Browse our menu</a></p>';
//             document.querySelector('.checkout-btn')?.setAttribute('disabled', 'true');
//             return;
//         }
        
//         cartItemsEl.innerHTML = cart.map(item => `
//             <div class="cart-item">
//                 <img src="${item.image || 'images/default-product.jpg'}" alt="${item.name}">
//                 <div class="item-info">
//                     <h4>${item.name}</h4>
//                     <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
//                 </div>
//                 <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
//                 <button class="remove-item" data-id="${item.id}" aria-label="Remove ${item.name}">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                     </svg>
//                 </button>
//             </div>
//         `).join('');
        
//         // Update totals display
//         const totals = calculateTotals();
//         document.getElementById('subtotal').textContent = `$${totals.subtotal}`;
//         document.getElementById('tax').textContent = `$${totals.tax}`;
//         document.getElementById('delivery-fee').textContent = `$${totals.deliveryFee}`;
//         document.getElementById('total').textContent = `$${totals.total}`;
//     }

//     // 4. Enhanced remove item handler with event delegation
//     document.addEventListener('click', function(e) {
//         if (e.target.closest('.remove-item')) {
//             const button = e.target.closest('.remove-item');
//             const productId = parseInt(button.getAttribute('data-id'));
            
//             if (!isNaN(productId) && window.delightBakery?.removeFromCart) {
//                 // Visual feedback
//                 button.innerHTML = '<span class="removing">Removing...</span>';
                
//                 // Remove after slight delay for better UX
//                 setTimeout(() => {
//                     if (window.delightBakery.removeFromCart(productId)) {
//                         renderCartItems();
                        
//                         // Show temporary confirmation
//                         const confirmation = document.createElement('div');
//                         confirmation.className = 'cart-notification';
//                         confirmation.textContent = 'Item removed from cart';
//                         document.body.appendChild(confirmation);
                        
//                         setTimeout(() => {
//                             confirmation.remove();
//                         }, 2000);
//                     }
//                 }, 300);
//             }
//         }
//     });

//     // 5. Delivery address toggle
//     function toggleDeliveryAddress() {
//         const addressGroup = document.getElementById('deliveryAddressGroup');
//         if (addressGroup) {
//             addressGroup.style.display = deliveryTypeSelect.value === 'delivery' ? 'block' : 'none';
//             renderCartItems(); // Recalculate totals
//         }
//     }

//     // 6. Form submission with validation
//     function handleFormSubmit(e) {
//         e.preventDefault();
        
//         if (cart.length === 0) {
//             alert('Your cart is empty!');
//             return;
//         }
        
//         const name = document.getElementById('name').value.trim();
//         const phone = document.getElementById('phone').value.trim();
        
//         if (!name || !phone) {
//             alert('Please fill in all required fields');
//             return;
//         }
        
//         if (deliveryTypeSelect.value === 'delivery') {
//             const address = document.getElementById('address').value.trim();
//             if (!address) {
//                 alert('Please enter your delivery address');
//                 return;
//             }
//         }
        
//         // Process order (in real app would be API call)
//         localStorage.removeItem('cart');
//         window.location.href = 'order-confirmation.html';
//     }

//     // 7. Initialize page
//     renderCartItems();
//     toggleDeliveryAddress();
    
//     // Event listeners
//     if (deliveryTypeSelect) {
//         deliveryTypeSelect.addEventListener('change', toggleDeliveryAddress);
//     }
//     if (form) {
//         form.addEventListener('submit', handleFormSubmit);
//     }
// });







// Order page functionality
document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize elements and cart
    const cart = window.delightBakery?.cart || [];
    const form = document.getElementById('checkoutForm');
    const cartItemsEl = document.getElementById('cartItems');
    const deliveryTypeSelect = document.getElementById('deliveryType');

    // 2. Calculate order totals
    function calculateTotals() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08; // 8% tax
        const deliveryFee = deliveryTypeSelect.value === 'delivery' ? 5 : 0;
        const total = subtotal + tax + deliveryFee;
        
        return {
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            deliveryFee: deliveryFee.toFixed(2),
            total: total.toFixed(2)
        };
    }

    // 3. Render cart items with quantity controls
    function renderCartItems() {
        if (!cartItemsEl) return;
        
        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="delight-menu.html">Browse our menu</a></p>';
            document.querySelector('.checkout-btn')?.setAttribute('disabled', 'true');
            return;
        }
        
        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image || 'images/default-product.jpg'}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} each</p>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrement" aria-label="Reduce quantity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increment" aria-label="Increase quantity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
                <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-item" aria-label="Remove ${item.name}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        `).join('');
        
        // Update totals display
        updateTotals();
    }

    // 4. Update totals display separately
    function updateTotals() {
        const totals = calculateTotals();
        document.getElementById('subtotal').textContent = `$${totals.subtotal}`;
        document.getElementById('tax').textContent = `$${totals.tax}`;
        document.getElementById('delivery-fee').textContent = `$${totals.deliveryFee}`;
        document.getElementById('total').textContent = `$${totals.total}`;
    }

    // 5. Handle all cart interactions with event delegation
    document.addEventListener('click', function(e) {
        const cartItem = e.target.closest('.cart-item');
        if (!cartItem) return;
        
        const productId = parseInt(cartItem.dataset.id);
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        // Remove item
        if (e.target.closest('.remove-item')) {
            handleRemoveItem(productId, cartItem);
        }
        // Decrement quantity
        else if (e.target.closest('.decrement')) {
            handleQuantityChange(productId, -1);
        }
        // Increment quantity
        else if (e.target.closest('.increment')) {
            handleQuantityChange(productId, 1);
        }
    });

    // 6. Handle quantity changes
    function handleQuantityChange(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex === -1) return;

        cart[itemIndex].quantity += change;
        
        // Remove if quantity reaches 0
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        // Update storage and UI
        localStorage.setItem('cart', JSON.stringify(cart));
        window.delightBakery.updateCartCount();
        renderCartItems();
    }

    // 7. Handle item removal
    function handleRemoveItem(productId, cartItem) {
        cartItem.classList.add('removing');
        
        setTimeout(() => {
            const success = window.delightBakery.removeFromCart(productId);
            if (success) {
                renderCartItems();
                showNotification('Item removed from cart');
            }
        }, 300);
    }

    // 8. Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // 9. Delivery address toggle
    function toggleDeliveryAddress() {
        const addressGroup = document.getElementById('deliveryAddressGroup');
        if (addressGroup) {
            addressGroup.style.display = deliveryTypeSelect.value === 'delivery' ? 'block' : 'none';
            updateTotals(); // Recalculate totals
        }
    }

    // 10. Form submission with validation
    function handleFormSubmit(e) {
        e.preventDefault();
        
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        if (!name || !phone) {
            showNotification('Please fill in all required fields');
            return;
        }
        
        if (deliveryTypeSelect.value === 'delivery') {
            const address = document.getElementById('address').value.trim();
            if (!address) {
                showNotification('Please enter your delivery address');
                return;
            }
        }
        
        // Process order
        localStorage.removeItem('cart');
        window.location.href = 'order-confirmation.html';
    }

    // Initialize page
    renderCartItems();
    toggleDeliveryAddress();
    
    // Event listeners
    if (deliveryTypeSelect) {
        deliveryTypeSelect.addEventListener('change', toggleDeliveryAddress);
    }
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});