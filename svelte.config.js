import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svx', '.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig), sveltePreprocess()]

};

mdsvex({
	// tell svelte to handle mdsvex files
	extensions: ['.md'],
	
});


export default config;
