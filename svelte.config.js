import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)]
};
mdsvex({
	// tell svelte to handle mdsvex files
	extensions: ['.md'],
	preprocess: mdsvex()
});

export default config;
