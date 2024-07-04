import cloudflare from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: cloudflare(),
		target: '#svelte' // Zorg ervoor dat dit overeenkomt met je index.html
	  }
	};

export default config;
