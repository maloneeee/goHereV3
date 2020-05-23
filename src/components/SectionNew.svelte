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
  class="section invert">
  <div class="section_inner invert" >
    <div class="container inner" class:left>
      
      <p>
        <span class="colorDynamic"}>{@html title}</span> {@html p}
      </p>
      
  </div>
</section>
