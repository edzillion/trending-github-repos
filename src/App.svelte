<script>	
	import Masonry from './Masonry.svelte';
	import Toast from './Toast.svelte';
	import {log, LogLevel} from './logging';
	import jQuery from "jquery";

	let toastVisible = false;
	let toastMessage = '';

	let filters = [];

	const toggleToast = (e) => {
		log(LogLevel.DEBUG, 'toggleToast');
		toastVisible = true;
		toastMessage = e.detail;
	}

	const removeFilters = () => {
		jQuery('.masonry-item').show();
		filters = [];
	}

	const filterLanguages = (e) => {
		log(LogLevel.DEBUG, 'amassLanguages', e.detail);
		filters = [...filters, e.detail];
		jQuery('.masonry-item').not('#lang-'+e.detail).hide();
		filters = [...new Set(filters)];
	}

	const trendingReposRequestURL = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc';

	const getTrendingData = async() => {
		let request = await fetch(trendingReposRequestURL);
		let response = await request.json();
		return response.items;
	}

	log(LogLevel.INFO, 'initialised');

</script>

<main>
	<Toast {toastVisible} {toastMessage}  />
	<h1>Trending Github Repos</h1>
	{#if filters.length > 0}
		<h3>Filters</h3>
		<div class="filter-box">
			{#each filters as filter}			
				<button>{filter}</button>			
			{/each}
		</div>
	{/if}
	<p>These repos are currently trending on Github.</p>
	{#await getTrendingData()}
		<span>fetching trending data...</span>
	{:then items} 
		<span >
			<Masonry {items} on:showToastEvent={toggleToast} on:repoLanguage={filterLanguages} />
		</span>
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
	.filter-box button {
			display: inline-block;
			background-color: #545257;
			border-radius: 5px;
			border: 4px double #cccccc;
			color: #eeeeee;
			text-align: center;
			font-size: 14px;
			padding: 10px;
			width: 60px;						
			margin: 5px;
	}
	/* .filter-box button::before {
		content: 'x';
		color: #fff;
		font-weight: 300;
		font-family: Arial, sans-serif;
	} */

</style>