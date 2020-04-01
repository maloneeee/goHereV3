<script>
  import {home} from './../stores/content.js'
  import Section from './../components/Section.svelte'
  import Hero from './../components/Hero.svelte'
  import Index from "./../components/space.js";
  import { onMount } from "svelte";

  onMount(()=>{
    var createScene = new Promise((resolve, reject) => {
      let create3d = new Index();
      resolve(create3d);
    });
    createScene;
  })
</script>
<style>
  canvas {
    position: fixed;
    z-index: 1;
    top: 0;
  }
  .buff{
    min-height:100px;
  }
  
  section {
    min-height: 700px;
    text-align:center;
  }
  .bottom{
    margin-bottom:-80px;
  }
  .bottom .section_inner{
    margin-bottom:-20px;
  }

  .clear{
    min-height:100vh;
    color:white;
  }

  .clear a{
    margin-top:0;
    margin-bottom:-65px;
  }
  .left{
    align-items:flex-start;
    padding-right:50vw;
    max-width:90%;
  }
  .left h2{
    text-align:left;
    margin-left:0;
  }
  .left p{
    text-align:left;
  }

</style>
<svelte:head>
  <title>{home.title}</title>
</svelte:head>
  <canvas id="canvas" />
  <div class="buff"></div>
<Hero heading={home.h1} />
{#each home.sections as section}
<div class="buff"></div>
<section class="section" class:border_color={!section.clear} class:clear={section.clear} class:invert={section.invert} class:bottom={section.bottom} >
  <div  class:clear_inner={section.clear} class:section_inner={!section.clear} class:invert={section.invert}>
  <div class="container" class:inner={!section.clear} class:left={section.left}>
    {#if section.sub != ''}
      <h5> <span>{section.sub}</span></h5>
    {/if}
    <h2 class:colorDynamic={section.invert} data-glow="{section.title}">{@html section.title}</h2>
    <p>
      {@html section.p}
    </p>
    {#if section.button != ''}
    <a class="button" href={section.buttonHref}>{section.button}</a>
    {/if}
  </div>
  </div>
</section>
{/each}

