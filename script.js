// SCROLL REVEAL 

ScrollReveal().reveal('.text', { distance: '-150px' });
ScrollReveal().reveal('.info-text', { distance: '-150px' });
ScrollReveal().reveal('.services-text', { distance: '-150px' });
ScrollReveal().reveal('.testimonials-row', { distance: '-150px' });
ScrollReveal().reveal('.footer-container', { distance: '-50px' });



// PRELOADER REVEAL

let loader = document.getElementById('preloader');

window.addEventListener("load", function() {
    loader.style.display = 'none';
})



// Show Menu-Bar

let menuDropdown = document.querySelector('.menu-dropdown');
let menuIcon = document.querySelector('.fa-bars');
let closeMenuIcon = document.querySelector('.fa-times');

let menuClick = menuIcon.addEventListener("click", showMenuDropdown)

function showMenuDropdown() {
    menuDropdown.style.display = 'block';
    menuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'block';
}

let closeMenuFunction = closeMenuIcon.addEventListener("click", closeMenuDropdown)

function closeMenuDropdown() {
    menuDropdown.style.display = 'none';
    menuIcon.style.display = 'block';
    closeMenuIcon.style.display = 'none';
}

window.addEventListener('mouseup', function(event) {
	let box = menuDropdown;
	if (event.target != box && event.target.parentNode != box) {
		box.style.display = 'none'
	}
});