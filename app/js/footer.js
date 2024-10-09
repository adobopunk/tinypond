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

	const copyLinks = document.querySelectorAll('.copy-link'); // select all elements with the class 'copy-link'

	copyLinks.forEach((copyLink) => {
		copyLink.addEventListener('click', (e) => {
			e.preventDefault(); // prevent default link behavior

			const textToCopy = copyLink.textContent; // get the current text content of the clicked element
			navigator.clipboard
				.writeText(textToCopy)
				.then(() => {
					console.log('Email copied to clipboard!');
					// Change the inner text to "Text copied to clipboard!"
					copyLink.textContent = 'Email copied to clipboard!';

					// Delay for 2 seconds before changing it back
					setTimeout(() => {
						copyLink.textContent = textToCopy; // revert to original text
					}, 2000);
				})
				.catch((error) => {
					console.error('Error copying text:', error);
				});
		});
	});
};
