import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: cloudflare({
			// default options are shown
			pages: '.svelte-kit/cloudflare/pages',
			assets: '.svelte-kit/cloudflare/assets',
			fallback: null
		  }),
    }
};

export default config;