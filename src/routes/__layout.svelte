<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="appLayout">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
	.appLayout {
		display: grid;
		grid-template-rows: 3rem 1fr;
		width: 100%;
		height: 100%;
		background: #14213d;
		color: white;
	}
	main {
		padding: 0rem 5rem;
		overflow-y: scroll;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #14213d;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(136, 136, 136, 0.459);
		border-radius: 2px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
