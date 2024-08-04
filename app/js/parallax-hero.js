// Select only the hero section
const heroSection = document.querySelector('.hero');

// Function to apply parallax effect to the hero section
function applyHeroParallax() {
    if (!heroSection) return; // Exit if hero section doesn't exist

    const topViewport = window.scrollY;
    const midViewport = topViewport + window.innerHeight / 2;
    
    const topSection = heroSection.offsetTop;
    const midSection = topSection + heroSection.offsetHeight / 2;
    const distanceToSection = midViewport - midSection;
    
    const parallaxTags = heroSection.querySelectorAll('[data-parallax]');
    
    parallaxTags.forEach((tag) => {
        const speed = parseFloat(tag.getAttribute('data-parallax'));
        tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
}

// Add scroll event listener
document.addEventListener('scroll', applyHeroParallax);

// Initial call to apply parallax on page load
applyHeroParallax();