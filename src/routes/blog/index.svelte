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
                <p>{metadata.description}</p>
                <ul class="postDetails">
                    <li class="postDetail">{metadata.project}</li>
                    <li class="postDetail">{metadata.date}</li>
                    <li class="postDetail">{metadata.author}</li>
                </ul>
			</li>
		{/each}
	</ul>
</div>

<style>
    h1 {
        font-size: 2rem;
    }
    a {
        color: var(--text-light);
    }
    .postDetails {
        display: flex;
        list-style-type: none;
        color: var(--text-light-secondary);
    }
    .postDetail{
        padding-right: 1rem;
    }
	ul {
		list-style-type: none;
	}
	li {
		padding: 1rem 0rem;
	}
</style>
