<script>
	import Hero from '$lib/Home_Sections/Hero.svelte';
	import About from '$lib/Home_Sections/About.svelte';
    import Experience from '$lib/Home_Sections/Experience.svelte';
    import SocialLinks from '$lib/SocialLinks.svelte';
	import Contact from '$lib/Home_Sections/Contact.svelte';
	import Projects from '$lib/Home_Sections/Projects.svelte';
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
	<Projects />
</section>

<section id="contact">
	<Contact />
</section>

<style>
	section {
		display: flex;
        min-height: 100%;
        margin: auto;
		align-items: center;
		max-width: 800px;
	}
</style>
