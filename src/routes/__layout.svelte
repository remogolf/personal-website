<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	let backgroundBlur = false
</script>

<div class="appLayout">
	<Navbar bind:sidebar_show={backgroundBlur}/>
	<main class:blur={backgroundBlur}>
		<slot />
	</main>
</div>

<style>
	.appLayout {
		display: grid;
		grid-template-rows: 3rem 1fr;
		grid-template-areas: 
		'nav'
		'main';
		height: 100%;
		width: 100%;
	}
	main {
		grid-area: main;
		padding: 0rem 5rem;
		overflow-y: scroll;
	}
	.blur {
		filter: blur(10px);
	}
	@media (max-width: 650px) {
		main {
			padding: 0rem 1rem;
		}
	}
</style>
