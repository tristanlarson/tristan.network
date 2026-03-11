const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

	// RSS
	eleventyConfig.addPlugin(pluginRss);

	// limit Filter
	eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

	// Date filter
	eleventyConfig.addFilter("readableDate", (date) => {
		return new Date(date).toISOString().replace('T', ' ').split('.')[0];
	});

	// CSS Passthrough
	eleventyConfig.addPassthroughCopy("src/assets/css");

	// Pass static assets straight through to output
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/_redirects");

	// Collections
	eleventyConfig.addCollection("userServices", function(collectionApi) {
    		return collectionApi.getFilteredByGlob("src/services/user/*.md")
       	 		.sort((a, b) => a.data.order - b.data.order);
	});

	eleventyConfig.addCollection("technicalServices", function(collectionApi) {
    		return collectionApi.getFilteredByGlob("src/services/technical/*.md")
       			.sort((a, b) => a.data.order - b.data.order);
	});

	eleventyConfig.addCollection("gameServers", function(collectionApi) {
    		return collectionApi.getFilteredByGlob("src/services/game/*.md")
        		.sort((a, b) => a.data.order - b.data.order);
	});

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

	eleventyConfig.addCollection("bookmarks", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/bookmarks/*.md")
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
