<script context="module">
	const posts = import.meta.glob('./*.{md,svx}');

	let body = [];

	for (const path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<div class="container">
	<ul>
		{#each posts as { path, metadata }}
			<li>
				<h1>
					<a href={`/blog/${path.replace('.md', '').replace('.svx', '')}`}> {metadata.title}</a>
				</h1>
				<p>{metadata.date}</p>
                <p>{metadata.author}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
	}
	li {
		padding: 1rem 0rem;
	}
</style>
