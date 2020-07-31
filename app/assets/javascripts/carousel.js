window.onload=function(){
var index = 0;
// var experimentTitles = ["Promo email, Salience", "Promo email, Yo! Sushi"]

var slides = document.getElementsByClassName("slides");
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

// var title = document.getElementById("title");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots");

createDots();
showSlides(index);

function createDots() {
  for (i=0; i<slides.length; i++) {
  var dot = document.createElement("span");
  dot.className = "dots";
  dotsContainer.appendChild(dot);
  }
}

function showSlides(x) {
  if (x > slides.length-1) {
    index = 0;
  }
  if (x < 0) {
    index = slides.length-1;
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotArray[i].className = "dots";
  }

  slides[index].style.display = "block";
  dotArray[index].className += " activeDot";
  // title.innerHTML = experimentTitles[index];
}

nextArrow.onclick = function() {
  index += 1;
  showSlides(index);
}

previousArrow.onclick = function() {
  index -= 1;
  showSlides(index);
}

dotArray[0].onclick = showSlides(1);

}



// window.onload=function(){

// var index = 0;
// var webTitles = ["UX Case Study", "CSS restyle: Before", "CSS restyle: After", "Marketing email"]

// var slides = document.getElementsByClassName("slides");
// var nextArrow = document.getElementById("next");

// var previousArrow = document.getElementById("previous");

// var title = document.getElementById("title");

// var dotsContainer = document.getElementById("dotsContainer");

// var dotArray = document.getElementsByClassName("dots");

// createDots();
// showSlides(index);

// function createDots() {
//   for (i=0; i<slides.length; i++) {
//   var dot = document.createElement("span");
//   dot.className = "dots";
//   dotsContainer.appendChild(dot);
//   }
// }

// function showSlides(x) {
//   if (x > slides.length-1) {
//     index = 0;
//   }
//   if (x < 0) {
//     index = slides.length-1;
//   }
//   for (i=0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dotArray[i].className = "dots";
//   }

//   slides[index].style.display = "block";
//   dotArray[index].className += " activeDot";
//   title.innerHTML = webTitles[index];
// }

// nextArrow.onclick = function() {
//   index += 1;
//   showSlides(index);
// }

// previousArrow.onclick = function() {
//   index -= 1;
//   showSlides(index);
// }

// dotArray[0].onclick = showSlides(1);




// window.onload=function(){


// var index = 0;
// var webTitles = ["Cocktail Library", "Booking app"]

// var slides = document.getElementsByClassName("slides02");
// var nextArrow = document.getElementById("next02");

// var previousArrow = document.getElementById("previous02");

// var title = document.getElementById("title02");

// var dotsContainer = document.getElementById("dotsContainer02");

// var dotArray = document.getElementsByClassName("dots02");

// createDots();
// showSlides(index);

// function createDots() {
//   for (i=0; i<slides.length; i++) {
//   var dot = document.createElement("span");
//   dot.className = "dots02";
//   dotsContainer.appendChild(dot);
//   }
// }

// function showSlides(x) {
//   if (x > slides.length-1) {
//     index = 0;
//   }
//   if (x < 0) {
//     index = slides.length-1;
//   }
//   for (i=0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dotArray[i].className = "dots02";
//   }

//   slides[index].style.display = "block";
//   dotArray[index].className += " activeDot";
//   title.innerHTML = webTitles[index];
// }

// nextArrow.onclick = function() {
//   index += 1;
//   showSlides(index);
// }

// previousArrow.onclick = function() {
//   index -= 1;
//   showSlides(index);
// }

// dotArray[0].onclick = showSlides(1);

// }



// window.onload=function(){

// document.getElementById('carousel-arrow-next').addEventListener('click',carouselSwipe,false);
// document.getElementById('carousel-arrow-prev').addEventListener('click',carouselSwipe,false);

// /**
//  * Switch header carousel to next image (swipe right)
//  */
// function carouselSwipe() {

//     // Récupère les numéros de l'ancienne et la nouvelle image
//     var currentImg = document.getElementsByClassName('carousel-img-displayed')[0].id.substring(9);
//   var newImg = parseInt(currentImg);

//     // Gestion du début et de la fin de la liste d'images
//   if (this.id == 'carousel-arrow-next') {
//         newImg++;
//         if (newImg >= document.getElementsByClassName('carousel-img').length) {
//             newImg = 0;
//         }
//   } else if (this.id == 'carousel-arrow-prev') {
//         newImg--;
//         if (newImg<0) {
//             newImg = document.getElementsByClassName('carousel-img').length-1;
//         }
//     }

//   // Disparition progressive de l'ancienne image
//     document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';

//     // Apparition progressive de la nouvelle image
//     var displayedCarousel = document.getElementById('carousel-'+newImg);
//   displayedCarousel.className = 'carousel-img carousel-img-hidden';
//   setTimeout(function() {
//     displayedCarousel.className = 'carousel-img carousel-img-displayed';
//   },20);

//     // Disparition totale de l'ancienne image
//   setTimeout(function() {
//     document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-noDisplay';
//   },520);

// }

// }
