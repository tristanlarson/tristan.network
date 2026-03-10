const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

	// RSS
	eleventyConfig.addPlugin(pluginRss);

	// limit Filter
	eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

	// Date filter
	eleventyConfig.addFilter("readableDate", (date) => {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	});

	// Pass static assets straight through to output
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/images");

	// Collections
	eleventyConfig.addCollection("posts", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/**/*.md")
			.sort((a, b) => b.date - a.date);
	});

	eleventyConfig.addCollection("serverUpdates", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/server-updates/*.md")
			.sort((a, b) => b.date - a.date);
	});

	eleventyConfig.addCollection("articles", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/articles/*.md")
			.sort((a, b) => b.date - a.date);
	});

	eleventyConfig.addCollection("notes", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/notes/*.md")
			.sort((a, b) => b.date - a.date);
	});

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			data: "_data"
		}
	};

};
