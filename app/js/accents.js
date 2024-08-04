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
