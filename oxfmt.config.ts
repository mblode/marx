import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // css/ is lightningcss output built from src/. Formatting it would expand the
  // minified bundle that CDN consumers load.
  ignorePatterns: ["**/*.md", "**/*.mdx", "css/**"],
});
