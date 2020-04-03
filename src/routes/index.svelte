<script>
  import { home } from "./../stores/content.js";
  import { fade } from "svelte/transition";
  import Section from "./../components/Section.svelte";
  import Hero from "./../components/Hero.svelte";
  import Nav from '../components/Nav.svelte';
  import Index from "./../components/space.js";
  import { onMount, onDestroy } from "svelte";
  export let phase = 0;
  let topSec, midSec, bottomSec;
  onMount(() => {
    var createScene = new Promise((resolve, reject) => {
      let create3d = new Index();
      resolve(create3d);
    });
    createScene;
    window.addEventListener("scroll", fadeScroll);
  });
  onDestroy(()=>{
    phase = 0;
    console.log('check');
  });
  function fadeScroll() {
    //Get percent scrolled
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    if (y < 3) {
      phase = 0;
    } else if (y > 40 && y < 60) {
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
  function removeEl() {
    phase = 0;
  }
</script>

<style>
  canvas {
    position: fixed;
    z-index: 1;
    top: 0;
  }
  .buff {
    min-height: 100px;
  }

  section {
    min-height: 700px;
    text-align: center;
    position: relative;
    z-index: 5;
  }

  .buff_section {
    height: 125vh;
  }
  .fixed_section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
  }
  .bottom {
    margin-bottom: -80px;
  }
  .bottom .section_inner {
    margin-bottom: -20px;
  }

  .clear {
    min-height: 100vh;
    color: white;
  }

  .clear a {
    margin-top: 0;
    margin-bottom: -65px;
  }
  .left {
    align-items: flex-start;
    padding-right: 50vw;
    max-width: 90%;
  }
  .left h2 {
    text-align: left;
    margin-left: 0;
  }
  .left p {
    text-align: left;
  }

  .frame_track{
    height:100%;
  }
  .frame{
    position:sticky;
    z-index:2;
    top:0;
    /* height:100vh; */
    width:100vw;
  }
</style>

<svelte:head>
  <title>{home.title}</title>
</svelte:head>
<nav style="position:fixed; top:0;">
	<a class="logo_link" href="."><div class="logo">go<span>Here</span><img src="logo-192.png" alt="goHere"/></div></a>
	<ul>
		<li><a on:click={removeEl} href='who'>who</a></li>
		<li><a on:click={removeEl} href='what'>what</a></li>
		<li><a on:click={removeEl} href='work'>work</a></li>
		<li><a on:click={removeEl} href='contact'>contact</a></li>
		<li><a rel=prefetch on:click={removeEl} href='insights'>insights</a></li>
	</ul>
</nav>
    <canvas id="canvas" />
<div class="frame_track">
  
  <div class="frame">
    {#each home.sections as section, i}
      {#if i % 2 == 1}
        {#if phase == i}
          <section
            class="section fixed_section"
            id="sec-{i}"
            transition:fade={{ duration: 300 }}
            class:border_color={!section.clear}
            class:clear={section.clear}
            class:invert={section.invert}
            class:bottom={section.bottom}>
            <div
              class:clear_inner={section.clear}
              class:section_inner={!section.clear}
              class:invert={section.invert}>
              <div
                class="container"
                class:inner={!section.clear}
                class:left={section.left}>
                {#if section.sub != ''}
                  <h5>
                    <span>{section.sub}</span>
                  </h5>
                {/if}
                <h2
                  class:colorDynamic={section.invert}
                  data-glow={section.title}>
                  {@html section.title}
                </h2>
                <p>
                  {@html section.p}
                </p>
                {#if section.button != ''}
                  <a
                    class="button"
                    on:click={removeEl}
                    href={section.buttonHref}>
                    {section.button}
                  </a>
                {/if}
              </div>
            </div>
          </section>
        {/if}
      {/if}
    {/each}
  </div>
  <div class="buff" />
  <Hero heading={home.h1} headingSub={home.h1Sub} />
  {#each home.sections as section, i}
    {#if i % 2 != 1}
      <section
        class="section"
        id="sec-{i}"
        transition:fade={{ duration: 300 }}
        class:border_color={!section.clear}
        class:clear={section.clear}
        class:invert={section.invert}
        class:bottom={section.bottom}>
        <div
          class:clear_inner={section.clear}
          class:section_inner={!section.clear}
          class:invert={section.invert}>
          <div
            class="container"
            class:inner={!section.clear}
            class:left={section.left}>
            {#if section.sub != ''}
              <h5>
                <span>{section.sub}</span>
              </h5>
            {/if}
            <h2 class:colorDynamic={section.invert} data-glow={section.title}>
              {@html section.title}
            </h2>
            <p>
              {@html section.p}
            </p>
            {#if section.button != ''}
              <a class="button" on:click={removeEl} href={section.buttonHref}>
                {section.button}
              </a>
            {/if}
          </div>
        </div>
      </section>
      <div class="buff buff_section" />
    {/if}
  {/each}
</div>
