<script>
  import { home } from "./../stores/content.js";
  import { fade } from "svelte/transition";
  import Section from "./../components/Section.svelte";
  import HeroHome from "./../components/HeroHome.svelte";
  import Nav from '../components/Nav.svelte';
  import TransitionWrapper from '../components/TransitionWrapper.svelte';
  import Index from "./../components/space.js";
  import { onMount, onDestroy } from "svelte";
  export let phase = 0;
  let displayMenu = false;
  
  function toggleMenu() {
    displayMenu = !displayMenu;
  }
  function closeMenu() {
    displayMenu = false;
  }
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
    } else if (y > 40 && y < 52) {
      phase = 1;
    } else if (y > 97) {
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
    displayMenu = false;
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

  

  .buff_section {
    height: 125vh;
  }
  .fixed_section {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom:0px;
    z-index: 4;
    padding-top:120px;
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
    margin-bottom: -10px;
  }
  .container.left {
    align-items: flex-start;
   min-width:800px;
    max-width: 65%;
  }

  .left h2 {
    text-align: left;
    margin-left: 0;
  }
  .left p {
    text-align: left;
    font-size:3vw;
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
  .clear_inner.left{
    justify-content:flex-start;
    padding-left:10vw;
  }

  @media (max-width:1068px) {
            .container.left{
              padding-right:10vw;
              min-width:0;
              max-width:90%;
              margin-left:0;
            }
            .clear_inner.left{
    justify-content:center;
    padding-left:0;
  }
        }

  @keyframes rotate{
    0%{
        transform: rotate(0deg);
        }
    100%{
        transform: rotate(359deg);
        }
}


</style>

<svelte:head>
  <title>{home.title}</title>
</svelte:head>
<nav style="position:fixed; top:0;">
	<a class="logo_link" href="." on:click={closeMenu}><div class="logo">go<span>Here</span><img src="logo-192.png" alt="goHere"/></div></a>
	<ul class:nav-active={displayMenu}>
		<li class:act={displayMenu}><a on:click={removeEl} href='who'>who</a></li>
		<li class:act={displayMenu}><a on:click={removeEl} href='what'>what</a></li>
		<li class:act={displayMenu}><a on:click={removeEl} href='work'>work</a></li>
		<li class:act={displayMenu}><a on:click={removeEl} href='contact'>contact</a></li>
		<li class:act={displayMenu}><a rel=prefetch on:click={removeEl} href='insights'>insights</a></li>
	</ul>
  <div class="burger" class:toggle={displayMenu} on:click={toggleMenu}>
      <div class="line1" />
      <div class="line2" />
      <div class="line3" />
    </div>
</nav>
    <canvas id="canvas" />
<TransitionWrapper>
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
              class:invert={section.invert}
              class:left={section.left}>
              
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
  <HeroHome heading={home.h1} headingSub={home.h1Sub} />
  {#each home.sections as section, i}
    {#if i % 2 != 1}
      <section
        class="section"
        id="sec-{i}"
        transition:fade={{ duration: 300 }}
        class:border_color={!section.clear}
        class:clear={section.clear}
        class:invert={section.invert}
        class:bottom={section.bottom}
        class:left={section.left}>
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
</TransitionWrapper>
