<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';

	let show=false;
	console.log(show);
</script>

<div class="appLayout">
	<Navbar bing:sidebar_show={show}/>
	<main class:backgroundBlur={show}>
		<slot />
	</main>
</div>

<style>
	.appLayout {
		height: 100%;
		width: 100%;
	}
	main {
		display: grid;
		justify-content: center;
		padding: 0rem 5rem;
		overflow-y: scroll;
		
	}
	.backgroundBlur {
		filter: blur(15px);
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
