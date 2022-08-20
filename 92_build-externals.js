const esbuild = require("esbuild");
const path = require('path');

const fileName = path.basename(__filename);

(async () => {

  console.log(`running ${fileName} ...`)

  await esbuild.build({
    entryPoints: ["js/is-bridging-day.mjs", "js/is-long-weekend.mjs"],
    outdir: "dist",
    bundle: true,
    sourcemap: false,
    minify: true,
    splitting: false,
    external: ['date-fns'],
    format: "esm",
    target: ["esnext"],
  });

  console.log('done!');

})();
