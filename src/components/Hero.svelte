<script>
  export let heading;
  export let headingSub;
  export let color = true;

  import { scrollPosition } from "./../stores/var.js";
</script>

<style>

.hero{
  overflow:hidden;
}
  .colorful {
    content: "";
    width: 100%;
    height: 100%;
    background: url("https://gohere2-f295.kxcdn.com/img/headshots/background.png");
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
    <div class="colorful" style="top:{parseInt($scrollPosition*0.95)}px" />
  {/if}
  <h1 class="colorDynamic" data-glow={heading}>{heading}</h1>
  <h1 class="colorDynamic" data-glow={headingSub}>
    {headingSub}
  </h1>
</div>
