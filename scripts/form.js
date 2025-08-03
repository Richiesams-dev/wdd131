document.addEventListener('DOMContentLoaded', function () {
    // Product array data source
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    // Get the select element
    const productSelect = document.getElementById('choice');

    // Populate dropdown
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Set default date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }

    // Update last modified date
    const lastModified = document.getElementById('lastmodified');
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Initialize review counter in localStorage
    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', 0);
    }

    // Form submission handler
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function () {
            let count = parseInt(localStorage.getItem('reviewCount')) || 0;
            localStorage.setItem('reviewCount', count + 1);
        });
    }
});