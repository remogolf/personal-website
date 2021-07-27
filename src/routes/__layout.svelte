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
		height: 100%;
		width: 100%;
		overflow-y: scroll;
	}
	main {
		display: grid;
		justify-content: center;
		padding: 0rem 5rem;
	}
	.blur {
		filter: blur(10px);
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
