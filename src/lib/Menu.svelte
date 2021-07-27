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
			<li><a on:click={toggleMenu} rel="external" href="pdf/main.pdf" target="_blank" class="button">resume</a></li>
		</ul>
	</nav>
{/if}

<style>
	.button {
		padding: 0.5rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;
	}
	li {
		padding: 1rem 0rem;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 3rem 1rem 0.6rem;
		border-bottom: 1px solid var(--primary-highlight);
		background: transparent;
		z-index: 1;
	}
</style>
