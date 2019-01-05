var slideIndex = 0;
var slides;
var dots;

function showSlides() {

  var i;
  slides = document.getElementsByClassName("about-media");
  dots = document.getElementsByClassName("dot");
  console.log(slides + " " + dots);

  for ( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if ( slideIndex > slides.length ) {
    slideIndex = 1;
  }
  for ( i = 0; i < dots.length; i++ ) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000);
}

function currentSlide(index) {
  slideIndex = index;
  if ( index > slides.length ) {
    index = 1;
  }
  else if ( index < 1 ) {
    index = slides.length
  }
  for ( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }
  for ( i = 0; i < dots.length; i++ ) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}
