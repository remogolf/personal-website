<script>
	import Hero from '$lib/Home_Sections/Hero.svelte';
    import About from '$lib/Home_Sections/About.svelte';
</script>

<section id="hero">
	<Hero />
</section>

<section id="about">
    <About/>
</section>

<section id="experience">
	<h2>Work Experience</h2>
</section>

<section id="projects">
	<h2>projects</h2>
</section>

<section id="contact">
	<h2>contact</h2>
</section>

<style>
	section {
		display: grid;
        align-items: center;
		min-height: 100vh;
        min-width: 0;
        max-width: 800px;
	}
</style>
