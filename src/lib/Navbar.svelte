<script>
    import Sidebar from './Sidebar.svelte';
    let sidebar_show = false;
</script>
<nav>
	<ul class="NavLinks">
		<li>
			<a rel="external" href="/#hero">home</a>
		</li>
		<li>
			<a rel="external" href="/#about">about</a>
		</li>
		<li>
			<a rel="external" href="/#experience">experience</a>
		</li>
		<li>
			<a rel="external" href="/#projects">projects</a>
		</li>
		<li>
			<a rel="external" href="/#contact">contact</a>
		</li>
        <li>
			<a rel="external" href="/blog">blog</a>
		</li>
	</ul>
	<a rel="external" href="pdf/main.pdf" target="_blank" class="button">resume</a>
    <div on:click={() => sidebar_show = !sidebar_show} class="menu-btn">
        <div class="menu-btn_lines"></div>
    </div>
    <Sidebar bind:show={sidebar_show} />
</nav>

<style>
	nav {
		padding: 0rem 2rem;
		width: 100%;
		height: 100%;
		background: transparent;
		display: flex;
		justify-content: flex-end;
		align-items: center;

	}
	nav:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
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

    .menu-btn {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 3;
    }
    .menu-btn_lines,
    .menu-btn_lines::before,
    .menu-btn_lines::after{
        width: 1.5rem;
        height: 0.1rem;
        background-color: aquamarine;
        transform: all 0.5s ease-in-out;
    }
    .menu-btn_lines::before,
    .menu-btn_lines::after{
        content:'';
        position:absolute;
    }
    .menu-btn_lines::before{
        width: 1rem;
        transform:translateY(-.5rem)
    }
    .menu-btn_lines::after{
        width: 1.2rem;
        transform: translateY(.5rem)
    }

	@media (max-width: 650px) {
        .menu-btn {
            display: flex;
        }
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




