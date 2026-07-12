"use strict";

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

module.exports = function postcssConfig(ctx) {
  return {
  map: ctx.options.map,
  plugins: [
      postcssImport,
      autoprefixer,
      ...(ctx.env === "production" ? [cssnano({ preset: "default" })] : []),
  ],
  };
};
