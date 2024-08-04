// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Select the element with class "bg-text-hero"
//     const bgTextHero = document.querySelector('.bg-text-hero');

//     // Check if the element exists
//     if (!bgTextHero) {
//         console.error('Element with class "bg-text-hero" not found');
//         return;
//     }

//     // Get the maximum scroll value (total scrollable height minus viewport height)
//     let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

//     // Function to update the horizontal position of the element
//     function updateHorizontalPosition() {
//         // Calculate the scroll percentage
//         let scrollPercentage = window.scrollY / maxScroll;

//         // Calculate the horizontal translation
//         // Adjust the 200 value to increase or decrease the total horizontal movement
//         let translateX = scrollPercentage * 1000; 

//         // Apply the translation. The minus sign makes it move from right to left
//         bgTextHero.style.transform = `translateX(${translateX}px)`;
//     }

//     // Add scroll event listener
//     window.addEventListener('scroll', updateHorizontalPosition);

//     // Add resize event listener to recalculate maxScroll if window is resized
//     window.addEventListener('resize', function() {
//         maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     });

//     // Initial position update
//     updateHorizontalPosition();
// });