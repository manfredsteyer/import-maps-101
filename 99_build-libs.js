const esbuild = require("esbuild");
const path = require('path');

const fileName = path.basename(__filename);

(async () => {

  console.log(`running ${fileName} ...`)

  await esbuild.build({
    entryPoints: ["node_modules/date-fns/esm/index.js"],
    outfile: 'libs/date-fns.js',
    bundle: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    external: [/* ... other libs ... */],
    format: "esm",
    target: ["esnext"],
  });

  await esbuild.build({
    entryPoints: ["node_modules/date-fns/esm/index.js"],
    outfile: 'libs/other-date-fns.js',
    bundle: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    external: [/* ... other libs ... */],
    format: "esm",
    target: ["esnext"],
  });

  console.log('done!');

})();
