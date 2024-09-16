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
		'The Creative Agency<br>For High Impact Events.',
		"Tiny Pond, Big Results.<br>Let's Dive In.",
		'Free Consult?<br>We Got You.',
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

	const copyLink = document.getElementById('copy-link');
	console.log(copyLink);

	copyLink.addEventListener('click', (e) => {
		e.preventDefault(); // prevent default link behavior

		const textToCopy = 'hi@tinypond.studio'; // the text you want to copy
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				console.log('Text copied to clipboard!');
				// Change the inner HTML to "Email copied to clipboard!"
				copyLink.innerHTML = 'Email copied to clipboard!';

				// Delay for 2 seconds before changing it back
				setTimeout(() => {
					copyLink.innerHTML = 'hi@tinypond.studio';
				}, 2000);
			})
			.catch((error) => {
				console.error('Error copying text:', error);
			});
	});
};
