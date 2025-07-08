// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get and display last modified date (24-hour format)
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    const modifiedDate = new Date(document.lastModified);
    const formattedDate = 
        `${modifiedDate.getMonth()+1}/${modifiedDate.getDate()}/${modifiedDate.getFullYear()}, ` +
        `${modifiedDate.getHours()}:${modifiedDate.getMinutes().toString().padStart(2, '0')}:` +
        `${modifiedDate.getSeconds().toString().padStart(2, '0')}`;
    
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}