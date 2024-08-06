const animatedTags = document.querySelectorAll(
	' h1, h2, h3, p, .about__img, a.button, .footer__img, .topnav__homelink, .bg-text-hero, .topnav__item, .footer__logo, .footer__links, .subfeature__img, .subfeature__accent,  .subfeature__feature-img'
);

//fade out on load
animatedTags.forEach((tag) => {
	tag.style.opacity = 0;
});

const fadeIn = function () {
	//look through animated tags and see if it's in the window

	let delay = 0.1;

	animatedTags.forEach((tag) => {
		const tagTop = tag.getBoundingClientRect().top;
		const tagBottom = tag.getBoundingClientRect().bottom;
		if (tagTop < window.innerHeight - 25 && tagBottom > 0) {
			tag.style.animation = `fadein 1.5s ${delay}s both`;
			delay = delay + 0.05;
		} else {
			tag.style.opacity = 0;
			tag.style.animation = '';
		}
	});
};

//run fadeIn on load
fadeIn();

//on scroll, run fadeIn
document.addEventListener('scroll', function () {
	fadeIn();
});

//on browser resize, run fadeIn
window.addEventListener('resize', function () {
	fadeIn();
});


//accent animations

const breathers = document.querySelectorAll('.breathe');

breathers.forEach(function (breather, index) {
	breather.animate(
		[
			//keyframes
			{ transform: 'scale(1)' },
			{ transform: 'scale(1.05)' },
			{ transform: 'scale(1)' },
		],
		{
			//timing
			delay: 600 * index,
			duration: 6000,
			iterations: Infinity,
		}
	);
});

const spinners = document.querySelectorAll('.rotate');

spinners.forEach(function (spinner, index) {
	spinner.animate(
		[
			//keyframes
			{ transform: 'rotate(0deg)' },
			{ transform: 'rotate(360deg)' },
		],
		{
			//timing
			delay: 300 * index,
			duration: 50000,
			iterations: Infinity,
		}
	);
});
