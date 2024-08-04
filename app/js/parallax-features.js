const featuresContainer = document.querySelector('.features');
const sections = document.querySelectorAll('.features .subfeature');

document.addEventListener('scroll', function() {
    const topViewport = window.scrollY;
    const midViewport = topViewport + window.innerHeight / 2;
    const featuresTop = featuresContainer.offsetTop;

    sections.forEach((section) => {
        const topSection = section.offsetTop + featuresTop;
        const midSection = topSection + section.offsetHeight / 2;
        const distanceToSection = midViewport - midSection;
        const parallaxTags = section.querySelectorAll(`[data-parallax]`);

        parallaxTags.forEach((tag) => {
            const speed = parseFloat(tag.getAttribute('data-parallax'));
            tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
        });

        // Improved background color change logic
        const dataBackground = section.getAttribute('data-background');
        if (dataBackground) {
            const sectionVisibility = (midViewport - topSection) / section.offsetHeight;
            if (sectionVisibility > 0 && sectionVisibility < 1) {
                let backgroundColor = dataBackground;
                if (backgroundColor.startsWith('var(')) {
                    backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(backgroundColor.slice(4, -1));
                }
                featuresContainer.style.backgroundColor = backgroundColor;
            }
        }
    });
});

// Helper function to log section visibility for debugging
function logSectionVisibility() {
    const midViewport = window.scrollY + window.innerHeight / 2;
    const featuresTop = featuresContainer.offsetTop;
    
    sections.forEach((section, index) => {
        const topSection = section.offsetTop + featuresTop;
        const sectionVisibility = (midViewport - topSection) / section.offsetHeight;
        console.log(`Section ${index + 1} visibility:`, sectionVisibility);
    });
}

// Call this function when scrolling to debug
// document.addEventListener('scroll', logSectionVisibility);