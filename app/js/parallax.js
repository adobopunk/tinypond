const sections = document.querySelectorAll('section');
const bodyTag = document.querySelector('div.features');

document.addEventListener('scroll', function () {
	const topViewport = window.scrollY;
	const midViewport = topViewport + window.innerHeight / 2;

	sections.forEach((section) => {
		const topSection = section.offsetTop;
		const midSection = topSection + section.offsetHeight / 2;

		const distanceToSection = midViewport - midSection;

		const parallaxTags = section.querySelectorAll(`[data-parallax]`);

		// loop over each parallaxed tag
		parallaxTags.forEach((tag) => {
			const speed = parseFloat(tag.getAttribute('data-parallax'));
			tag.style.transform = `translate(0, ${
				distanceToSection * speed
			}px)`;

			// check the background
			if (distanceToSection > -500) {
				const dataBackground =
					section.getAttribute('data-background');
				bodyTag.style.backgroundColor = dataBackground;
			}
		});
	});
});
