let slideIndex = 0;
let autoSlideInterval; // Store the interval ID here

// Function to dynamically load images
function loadImages(imageArray) {
    const container = document.querySelector('.slideshow-container');
    const dotsContainer = document.querySelector('.dots-container');

    imageArray.forEach((image, index) => {
        // Create slide element
        const slide = document.createElement('div');
        slide.classList.add('mySlides');
        slide.style.display = index === 0 ? 'block' : 'none';

        // Create img element and set the src
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '100%';

        // Append img to slide
        slide.appendChild(img);
        container.appendChild(slide);

        // Create dot for the slide
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide(${index + 1})`);
        dotsContainer.appendChild(dot);
    });
}

// Function to show the slides
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoScroll(); // Reset the auto-scroll timer when the user interacts
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
    resetAutoScroll(); // Reset the auto-scroll timer when the user interacts
}

// Function to automatically scroll to the next slide every 5 seconds
function autoScrollSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

// Function to start the auto scroll with an interval of 5 seconds
function startAutoScroll() {
    autoSlideInterval = setInterval(autoScrollSlides, 2500); // 5000 milliseconds = 5 seconds
}

// Function to reset the auto-scroll timer when manually controlling the slides
function resetAutoScroll() {
    clearInterval(autoSlideInterval); // Clear the current interval
    startAutoScroll(); // Restart auto-scroll
}

const images = [
  "/assets/img/gallery/20240822_.jpg",
  "/assets/img/gallery/20240822_(1).jpg",
  "/assets/img/gallery/20240823_.jpg",
  "/assets/img/gallery/20240823_(1).jpg",
  "/assets/img/gallery/FullSizeR.jpg",
  "/assets/img/gallery/FullSizeR(1).jpg",
  "/assets/img/gallery/FullSizeR(2).jpg",
  "/assets/img/gallery/FullSizeR(3).jpg",
  "/assets/img/gallery/FullSizeR(4).jpg",
  "/assets/img/gallery/FullSizeR(5).jpg",
  "/assets/img/gallery/image0000.jpg",
  "/assets/img/gallery/image0000(1).jpg",
  "/assets/img/gallery/IMG_0515.jpg",
  "/assets/img/gallery/IMG_0518.jpg",
  "/assets/img/gallery/IMG_0522.jpg",
  "/assets/img/gallery/IMG_0525.jpg",
  "/assets/img/gallery/IMG_0528.jpg",
  "/assets/img/gallery/IMG_0529.jpg",
  "/assets/img/gallery/IMG_0530.jpg",
  "/assets/img/gallery/IMG_1287.jpg",
  "/assets/img/gallery/IMG_1289.jpg",
  "/assets/img/gallery/IMG_1732.jpg",
  "/assets/img/gallery/IMG_1735.jpg",
  "/assets/img/gallery/IMG_1741.jpg",
  "/assets/img/gallery/IMG_4988.jpg",
  "/assets/img/gallery/IMG_5873.jpg",
  "/assets/img/gallery/IMG_5875.jpg",
  "/assets/img/gallery/IMG_5876.jpg",
  "/assets/img/gallery/IMG_5877.jpg",
  "/assets/img/gallery/IMG_5878.jpg",
  "/assets/img/gallery/IMG_7518.jpg",
  "/assets/img/gallery/IMG_7521.jpg",
  "/assets/img/gallery/IMG_7572.jpg"
];

// Load images and initialize the slideshow
loadImages(images);
showSlides(slideIndex);
startAutoScroll(); // Start automatic scrolling when the page loads
