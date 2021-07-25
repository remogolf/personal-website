<div class="container">
	<span class="tags">&lt h2 &gt</span>
	<h2>About Me</h2>
	<span class="tags">&lt /h2 &gt</span>

	<div class="grid-container">
		<div class="content">
			<span class="tags">&lt p &gt</span>
			<p>
				Hello, my name is Remo Füeg and I freshly graduated from University with a Bachelor of
				Science in Mechanical Engineering. During my time studying I've discovered, that I enjoy to
				Code. I taught myself the fundamentals of programming using python, java and matlab. I am
				now on a mission to further develop my coding skills, which I believe to be useful alongside
				my BSc in mechanical engineering, and also act as an creative outlet. Here are some of the
				technologies I have been working with:
			</p>
			<span class="tags">&lt /p &gt</span>
			<br />
			<span class="tags">&lt ul &gt</span>
			<ul>
				<li>NX CAD</li>
				<li>CATIA V5</li>
				<li>FUSION 360</li>
				<li>MATLAB-Simulink</li>
				<li>Python</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Javascript</li>
			</ul>
			<span class="tags">&lt /ul &gt</span>
		</div>
		<div class="profile-image-col">
			<br />
			<div class="image-container">
				<img src="img/profile.jpg" alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 0.6fr 0.4fr;
		gap: 3rem;
	}
	.image-container {
		position: relative;
		width: 100%;
		border-radius: 5px;
		background: aquamarine;
		opacity: 1;
		z-index: 1;
	}

	.image-container:after {
		content: ' ';
		background: transparent;
		border: 2px solid aquamarine;
		border-radius: 5px;
		top: 10px;
		left: 10px;
		bottom: -10px;
		right: -10px;
		position: absolute;
		z-index: -1;
		transition: 0.3s ease;
	}
	img {
		max-width: 100%;
		display: block;
		border-radius: 5px;
		opacity: 0.5;
		transition: 0.3s ease;
	}
	.image-container:hover > img {
		opacity: 1;
		transition: 0.3s ease;
	}
	.image-container:hover:after {
		top: 7px;
		left: 7px;
		bottom: -7px;
		right: -7px;
		transition: 0.3s ease;
	}
	p {
		color: #e0fbfc;
		padding-left: 1rem;
	}

	@media (max-width: 650px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
