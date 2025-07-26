document.addEventListener('DOMContentLoaded', function() {
    // Existing code for year, lastModified, and hamburger menu...
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const modifiedDate = new Date(document.lastModified);
        const formattedDate = modifiedDate.toLocaleString();
        lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Temple data array
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Columbia River Washington",
            location: "Richland, Washington, United States",
            dedicated: "2001, November, 18",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/800x800/columbia-river-temple-lds-424634-wallpaper.jpg"
        },
        {
            templeName: "Curitiba, Brazil",
            location: "Curitiba, Parana, Brazil",
            dedicated: "2008, June 1",
            area: 27850,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/800x1280/curitiba-brazil-temple-lds-538371-wallpaper.jpg"
        },
        {
            templeName: "Dallas, Texas",
            location: "Dallas, Texas, United States",
            dedicated: "1984, October 19",
            area: 44207,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/800x500/Dallas-Texas-Temple10.jpg"
        },
        {
            templeName: "San Jose Costa Rica",
            location: "San Jose, Costa Rica",
            dedicated: "2000, June 4",
            area: 3108,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-costa-rica-temple/san-jose-costa-rica-temple-59194.jpg"
        },
        {
            templeName: "Apia Samoa",
            location: "Apia, Samoa",
            dedicated: "1983, august 5",
            area: 18691,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13903.jpg"
        }
    ];

    // Filter functions
    const filterTemples = {
        home: () => temples,
        old: () => temples.filter(temple => {
            // Extract year from dedicated date string (format: "YYYY, Month, Day")
            const yearMatch = temple.dedicated.match(/^\d{4}/);
            if (yearMatch) {
                const year = parseInt(yearMatch[0]);
                return year < 1900;
            }
            return false;
        }),
        new: () => temples.filter(temple => {
            const yearMatch = temple.dedicated.match(/^\d{4}/);
            if (yearMatch) {
                const year = parseInt(yearMatch[0]);
                return year > 2000;
            }
            return false;
        }),
        large: () => temples.filter(temple => temple.area > 90000),
        small: () => temples.filter(temple => temple.area < 10000)
    };

    // Create temple card element
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy';
        img.className = 'temple-img';
        
        const content = document.createElement('div');
        content.className = 'temple-content';
        
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        
        const location = document.createElement('p');
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        
        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        
        const area = document.createElement('p');
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        
        content.appendChild(name);
        content.appendChild(location);
        content.appendChild(dedicated);
        content.appendChild(area);
        
        card.appendChild(content);
        card.appendChild(img);
        
        return card;
    }

    // Display temples with optional filter
    function displayTemples(filter = 'home') {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '<div class="loading">Loading temples...</div>';
        
        setTimeout(() => {
            cardContainer.innerHTML = '';
            
            const filteredTemples = filterTemples[filter]();
            
            if (filteredTemples.length === 0) {
                cardContainer.innerHTML = '<div class="no-results">No temples match the selected filter.</div>';
                return;
            }
            
            filteredTemples.forEach(temple => {
                const card = createTempleCard(temple);
                cardContainer.appendChild(card);
            });
            
            // Update main heading
            const mainHeading = document.querySelector('main h1');
            if (mainHeading) {
                mainHeading.textContent = filter === 'home' 
                    ? 'All Temple' 
                    : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Temples`;
            }
        }, 300);
    }

    // Set up navigation event listeners
    function setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const filterType = this.textContent.toLowerCase();
                
                if (filterTemples[filterType]) {
                    // Update active state
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Display filtered temples
                    displayTemples(filterType);
                }
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Initialize
    displayTemples();
    setupNavigation();
});