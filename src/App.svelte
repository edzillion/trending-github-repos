<script>	
	import Masonry from './Masonry.svelte'
	let name = 'Ed';

	const trendingReposRequestURL = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc';

	const getTrendingData = async() => {
		let request = await fetch(trendingReposRequestURL);
		let response = await request.json();
		console.log(response);
		return response.items;
	}

	let items = getTrendingData();

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#await getTrendingData()}
		<span>fetching treding data...</span>
	{:then items}
		<Masonry {items} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}    
	
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