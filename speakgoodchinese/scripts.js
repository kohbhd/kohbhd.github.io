const scrollToTopBtn = document.getElementById('scrollToTopBtn');

const toggleVisibility = () => {
    // Check if the user has scrolled down more than 300 pixels
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

// Listen for scroll events to show/hide the button
window.addEventListener('scroll', toggleVisibility);

/* * NOTE: The click handler (onclick="window.scrollTo({top: 0, behavior: 'smooth'})") 
 * was left in the HTML for simplicity, but you could also move it here:
 
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

*/