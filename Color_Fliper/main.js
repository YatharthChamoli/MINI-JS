// Cache DOM elements for better performance
const body = document.body;
const colorCodeSpan = document.querySelector('.color-code');

// Get all buttons
const greenBtn = document.getElementById('green');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random');

// Function to update the background color and the text
function updateColor(color) {
    body.style.backgroundColor = color;
    colorCodeSpan.textContent = color;
}

// Add event listeners to buttons
greenBtn.addEventListener('click', () => {
    updateColor('green');
});

redBtn.addEventListener('click', () => {
    updateColor('red');
});

blueBtn.addEventListener('click', () => {
    updateColor('blue');
});

randomBtn.addEventListener('click', () => {
    // Generate random r, g, b values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomRgbColor = `rgb(${r}, ${g}, ${b})`;
    updateColor(randomRgbColor);
});

// Set the initial text content on page load
updateColor('#F1F5F8');