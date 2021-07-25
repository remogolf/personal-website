<script context="module">
	const allPosts = import.meta.glob('./*.md');

	let article = [];
	for (let path in allPosts) {
		article.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

    export const load = async() => {
        const posts = await Promise.all(article)
        
        return{
            props:{
                posts,
            },
        };
    };

    export let posts
</script>

<h1>Articles</h1>
         