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