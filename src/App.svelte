<script>	
	import Masonry from './Masonry.svelte';
	import Toast from './Toast.svelte';
	import {log, LogLevel} from './logging';
	let name = 'Ed';
	let toastVisible = false;
	let toastMessage = '';

	const toggleToast = (e) => {
		log(LogLevel.DEBUG, 'toggleToast');
		toastVisible = true;
		toastMessage = e.detail;
	}

	// const trendingReposRequestURL = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc';

	// const getTrendingData = async() => {
	// 	let request = await fetch(trendingReposRequestURL);
	// 	let response = await request.json();
	// 	console.log(response);
	// 	return response.items;
	// }

	import {data} from './data';
	let items = data.items;

</script>

<main>
	<Toast {toastVisible} {toastMessage}  />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<!-- {#await getTrendingData()}
		<span>fetching treding data...</span>
	{:then items} -->
		<Masonry {items} on:showToastEvent={toggleToast}/>
	<!-- {:catch error}
		<p style="color: red">{error.message}</p>
	{/await}     -->
	
</main>


<link rel="stylesheet" type="text/css" href="gh-buttons.css"/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>