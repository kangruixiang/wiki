const plugin = require("tailwindcss/plugin");
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    linkify: true,
  };
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
  });

  const md = markdownIt(markdownItOptions)
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-anchor"))
    .use(function (md) {
      // Recognize Mediawiki links ([[text]])
      md.linkify.add("[[", {
        validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
        normalize: (match) => {
          const parts = match.raw.slice(2, -2).split("|");
          parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
          match.text = (parts[1] || parts[0]).trim();
          match.url = `/wiki/notes/${parts[0].trim()}/`;
          // console.log(match.url);
        },
      });
    });

  eleventyConfig.addFilter("markdownify", (string) => {
    return md.render(string);
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setUseGitIgnore(false);

  return {
    pathPrefix: "/wiki/",
    dir: {
      input: "./",
      output: "docs",
      layouts: "layouts",
      includes: "includes",
      data: "_data",
    },
    passthroughFileCopy: true,
  };
};
