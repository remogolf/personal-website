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
    * {
        font-family: 'Roboto Mono', monospace;
    }
    .container {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    p, .button, .greeting {
        font-weight: 500;
        font-size: 2rem;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
		font-size: 5rem;
        font-weight: 500;
	}
	.button {
		max-width: fit-content;
        padding: 0.5rem;
	}

	.greeting {
		font-weight: 400;
		color: aquamarine;
	}
	p {
		color: #e0fbfc;
	}
    @media (max-width: 650px) {
        h1 {
            font-size: 3.5rem;
        }
        p,.button,.greeting {
            font-size: .8rem;
        }
	}
</style>
