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
		"Your Journey Awaits.<br>Let's get started!",
		'I saw a frog today oh boy.',
		'Put us to work!',
		'Want a free consult?',
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
