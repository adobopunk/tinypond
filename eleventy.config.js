const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(sitemap, {
		sitemap: {
			hostname: 'https://tinypond.studio',
		},
	});
	eleventyConfig.addPassthroughCopy('assets');
	eleventyConfig.addPassthroughCopy('fonts');
	eleventyConfig.addPassthroughCopy('img');
	eleventyConfig.addPassthroughCopy('app');
	eleventyConfig.addPassthroughCopy('src/robots.txt');

	return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_templates',
		},
		data: {
			siteUrl: 'https://tinypond.studio',
		},
	};
};
