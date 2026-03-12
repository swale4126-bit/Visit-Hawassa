// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Hawassa City Guide Loaded");

    // Highlight current page in Navbar
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Entertainment Page Logic
function filterEntertainment(category) {
    const maleSection = document.getElementById('male-section');
    const femaleSection = document.getElementById('female-section');
    const commonSection = document.getElementById('common-section');

    // Reset displays
    maleSection.style.display = 'none';
    femaleSection.style.display = 'none';
    commonSection.style.display = 'block'; // Always show common

    if (category === 'male') {
        maleSection.style.display = 'block';
        // Optional: Move male section to top if needed, or just show it
        maleSection.scrollIntoView({ behavior: 'smooth' });
    } else if (category === 'female') {
        femaleSection.style.display = 'block';
        femaleSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Show all for "Everyone"
        maleSection.style.display = 'block';
        femaleSection.style.display = 'block';
    }
}
