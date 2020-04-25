<script>
  import Section from "./../components/Section.svelte";
  import { what } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import Main from "./../components/services/Main.svelte";
  import CTA from "./../components/CTA.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  let y;
    import { onMount, onDestroy } from "svelte";
  onMount(() => {
    // window.addEventListener("scroll", detectPosition);
  });


  function detectPosition() {

    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    console.log(y);

  }
</script>

<svelte:head>
  <title>{what.title}</title>
</svelte:head>
<!-- <svelte:window bind:scrollY={y}/> -->
<TransitionWrapper>
  <Hero heading={what.h1} headingSub={what.h1Sub} />
  {#each what.section as section}
    <Section {...section} />
  {/each}
    <Main />
  <CTA />
</TransitionWrapper>
