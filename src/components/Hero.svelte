<script>
  export let heading;
  export let headingSub;
  export let color = true;

  let h = heading + " " + headingSub;
  $:  h = heading + " " + headingSub;

  import { scrollPosition } from "./../stores/var.js";
</script>

<style>
  .hero {
    overflow: hidden;
    padding-bottom:40px;
  }
  .colorful {
    content: "";
    width: 100%;
    height: 100%;
    background: url("/img/headshots/background.png");
    background-size: cover;
    background-position: center;
    animation: fadeHero 30s ease-in infinite;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -10vh;
    z-index: 2;
    transform: rotate(180deg);
  }
</style>

<div class="hero" id="sec-1">
  {#if color}
    <div class="colorful" style="top:{parseInt($scrollPosition * 0.85)}px" />
  {/if}
  <h1 class="colorDynamic" data-glow={h} >{h}</h1>
</div>
