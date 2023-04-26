// ------------------------Slideshow script------------------------------- //
var slideIndex = 0;
showSlides();

function showSlides() {
var slides = document.getElementsByClassName("mySlides");
var dotIndicator = document.getElementsByClassName("dotIndicator");

for (var i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotIndicator[i].style.backgroundColor = 'white';
}

if (slideIndex == slides.length) {slideIndex = 0}

slides[slideIndex].style.display = "block";
dotIndicator[slideIndex].style.backgroundColor = 'var(--dark-blue)';

slideIndex++;

setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// ------------------------------------------------------------------------ //