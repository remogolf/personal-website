<div class="container">
	<h2>About Me</h2>
	<div class="grid-container">
		<div class="content">
			<p>
				Hello, my name is Remo Füeg and I freshly graduated from University with a Bachelor of
				Science in Mechanical Engineering. During my time studying I've discovered, that I enjoy to
				Code. I taught myself the fundamentals of programming using python, java and matlab. I am
				now on a mission to further develop my coding skills, which I believe to be useful alongside
				my BSc in mechanical engineering. Here are some of the technologies I have been working
				with:
			</p>
			<br />
			<ul>
				<li>Siemens NX</li>
				<li>CATIA V5</li>
				<li>FUSION 360</li>
				<li>MATLAB-Simulink</li>
				<li>Python</li>
			</ul>
			<br />
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>Javascript</li>
				<li>Svelte</li>
				<li>Django</li>
				<li>PostgrSQL</li>
			</ul>
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
	.profile-image-col {
		display: flex;
		justify-content: center;
	}
	.image-container {
		position: relative;
		width: 100%;
		height: fit-content;
		border-radius: 5px;
		background: var(--primary-highlight);
		opacity: 1;
		z-index: 1;
	}
	.image-container:hover > img {
		opacity: 1;
		transition: 0.3s ease;
	}
	img {
		max-width: 100%;
		display: block;
		border-radius: 5px;
		opacity: 0.5;
		transition: 0.3s ease;
	}
	.image-container:after {
		content: ' ';
		background: transparent;
		border: 2px solid var(--primary);
		border-radius: 5px;
		top: 15px;
		left: 15px;
		bottom: -15px;
		right: -15px;
		position: absolute;
		z-index: -1;
		transition: 0.3s ease;
	}
	.image-container:hover:after {
		top: 7px;
		left: 7px;
		bottom: -7px;
		right: -7px;
		transition: 0.3s ease;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		list-style-type: none;
		color: var(--text-light-secondary);
	}
	li::before {
		color: var(--primary);
		content: '⁙';
		padding-right: 0.5rem;
	}
	@media (max-width: 650px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
		.image-container {
			width: 75%;
		}
	}
</style>
