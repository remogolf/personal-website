<script>
	import Typewriter from 'svelte-typewriter';
</script>

<span class="tags">&lt h1 &gt</span>
<h1>
	<span class="greeting">Hi, my name is</span>
	<br />
	Remo Füeg
</h1>
<span class="tags">&lt /h1 &gt</span>
<br />
<span class="tags">&lt p &gt</span>
<Typewriter cursor="white" interval={[50, 60, 80]}>
	<p>Mechanical Engineer | Enthusiast Coder</p>
</Typewriter>
<span class="tags">&lt /p &gt</span>
<br />
<span class="tags">&lt button &gt</span>
<a class="button" href="mailto:remogolf@gmail.com">Get In Touch</a>
<span class="tags">&lt /button &gt</span>
<style>
    .button {
        max-width: fit-content;
        margin: 0.5rem 0rem;
        margin-left: 1rem;
    }
	h1 {
		font-size: 2.5rem;
		padding-left: 1rem;
	}
	.greeting {
		font-weight: 100;
		font-size: 1rem;
		color: aquamarine;
	}
    p {
		color: #e0fbfc;
		padding-left: 1rem;
	}
</style>
