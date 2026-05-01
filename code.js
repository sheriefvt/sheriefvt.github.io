//Global constants
const button = document.querySelector("button");
const toggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); //how to add style class to an element (body) using JavaScript / change the CSS
  // Save preference in localStorage
  const isDark = body.classList.contains('dark-mode'); // Check if dark mode is active and returns true or false    
  
  console.log(`Theme toggled to: ${isDark ? 'dark' : 'light'}`);
  if (isDark) {
    moonIcon.style.display = 'none';   //how you can hide an element using JavaScript / change the CSS
    sunIcon.style.display = 'inline';
  } else {
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {  //run this code when the page is fully loaded
   //fetch the experience.txt file and display its content in the experience section
    fetch("https://raw.githubusercontent.com/sheriefvt/website_info/refs/heads/main/experience.TXT")
        .then(res => res.text())
        .then(data => {
            document.getElementById("experience").innerText = data;//how to change the text of an element using JavaScript
        })
        .catch(err => console.error(err));
});