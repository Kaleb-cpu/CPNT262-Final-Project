import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
svelte({
	// tell svelte to handle mdsvex files
	extensions: ['.svelte', '.svx'],
	preprocess: mdsvex()
});
