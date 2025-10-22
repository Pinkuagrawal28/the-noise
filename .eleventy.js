const CleanCSS = require("clean-css");
const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection("subject", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      // Only include files directly under src/subjects/ that have the 'subject' tag
      // and exclude files within src/subjects/information-theory/ subdirectories
      const isTopLevelSubject = item.inputPath.match(/^\.\/src\/subjects\/[^/]+\.md$/) || item.inputPath.match(/^\.\/src\/subjects\/[^/]+\/index\.md$/);
      return isTopLevelSubject && item.data.tags && item.data.tags.includes("subject");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
