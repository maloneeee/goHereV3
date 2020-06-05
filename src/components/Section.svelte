<script>
  export let title;
  export let sub;
  export let p;
  export let button;
  export let buttonHref;
  export let invert;
  export let bottom;
  export let clear;
  export let left;
  export let color1;
  export let color2;
  export let xtra;
  import CallButton from "./CallButton.svelte";

  import { showingCTA } from "./../stores/var.js";

  function displayCTA() {
    showingCTA.set(true);
  }
</script>

<style>
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
  .btt {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.35) 0%,
        rgba(135, 135, 135, 0) 46.87%,
        rgba(0, 0, 0, 0.26) 100%
      ),
      linear-gradient(106.98deg, #2bd9ff, #bf37a9);
  }
  .btt:hover {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.26) 100%,
        rgba(135, 135, 135, 0) 46.87%,
        rgba(255, 255, 255, 0.35) 0%
      ),
      linear-gradient(106.98deg, #2bd9ff, #bf37a9);
  }
</style>

<section
  class="section"
  class:border_color={!clear}
  class:clear
  class:invert
  class:bottom>
  <div class:clear_inner={clear} class:section_inner={!clear} class:invert>
    <div class="container" class:inner={!clear} class:left>
      {#if sub != ''}
        <h5>
          <span>{sub}</span>
        </h5>
      {/if}
      <h2 class:colorDynamic={invert}>
        {#if xtra != null}
          {@html xtra.head}
        {:else}
          {@html title}
        {/if}
      </h2>
      <p>
        {@html p}
      </p>
      {#if button != ''}
        {#if button == 'phone'}
          <CallButton />
        {:else if buttonHref == 'cta'}
          <button
            class="button colorRotate"
            on:click={displayCTA}
            style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.35)
            0%, rgba(135, 135, 135, 0) 46.87%, rgba(0, 0, 0, 0.26) 100%),
            linear-gradient(106.98deg, {color1}, {color2});">
            {#if xtra != null}
              {@html xtra.button}
            {:else}{button}{/if}
          </button>
        {:else}
          <a
            class="button colorRotate btt"
            href={buttonHref}
            style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.35)
            0%, rgba(135, 135, 135, 0) 46.87%, rgba(0, 0, 0, 0.26) 100%),
            linear-gradient(106.98deg, {color1}, {color2});">
            {button}
          </a>
        {/if}
      {/if}
    </div>
  </div>
</section>
