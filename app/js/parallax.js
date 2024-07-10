window.addEventListener('scroll', function () {
    const videoBgElement = document.querySelector('hero__background-video');
    const scrollPosition = window.scrollY;

    // Adjust the scrollSpeed as desired (higher value means faster scrolling)
    const scrollSpeed = 0.5;

    // Calculate the translation value for vertical scrolling
    const translateY = scrollPosition * scrollSpeed;

    // Apply the translation to the video-bg element
    videoBgElement.style.transform = `translateY(${translateY}px)`;
});