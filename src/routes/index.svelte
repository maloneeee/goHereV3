<script>
  import {home} from './../stores/content.js'
  import { fade } from "svelte/transition";
  import Section from './../components/Section.svelte'
  import Hero from './../components/Hero.svelte'
  import Index from "./../components/space.js";
  import { onMount } from "svelte";
let phase = 0;

  let topSec, midSec, bottomSec;
  onMount(()=>{
    var createScene = new Promise((resolve, reject) => {
      let create3d = new Index();
      resolve(create3d);
    });
    createScene;
    window.addEventListener("scroll", fadeScroll);
    // topSec = document.getElementById("sec-1");
    // midSec = document.getElementById("sec-2);
    // bottomSec = document.getElementById("sec-3");
  })
  function fadeScroll() {
    //Get percent scrolled
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100

    if (y < 3) {
      phase = 0;
    } else if (y > 48 && y < 67) {
      phase = 1;
    } else if (y > 95) {
      phase = 3;
    } else {
      phase = 0;
    }
  }
  function lerp(min, max, value) {
    return (max - min) * value + min;
  }

  function removeEl(){
    phase = 0;
  }
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
    position:relative;
    z-index:5;
  }

  .buff_section{
    height:110vh;
  }
  .fixed_section{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:4;
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
{#each home.sections as section, i}
{#if i%2 != 1}
<section class="section" id="sec-{i}" transition:fade={{ duration: 300 }} class:border_color={!section.clear} class:clear={section.clear} class:invert={section.invert} class:bottom={section.bottom} >
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
    <a class="button" on:click={removeEl} href={section.buttonHref}>{section.button}</a>
    {/if}
  </div>
  </div>
</section>
<div class="buff buff_section"></div>
{/if}
{#if i%2 == 1}
  {#if phase == i}
<section class="section fixed_section" id="sec-{i}" transition:fade={{ duration: 300 }} class:border_color={!section.clear} class:clear={section.clear} class:invert={section.invert} class:bottom={section.bottom} >
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
    <a class="button" on:click={removeEl} href={section.buttonHref}>{section.button}</a>
    {/if}
  </div>
  </div>
</section>
{/if}
{/if}
{/each}

