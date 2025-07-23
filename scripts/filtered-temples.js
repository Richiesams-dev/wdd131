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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Columbia River Washington",
            location: "Richland, Washington, United States",
            dedicated: "2001, November, 18",
            area: 10700,
            imageUrl: 
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/800x800/columbia-river-temple-lds-424634-wallpaper.jpg"
        },
        {
            templeName: "Curitiba, Brazil",
            location: "Curitiba, Parana, Brazil",
            dedicated: "2008, June 1",
            area: 27850,
            imageUrl: 
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/800x1280/curitiba-brazil-temple-lds-538371-wallpaper.jpg"
        },
        {
            templeName: "Dallas, Texas",
            location: "Dallas, Texas, United States",
            dedicated: "1984, October 19",
            area: 44207,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/800x500/Dallas-Texas-Temple10.jpg"
        }
    ];
});