// // Get current year for copyright
// const currentYear = new Date().getFullYear();
// document.getElementById('currentyear').textContent = currentYear;

// // Get and display last modified date (24-hour format)
// const lastModifiedElement = document.getElementById('lastModified');
// if (lastModifiedElement) {
//     const modifiedDate = new Date(document.lastModified);
//     const formattedDate =
//         `${modifiedDate.getMonth() + 1}/${modifiedDate.getDate()}/${modifiedDate.getFullYear()}, ` +
//         `${modifiedDate.getHours()}:${modifiedDate.getMinutes().toString().padStart(2, '0')}:` +
//         `${modifiedDate.getSeconds().toString().padStart(2, '0')}`;

//     lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
// }


document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const modifiedDate = new Date(document.lastModified);
        const formattedDate =
            `${modifiedDate.getMonth() + 1}/${modifiedDate.getDate()}/${modifiedDate.getFullYear()}, ` +
            `${modifiedDate.getHours()}:${modifiedDate.getMinutes().toString().padStart(2, '0')}:` +
            `${modifiedDate.getSeconds().toString().padStart(2, '0')}`;

        lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
    }

    hamburger.addEventListener('click', function () {
        // Toggle active class on hamburger and nav menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Optional: Prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a nav item (optional)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});


// // DOM Elements
// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');
// const currentYearElement = document.getElementById('currentyear');
// const lastModifiedElement = document.getElementById('lastModified');

// // Initialize the page
// function initPage() {
//     setCopyrightYear();
//     setLastModifiedDate();
//     setupHamburgerMenu();
// }

// // Set copyright year
// function setCopyrightYear() {
//     if (currentYearElement) {
//         currentYearElement.textContent = new Date().getFullYear();
//     }
// }

// // Set last modified date with 24-hour format
// function setLastModifiedDate() {
//     if (lastModifiedElement) {
//         const modifiedDate = new Date(document.lastModified);
//         const formattedDate = formatDateTime(modifiedDate);
//         lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
//     }
// }

// // Format date to MM/DD/YYYY, HH:MM:SS
// function formatDateTime(date) {
//     return [
//         `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
//         `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
//     ].join(', ');
// }

// // Hamburger menu functionality
// function setupHamburgerMenu() {
//     if (!hamburger || !navMenu) return;

//     // Create overlay element
//     const overlay = document.createElement('div');
//     overlay.className = 'overlay';
//     document.body.appendChild(overlay);

//     // Toggle menu function
//     function toggleMenu() {
//         hamburger.classList.toggle('active');
//         navMenu.classList.toggle('active');
//         overlay.classList.toggle('active');
//         document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
//     }

//     // Event listeners
//     hamburger.addEventListener('click', toggleMenu);
//     overlay.addEventListener('click', toggleMenu);

//     // Close menu when clicking nav items
//     document.querySelectorAll('.nav-item').forEach(item => {
//         item.addEventListener('click', toggleMenu);
//     });

//     // Close menu when clicking outside
//     document.addEventListener('click', (e) => {
//         if (navMenu.classList.contains('active')) {
//             const isClickInside = hamburger.contains(e.target) || navMenu.contains(e.target);
//             if (!isClickInside) {
//                 toggleMenu();
//             }
//         }
//     });

//     // Close menu on ESC key
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && navMenu.classList.contains('active')) {
//             toggleMenu();
//         }
//     });
// }

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', initPage);