import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: {
        file: "dist/app.js",
        format: "iife",
        sourcemap: true
    },
    external: ["preact"],
    plugins: [
        resolve(),
        buble({
            transforms: {
                classes: false
            },
            jsx: "h",
            objectAssign: "Object.assign"
        }),
        terser()
    ]
};
