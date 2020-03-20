<script>
	import { onMount } from "svelte";
    export let posts = [];
    const apiURL = "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
    let data = [];
    onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
        posts = data.posts;
        console.log('articles: ',posts);
    });
</script>

{#each posts as post}
    <h1>
        <a href="/insights/{post.slug}">
            {post.title}
        </a>
    </h1>
{/each}