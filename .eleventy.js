module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
