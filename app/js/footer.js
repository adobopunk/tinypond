window.onload = function () {
	// Get the current year
	const currentYear = new Date().getFullYear();

	// Get the span element
	const yearSpan = document.getElementById('currentYear');

	// Update the span element with the current year
	yearSpan.textContent = currentYear;

	// Footer code
	const footerTag = document.querySelector('h2.footer__title');
	const footerOptions = [
		"Your Journey Awaits.<br>Let's Get Started!",
		"Level Up Your Brand<br>Today.",
		"Tiny Pond, Big Results.<br>Let's Dive In.",
		"Free Consult?<br>We Got You.",
		"You Have Ideas. We Have Ideas.<br>Let's Chat."
	];

	const randomFooter = function () {
		// Choose a random index from the array
        const randomItem = Math.floor(Math.random() * footerOptions.length);
        console.log(randomItem);
		// Grab the selected index
		const selectedFooter = footerOptions[randomItem];
		// Apply inner HTML
		footerTag.innerHTML = selectedFooter;
	};

	randomFooter();
};
