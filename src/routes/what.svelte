<script>
  import Section from "./../components/Section.svelte";
  import { what } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import Main from "./../components/services/Main.svelte";
  import CTA from "./../components/CTA.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  let y;

  import { onMount } from "svelte";
  import { loaded } from "./../stores/var.js";
  onMount(() => {
    loaded.set(true);
  });

  function detectPosition() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
  }
</script>

<svelte:head>
  <title>{what.title}</title>
  <meta name="description" content={what.metaDesc} />
</svelte:head>
<!-- <svelte:window bind:scrollY={y}/> -->
<TransitionWrapper>
  <Hero heading={what.h1} headingSub={what.h1Sub} />
  {#each what.section as section}
    <Section {...section} />
  {/each}
  <Main />
  <CTA extra={what.cta} />
</TransitionWrapper>
