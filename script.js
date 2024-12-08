const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navigation");

// this is to darken the body of the page when nav menu is in view
const bodyOverlay = document.createElement("div");
bodyOverlay.classList.add("body-overlay");
document.body.appendChild(bodyOverlay);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open"); // toggle the open class of hamburger
    navBar.classList.toggle("open"); // displays or hide the nav menu
    document.body.classList.toggle("no-scroll"); // prevents the body from being scrolled when nav menu is active
    bodyOverlay.classList.toggle("active");
})

// Close the navbar if user clicks outside while it is active
document.addEventListener('click', function(e) {
    console.log(e.target)
    if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
        // Remove the 'open' class to close the navbar
        hamburger.classList.remove('open');
        navBar.classList.remove('open');
        document.body.classList.remove('no-scroll');
        bodyOverlay.classList.remove("active");
    }
});