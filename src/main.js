import App from './App.svelte';
import '@fortawesome/fontawesome-free/js/all.js';

const MODULE_ID = 'trending-github-repos';

window[MODULE_ID] = {
	logLevel: 3
};


const app = new App({
	target: document.body
});

export default app;