<script>
  import Hero from "./../components/Hero.svelte";
  import { contact } from "./../stores/content.js";
  import Section from "./../components/Section.svelte";
  import New from "./../components/forms/New.svelte";
  import TransitionWrapper from "./../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>{contact.title}</title>
</svelte:head>
<TransitionWrapper>
  <!-- <Hero heading='{contact.h1}' headingSub={contact.h1Sub}/> -->
  {#each contact.section as section}
    <Section {...section} />
  {/each}
  <New />
</TransitionWrapper>
