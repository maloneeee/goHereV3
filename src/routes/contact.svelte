<script>
  import Hero from "./../components/Hero.svelte";
  import { contact } from "./../stores/content.js";
  import Section from "./../components/Section.svelte";
  import New from "./../components/forms/New.svelte";
  import TransitionWrapper from "./../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
  import { loaded } from "./../stores/var.js";
  onMount(() => {
    loaded.set(true);
  });
</script>

<style>
  .coont {
    margin-top: -75px;
  }
</style>

<svelte:head>
  <title>{contact.title}</title>
  <meta name="description" content={contact.metaDesc} />
</svelte:head>
<TransitionWrapper>

  <div class="coont">
    <!-- <Hero heading='{contact.h1}' headingSub={contact.h1Sub}/> -->
    {#each contact.section as section}
      <Section {...section} />
    {/each}
    <New />
  </div>
</TransitionWrapper>
