<script>
	import Typewriter from 'svelte-typewriter';
</script>

<div class="container">
    <span class="greeting">Hi, my name is</span>
	<h1>
		Remo Füeg
	</h1>
	<br />
	<Typewriter cursor="white" interval={[50, 60, 80]}>
		<p>Mechanical Engineer | Enthusiast Coder</p>
	</Typewriter>
	<br />
	<a class="button" href="mailto:remogolf@gmail.com">Get In Touch</a>
</div>

<style>
    .container {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .button, .greeting {
        font-weight: 500;
        font-size: 1rem;
    }

	.button {
		max-width: fit-content;
        max-width: intrinsic;           /* Safari/WebKit uses a non-standard name */
        max-width: -moz-max-content;    /* Firefox/Gecko */
        max-width: -webkit-max-content; /* Chrome */
        padding: 0.5rem;
	}

	.greeting {
		font-weight: 400;
		color: var(--primary);
	}

</style>
