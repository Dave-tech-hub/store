// BUTTON TEXT CONTENT UPDATE
    document.addEventListener("DOMContentLoaded", function () {
    const signinBtn = document.getElementById("signinBtn");

    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const isLoggedOut = localStorage.getItem("loggedIn") === "false";

    // signButton.textContent = isLoggedIn ? "Logout" : "Signin";
    if(isLoggedIn){
        signinBtn.textContent = 'Logout';
    }

    if (isLoggedOut){
        signinBtn.textContent = 'Login';
    }

    // Handle button click
    signinBtn.addEventListener("click", function () { 
        if (isLoggedIn) {
        localStorage.setItem("loggedIn", "false");
        localStorage.removeItem('currentUser');
        // alert("You have been logged out.");
        window.location.href = '/intellipaat/account info/login.html'; // Refresh page to update button
        } else {
        // (replace with real auth logic)
        window.location.href = '/intellipaat/account info/login.html';
        localStorage.setItem("loggedIn", "true");
        }
    });

    if(isLoggedOut){
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if(!currentUser){
      document.getElementById('userName').textContent = `Welcome`;
      }} else{
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      document.getElementById('userName').textContent = `Welcome ${currentUser.lastName} ${currentUser.firstName}`; // UPDATE USER NAME
    }
});

//HOME HEADER IMAGE SLIDER
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

let timer; // store timeout ID

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  // restart auto-slide
  timer = setTimeout(showSlides, 6000);
}

// CLICK DOT TO GO TO SLIDE + RESET TIMER
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearTimeout(timer);     // stop the old timer
    slideIndex = i;          // go to clicked slide
    showSlides();            // restart slider from there
  });
});

showSlides();

// SLIDER BUTTONS NAVIGATION
let collection = document.getElementById('shopCollection');
let explore = document.getElementById('explore');
let lookbook = document.getElementById('lookbook');

collection.addEventListener('click', () => {
  window.open('slider nav/collection.html', '_blank'); // OPEN IN NEW TAB
});

explore.addEventListener('click', () => {
  window.open('slider nav/explore.html', '_blank'); // OPEN IN NEW TAB
});

lookbook.addEventListener('click', () => {
  window.open('slider nav/lookbook.html', '_blank'); // OPEN IN NEW TAB
})


//SCROLL TOP PICKS
const nextBtn = document.querySelector('.productNext');
const prevBtn = document.querySelector('.productPrev');
const slide = document.querySelector('.cardGroup');
const scrollAmount = 300; //HOW MUCH MOVEMENT MADE PER CLICK

nextBtn.addEventListener('click', () =>{
  slide.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
  slide.scrollLeft -= scrollAmount;
});


//TOP PICKS BUTTON NAV
document.getElementById('shop').addEventListener('click', () => {
  window.open('shop.html', '_blank');
});

// CART VIEW
const cartIcon = document.querySelector('.cart');
const cartTab = document.querySelector('.cartTab');
const closeBtn = document.querySelector('.closeBtn');
const cardGroup = document.querySelector('.cardGroup');

cartIcon.addEventListener('click', () =>cartTab.classList.add('cartTabActive'));
closeBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  cartTab.classList.remove('cartTabActive')});



//