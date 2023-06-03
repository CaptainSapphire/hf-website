console.log('Hello!');
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 30000); // Change image every 30 seconds
}  

console.log(window.location.pathname); if (window.location.pathname == "/index.html") {
  showSlides();
}
