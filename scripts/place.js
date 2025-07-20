document.addEventListener('DOMContentLoaded', function() {
    // Current Year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Last Modified Date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const modifiedDate = new Date(document.lastModified);
        lastModifiedElement.textContent = `Last Modified: ${
            modifiedDate.getMonth() + 1}/${modifiedDate.getDate()}/${modifiedDate.getFullYear()}, ${
            modifiedDate.getHours()}:${modifiedDate.getMinutes().toString().padStart(2, '0')}:${
            modifiedDate.getSeconds().toString().padStart(2, '0')}`;
    }

    const temperature = 35;  // 35°C
    const windSpeed = 15;    // 15 km/h
    const units = 'C';       // Celsius

    // Wind Chill Calculation (Single-line function)
    const calculateWindChill = (temp, speed) => 
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed * 3.6, 0.16) + 0.3965 * temp * Math.pow(speed * 3.6, 0.16);

    // Determine wind chill display value
    const windChillElement = document.getElementById('wind-chill');
    if (windChillElement) {
        let windChillValue = 'N/A';
        
        // Check if conditions are met for wind chill calculation (metric)
        // For Celsius: temp ≤ 10°C and wind speed > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const calculatedChill = calculateWindChill(temperature, windSpeed);
            windChillValue = `${Math.round(calculatedChill * 10) / 10}°${units}`;
        }
        
        windChillElement.textContent = windChillValue;
    }
});