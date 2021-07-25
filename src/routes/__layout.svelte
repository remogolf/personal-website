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
		height: 100%;
		width: 100%;
	}
	main {
		display: grid;
		justify-content: center;
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

	@media (max-width: 650px) {
		main {
			padding: 0rem 1rem;
		}
	}
</style>
