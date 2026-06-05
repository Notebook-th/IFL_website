/*
========================================================
FILE: script.js
SECTION: Header & Navigation JavaScript
========================================================

Currently, no JavaScript functionality is required
for the desktop navigation.

However, we are creating the file now because:

1. Future sections will use JavaScript
2. Keeps project structure professional
3. Easy to scale later

========================================================
*/

// Wait until the entire HTML document is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("IFL Website Loaded Successfully");
});

 const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    // Toggles the dropdown menu visibility
    navLinks.classList.toggle('active');
    // Toggles the 'X' animation on the hamburger button
    hamburger.classList.toggle('active');
  });
/*
========================================================
SECTION 2: HERO SLIDESHOW
========================================================

This JavaScript creates an automatic slideshow.

Logic:
1. Get all slides
2. Keep track of current slide
3. Remove "active" class from current slide
4. Add "active" class to next slide
5. Repeat every few seconds

========================================================
*/


// Select all slide elements
const slides = document.querySelectorAll(".slide");


// Keeps track of current visible slide
let currentSlide = 0;


/*
========================================================
FUNCTION: showNextSlide()
========================================================

This function:
1. Removes active class from current slide
2. Moves to next slide
3. Adds active class to new slide

========================================================
*/

function showNextSlide() {

    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");


    // Move to next slide
    currentSlide++;


    /*
    If slideshow reaches last slide,
    restart from first slide.
    */
    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }


    // Show new active slide
    slides[currentSlide].classList.add("active");
}


/*
========================================================
AUTOMATIC SLIDESHOW TIMER
========================================================

setInterval() repeatedly runs a function.

4000 milliseconds = 4 seconds
========================================================
*/

setInterval(showNextSlide, 4000);

/*
========================================================
SECTION 3: COUNT-UP ANIMATION
========================================================

This section creates animated statistics.

When user scrolls to the About Section:
→ Numbers animate from 0 to target value

Example:
0 → 15
0 → 500

========================================================
*/


/*
========================================================
SELECT ALL COUNTER ELEMENTS
========================================================
*/

const counters = document.querySelectorAll(".counter");


/*
========================================================
VARIABLE:
Prevents animation from running multiple times
========================================================
*/

let counterStarted = false;


/*
========================================================
FUNCTION: startCounterAnimation()
========================================================

This function:
1. Loops through all counters
2. Reads target number
3. Gradually increases number
4. Stops at target value

========================================================
*/

function startCounterAnimation() {

    // Prevent duplicate animation
    if (counterStarted) return;

    counterStarted = true;


    // Loop through every counter
    counters.forEach(counter => {

        // Final target number
        const target = +counter.getAttribute("data-target");

        // Starting number
        let count = 0;


        /*
        Speed calculation

        Larger numbers increase faster.
        */
        const increment = target / 300;


        /*
        ====================================================
        FUNCTION: updateCounter()
        ====================================================
        */

        function updateCounter() {

            // Increase count
            count += increment;


            /*
            If count is still below target:
            continue animation
            */
            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                // Ensure exact final number
                counter.innerText = target;
            }
        }


        // Start animation
        updateCounter();

    });
}


/*
========================================================
SCROLL DETECTION
========================================================

Animation starts only when About Section
comes into viewport.

========================================================
*/

window.addEventListener("scroll", () => {

    // Select About Section
    const aboutSection = document.querySelector(".about");


    /*
    Distance from top of viewport
    */
    const sectionTop = aboutSection.getBoundingClientRect().top;


    /*
    Trigger animation slightly before section
    fully enters screen.
    */
    const triggerPoint = window.innerHeight - 100;


    /*
    If section reaches trigger point:
    start animation
    */
    if (sectionTop < triggerPoint) {

        startCounterAnimation();
    }

});

/*
========================================================
SECTION 4: CERTIFICATION SECTION
========================================================

No additional JavaScript is required for this section.

Reason:
The hover zoom effect is handled completely with CSS.

Keeping unnecessary JavaScript out of the project:
✔ Improves performance
✔ Keeps code cleaner
✔ Makes maintenance easier

========================================================
*/

/*
========================================================
SECTION 5: CONTACT FORM
========================================================

Currently:
→ Frontend-only form handling

Purpose:
1. Prevent page reload
2. Simulate successful submission
3. Clear form fields

Later you can integrate:
✔ Backend API
✔ EmailJS
✔ Firebase
✔ PHP Mail
✔ Node.js server

========================================================
*/


/*
========================================================
SELECT CONTACT FORM
========================================================
*/

const contactForm = document.querySelector(".contact-form");


/*
========================================================
FORM SUBMIT EVENT
========================================================
*/

contactForm.addEventListener("submit", function (event) {

    /*
    Prevent default browser behavior

    Without this:
    → Page reloads automatically
    */
    event.preventDefault();


    /*
    Simulated success message
    */
    alert("Your message has been sent successfully!");


    /*
    Reset all form fields
    */
    contactForm.reset();

});

/*
========================================================
SECTION 6: SCROLL TO TOP BUTTON
========================================================

Features:
1. Button appears after scrolling down
2. Clicking button smoothly scrolls to top

========================================================
*/


/*
========================================================
SELECT BUTTON
========================================================
*/

const scrollTopBtn = document.getElementById("scrollTopBtn");


/*
========================================================
SHOW/HIDE BUTTON ON SCROLL
========================================================
*/

window.addEventListener("scroll", () => {

    /*
    window.scrollY
    → Current vertical scroll position
    */

    if (window.scrollY > 300) {

        /*
        User scrolled down enough:
        show button
        */
        scrollTopBtn.style.display = "block";

    } else {

        /*
        User near top:
        hide button
        */
        scrollTopBtn.style.display = "none";
    }

});


/*
========================================================
SCROLL TO TOP ON CLICK
========================================================
*/

scrollTopBtn.addEventListener("click", () => {

    /*
    Smooth scrolling animation
    */
    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });

});