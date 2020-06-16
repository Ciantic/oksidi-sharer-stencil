import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "oksidi-sharer",
    taskQueue: "async",
    outputTargets: [
        {
            type: "dist-custom-elements-bundle",
        },
        {
            type: "dist",
            esmLoaderPath: "../loader",
        },
        // {
        //   type: 'docs-readme'
        // },
        {
            type: "www",
            serviceWorker: null, // disable service workers
        },
    ],

    buildEs5: false,
    allowInlineScripts: true,
    extras: {
        cssVarsShim: false,
        dynamicImportShim: false,
        safari10: false,
        scriptDataOpts: false,
        shadowDomShim: false,
    },
    plugins: [sass()],
};
