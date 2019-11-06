const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));

    // Copy the 'assets/' directory
    eleventyConfig.addPassthroughCopy("src/assets");

    // Cop sitemap.xml and robots.txt files
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
