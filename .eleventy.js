module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/posts/images");
    eleventyConfig.addPassthroughCopy("./src/CNAME");
    
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
