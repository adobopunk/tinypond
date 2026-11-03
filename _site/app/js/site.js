// Reveal-on-scroll, copy-to-clipboard email

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade sections in as they enter the viewport
const revealEls = document.querySelectorAll('.reveal');
if (!reduceMotion && 'IntersectionObserver' in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	revealEls.forEach((el) => {
		// Anything already on screen shows right away, without waiting on the observer
		if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('is-visible');
		else observer.observe(el);
	});
} else {
	revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Copy email buttons: feedback shows on the button itself
document.querySelectorAll('.copy-email').forEach((button) => {
	const status = button.querySelector('.copy-email__status');
	const idle = status.textContent;
	let timer;

	button.addEventListener('click', async () => {
		const email = button.dataset.email;
		let copied = false;
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			window.getSelection().removeAllRanges();
		} catch {
			// Older browsers: select the address so it can be copied by hand
			const range = document.createRange();
			range.selectNodeContents(button.querySelector('.copy-email__addr'));
			const selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
		status.textContent = copied ? 'Copied to clipboard' : 'Press Ctrl+C or ⌘C to copy';
		button.classList.toggle('is-copied', copied);
		clearTimeout(timer);
		timer = setTimeout(() => {
			status.textContent = idle;
			button.classList.remove('is-copied');
		}, 2500);
	});
});
