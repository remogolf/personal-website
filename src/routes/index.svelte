<script>
	import Hero from '$lib/Home_Sections/Hero.svelte';
	import About from '$lib/Home_Sections/About.svelte';
    import Experience from '$lib/Home_Sections/Experience.svelte'
    import SocialLinks from '$lib/SocialLinks.svelte';

</script>

<SocialLinks/>

<section id="hero">
	<Hero />
</section>

<section id="about">
	<About />
</section>

<section id="experience">
	<Experience />
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
        padding-top: 3rem;
	}
</style>
