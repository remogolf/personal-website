<script>
    import HamburgerMenu from "./HamburgerMenu.svelte"
    import Menu from './Menu.svelte';
    export let sidebar_show = false;
</script>
<nav>
	<ul class="NavLinks">
		<li><a rel="external" href="/#hero">home</a></li>
		<li><a rel="external" href="/#about">about</a></li>
		<li><a rel="external" href="/#experience">experience</a></li>
		<li><a rel="external" href="/#projects">projects</a></li>
		<li><a rel="external" href="/#contact">contact</a></li>
        <li><a rel="external" href="/blog">blog</a></li>
	</ul>
	<a rel="external" href="pdf/main.pdf" target="_blank" class="button">resume</a>
    <HamburgerMenu bind:open={sidebar_show}/>
    <Menu bind:show={sidebar_show} />
</nav>

<style>
	nav {
        grid-area: nav;
		padding: 0 1rem;
        z-index: 2;
        transition: 0.3s ease-in;
        display: flex;
		flex-direction: row;
        align-items: center;
		justify-content: flex-end;
		list-style: none;
        background: transparent;
	}
	nav:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        transition: 0.3s ease-in;
	}

	.NavLinks {
        display: flex;
		flex-direction: row;
		justify-content: flex-end;
		list-style: none;
	}
	li {
		padding: 0.5rem 0.5rem;
	}
    .button {
        padding: 0.25rem;
        margin-left: 0.5rem;
    }



	@media (max-width: 650px) {
		.NavLinks {
			display: none;
		}
        nav {
            display: flex;
            justify-content: flex-end;
            padding: 0rem 0.5rem;
        }
        .button {
            display: none;
        }
	}
</style>




