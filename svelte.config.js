import {mdsvex} from "mdsvex";
import adapter from '@sveltejs/adapter-netlify';
import mdsvexConfig from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter()
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
