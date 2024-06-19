const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

// Dark or Light Images

function imageMode(color) {
    image1.src = `img/undraw_floating_${color}.svg`;
    image2.src = `img/undraw_traveling_${color}.svg`;
    image3.src = `img/undraw_aircraft_${color}.svg`;
    image4.src = `img/undraw_campfire_${color}.svg`;
}


// Dark Mode Styles

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    toggleIcon.children[1].classList.add('fa-moon');
    imageMode('dark');
}

// Light Mode Styles

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);