<script>
  import clients from "./../stores/clients.js";
  import Section from "./../components/Section.svelte";
  import { work } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import CTA from "./../components/CTA.svelte";
  import Portfolio from "./../components/Portfolio.svelte";
  let active = 0;
  $: console.log(active);

  function clientClicked(event){
    console.log(event.target.parentElement);
  }
</script>

<style>
  .client_container{
    display:flex;
    flex-wrap:wrap;
    padding: 0px 4rem;
        justify-content:center;
  }

  .client{
    width:50%;
  }
</style>

<svelte:head>
  <title>{work.title}</title>
</svelte:head>
<Hero heading={work.h1} />

{#each work.section as section}
  <Section {...section} />
{/each}
<section class="section">
  <div class="client_container">
    {#each clients as client, i}
      <div class="client" on:click={clientClicked}>
      <Portfolio {...client} />
      </div>
    {/each}
  </div>
</section>

<CTA />
