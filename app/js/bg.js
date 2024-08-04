const bgContainer = document.getElementById('bgContainer');
const sections = document.querySelectorAll('.section');
const images = [
	'../../img/backgrounds/pexels-destinyfinn-18103065.jpg',
	'../../img/backgrounds/pexels-destinyfinn-18103065.jpg',
	'../../img/backgrounds/pexels-1596031608-27402222.jpg',
];

// Create initial background elements
images.forEach((image, index) => {
	const bgElement = document.createElement('div');
	bgElement.className = 'bg-image';
	bgElement.style.backgroundImage = `url('${image}')`;
	bgElement.style.zIndex = -index - 1;
	bgContainer.appendChild(bgElement);
});

let currentIndex = 0;
const bgElements = document.querySelectorAll('.bg-image');

function changeBackground() {
	const scrollPosition = window.scrollY;
	const windowHeight = window.innerHeight;

	sections.forEach((section, index) => {
		const sectionTop = section.offsetTop;
		if (
			scrollPosition >= sectionTop - windowHeight / 2 &&
			currentIndex !== index
		) {
			bgElements[currentIndex].style.opacity = 0;
			bgElements[index].style.opacity = 1;
			currentIndex = index;
		}
	});
}

window.addEventListener('scroll', changeBackground);
changeBackground(); // Initial call to set the first background
bgElements[0].style.opacity = 1; // Show the first background
