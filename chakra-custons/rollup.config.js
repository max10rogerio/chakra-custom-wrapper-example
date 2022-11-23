const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const { default: dts } = require("rollup-plugin-dts");
const pkg = require("./package.json");

const options = [
  {
    //entry point
    input: pkg.source,

    //output directory
    output: [
      {
        file: "./dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        exports: "auto",
      },
      {
        file: "./dist/esm/index.js",
        format: "esm",
        sourcemap: true,
        exports: "auto",
      },
    ],
    external: Object.keys(pkg.peerDependencies),

    //plugins
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "./dist/cjs/",
      }),
    ],
  },
  // create index.d.ts file
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

module.exports = options;
