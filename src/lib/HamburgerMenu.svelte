<script>
	export let open = false;
	function toggleSidebar() {
		open = !open;
	}
</script>

<div on:click={toggleSidebar} class="menu-btn">
	<div class="menu-btn_lines" />
</div>

<style>
	.menu-btn {
		width: 1.5rem;
		height: 1.5rem;
		position: relative;
		display: none;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 5;
	}
	.menu-btn_lines,
	.menu-btn_lines::before,
	.menu-btn_lines::after {
		width: 1.5rem;
		height: 0.1rem;
		background-color: aquamarine;
		transform: all 0.5s ease-in-out;
	}
	.menu-btn_lines::before,
	.menu-btn_lines::after {
		content: '';
		position: absolute;
	}
	.menu-btn_lines::before {
		width: 1rem;
		transform: translateY(-0.5rem);
	}
	.menu-btn_lines::after {
		width: 1.2rem;
		transform: translateY(0.5rem);
	}

	@media (max-width: 650px) {
		.menu-btn {
			display: flex;
		}
	}
</style>
