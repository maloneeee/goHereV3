<script>
  import { onMount } from "svelte";
  import { insights } from "./../../stores/content.js";
  import Hero from "./../../components/Hero.svelte";
  import TransitionWrapper from "./../../components/TransitionWrapper.svelte";
  import Section from "./../../components/Section.svelte";
  import Post from "./../../components/Post.svelte";
  import CTA from "./../../components/CTA.svelte";

  export let posts = [];
  const apiURL =
    "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
  let data = [];
  onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    posts = data.posts;
  });
</script>

<style>
    .post_holder{
        display:flex;
    }
</style>
<svelte:head>
  <title>{insights.title}</title>
</svelte:head>
<TransitionWrapper>
<Hero heading={insights.h1} headingSub={insights.h1Sub}/>

{#each insights.section as section}
  <Section {...section} />
{/each}
    <div class="post_holder">
{#each posts as postdata}
    {#if postdata.visibility == 'public'}
    <Post {postdata}/>
    {/if}
{/each}
    </div>
<CTA />
</TransitionWrapper>