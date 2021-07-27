<script>
	import { slide } from 'svelte/transition';
	export let show = false;
	function toggleMenu() {
		show = !show;
	}
</script>

{#if show}
	<nav transition:slide>
		<ul>
			<li><a on:click={toggleMenu} rel="external" href="/#home">home</a></li>
			<li><a on:click={toggleMenu} rel="external" href="/#about">about</a></li>
			<li><a on:click={toggleMenu} rel="external" href="/#experience">experience</a></li>
			<li><a on:click={toggleMenu} rel="external" href="/#projects">projects</a></li>
			<li><a on:click={toggleMenu} rel="external" href="/blog">blog</a></li>
			<li><a on:click={toggleMenu} rel="external" href="/#contact">contact</a></li>
			<li>
				<a on:click={toggleMenu} rel="external" href="pdf/main.pdf" target="_blank" class="button"
					>resume</a
				>
			</li>
		</ul>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		border-bottom: 1px solid var(--primary-highlight);
		background: transparent;
		display: grid;
		place-items: center;
		z-index: 1;
	}
	.button {
		padding: 0.5rem;
	}
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		text-align: center;
	}
	li {
		width:100%;
		padding: 1rem 0rem;
	}
</style>
