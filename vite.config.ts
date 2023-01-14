import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		host: 'localhost',
		port: 4000,
		proxy: {
			'http://localhost:4000': 'https://twitter-follow-manager.netlify.app'
		}
	},
	define: {
		global: {}
	}
};

export default config;
