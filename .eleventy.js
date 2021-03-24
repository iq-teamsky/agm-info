const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));

    // Copy the 'assets/' directory
    eleventyConfig.addPassthroughCopy("src/assets");

    // Cop sitemap.xml and robots.txt files
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy({ 'src/assets/img/favicons': '/' });

    // Returns a list of people ordered by filename
    eleventyConfig.addCollection('faq', collection => {
        return collection.getFilteredByGlob('./src/faq/*.md').sort((a, b) => {
            return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
        });
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
