document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary elements
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');

    // Function to toggle the navigation menu
    function toggleNav() {
        navLinks.classList.toggle('show');
        closeBtn.classList.toggle('show');
        document.body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : 'auto';
    }

    // Event listener for the menu button
    menuBtn.addEventListener('click', toggleNav);

    // Event listener for the close button
    closeBtn.addEventListener('click', function () {
        navLinks.classList.remove('show');
        closeBtn.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
});

//THIS IS FOR YOUTUBE VIDEO//
document.addEventListener('DOMContentLoaded', function () {
const openVideoBtn = document.getElementById('openVideo');
const closeVideoBtn = document.getElementById('closeVideo');
const videoOverlay = document.getElementById('videoOverlay');

openVideoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    videoOverlay.style.display = 'flex';
});

closeVideoBtn.addEventListener('click', function () {
    videoOverlay.style.display = 'none';
    // You can also pause the video here if needed
});

// Close the video overlay if clicked outside the video area
videoOverlay.addEventListener('click', function (event) {
    if (event.target === videoOverlay) {
        videoOverlay.style.display = 'none';
        // You can also pause the video here if needed
    }
});
});
// JavaScript to hide loader after page load
    //window.addEventListener('load', function () {
        //const loaderOverlay = document.getElementById('loaderOverlay');
        //loaderOverlay.style.display = 'none';
    //}); 



//SMALL PAGE in SMALL SCREENS powered by Js.
document.addEventListener('DOMContentLoaded', function () {
    var accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(function (accordionBtn) {
        accordionBtn.addEventListener('click', function () {
            var accordionContent = this.nextElementSibling;

            accordionContent.classList.toggle('show');

            // Close other accordions
            accordionBtns.forEach(function (otherBtn) {
                if (otherBtn !== accordionBtn) {
                    otherBtn.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});
//SMALL PAGE in SMALL SCREENS powered by Js.

//DEVELOPERS PAGE
function hoverEffect(developerId) {
    var developer = document.getElementById(developerId);
    developer.querySelector('img').style.filter = 'brightness(70%)';
}

function resetEffect(developerId) {
    var developer = document.getElementById(developerId);
    developer.querySelector('img').style.filter = 'brightness(100%)';
}

//LOG IN AREA
      // Show loading spinner when the page starts loading
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loading').style.display = 'block';
      });

      // Hide loading spinner when the page finishes loading
      window.addEventListener('load', function() {
        document.getElementById('loading').style.display = 'none';
      });

      // Form submission handling (you may want to handle this differently)
      document.getElementById('login-form').addEventListener('submit', function() {
        // Show loading spinner when form is submitted
        document.getElementById('loading').style.display = 'block';
      });

      // Toggle password visibility
      document.getElementById('togglePassword').addEventListener('click', function() {
        const passwordField = document.getElementById('passwordField');
        const eyeIcon = document.getElementById('togglePassword');
        const eyeLine = document.querySelector('.eye-line');
        if (passwordField.type === "password") {
          passwordField.type = "text";
          eyeIcon.classList.add('show-password');
          eyeLine.style.width = '0';
        } else {
          passwordField.type = "password";
          eyeIcon.classList.remove('show-password');
          eyeLine.style.width = '10px';
        }
      });


//COURSE PAGE Js
function hoverEffect(developerId) {
    var developer = document.getElementById(developerId);
    developer.querySelector('img').style.filter = 'brightness(70%)';
}

function resetEffect(developerId) {
    var developer = document.getElementById(developerId);
    developer.querySelector('img').style.filter = 'brightness(100%)';
}

// I LOVE COOKIES

