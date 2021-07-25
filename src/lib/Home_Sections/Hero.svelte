<script>
	import Typewriter from 'svelte-typewriter';
</script>

<div class="container">
    <span class="tags">&lt span &gt</span>
    <span class="greeting">Hi, my name is</span>
    <span class="tags">&lt /span &gt</span>
    <br>
	<span class="tags">&lt h1 &gt</span>
    
    <br />
	<h1>

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
    <br>
	<a class="button" href="mailto:remogolf@gmail.com">Get In Touch</a>
    <br>
	<span class="tags">&lt /button &gt</span>
</div>

<style>
    .container {
        justify-content: flex-start;
    }
    p, .button, .greeting {
        font-size: 2rem;
    }
    h1 {
		font-size: 5rem;
		padding-left: 1rem;
        font-weight: 900;
	}
	.button {
		max-width: fit-content;
        padding: 0.5rem;
        margin-top: 1rem;
		margin: 1rem;
	}

	.greeting {
		font-weight: 100;
		color: aquamarine;
	}
	p {
		color: #e0fbfc;
		padding-left: 1rem;
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
