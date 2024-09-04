// Select all elements with the class 'parallax-image'
var images = document.querySelectorAll('.parallax-image');

// Loop through each image and apply the parallax effect
images.forEach(function (image) {
	new simpleParallax(image, {
		delay: 1.5,
		scale: 1.25,
		orientation: 'down',
	});
});
