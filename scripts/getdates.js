// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get and display last modified date
const lastModifiedElement = document.getElementById('lastModified');
const modifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modified: ${modifiedDate.toLocaleString()}`;