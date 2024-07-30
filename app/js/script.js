window.onload = function () {
	// Get the current year
	const currentYear = new Date().getFullYear();

	// Get the span element
	const yearSpan = document.getElementById('currentYear');

	// Update the span element with the current year
	yearSpan.textContent = currentYear;
};


// Add event listener to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
  
	  // Get the target element
	  const target = document.querySelector(this.getAttribute('href'));
  
	  // Animate the scrolling
	  target.scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });