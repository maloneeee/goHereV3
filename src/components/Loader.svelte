<script>
  import { onMount } from "svelte";
  import loader from "../routes/exp/loader.svelte";
  import { blur, fade } from "svelte/transition";
  import { loaded } from "./../stores/var.js";

  let show = true;
  onMount(() => {
    // show = false;
  });

  $: if ($loaded == true) {
    // alert("loaded");
    // show = false;
  } else {
    show = true;
    // alert('its clsoed');
  }
</script>

<style>
  .load {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    background: white;
    /* background-image: url("https://gohere2-f295.kxcdn.com/img/gif/loading2.gif"); */
    background-size: cover;
    background-position: center;
    /* animation: color_rotate 20ms infinite; */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container22 {
    position: relative;
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: url(#gooey);
  }
  .circle {
    position: relative;
    min-width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #fff;
  }
  .circle::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    left: -50px;
    bottom: -50px;
    border-radius: 50%;
    background: white;
    z-index: -1;
    filter: blur(50px);
  }
  .circle1,
  .circle::before {
    background: linear-gradient(90deg, mediumorchid, mediumturquoise);
  }
  .circle2,
  .circle2::before {
    background: linear-gradient(90deg, rgb(207, 111, 175), rgb(192, 19, 42));
  }

  .circle1 {
    animation: animate1 3s linear infinite;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    30% {
      transform: translateX(250px) rotate(120deg);
    }
    60% {
      transform: translateX(250px) rotate(240deg);
    }

    100% {
      transform: translateX(0) rotate(360deg);
    }
  }
  .circle2 {
    animation: animate2 3s linear infinite;
  }

  @keyframes animate2 {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    30% {
      transform: translateX(-250px) rotate(-120deg);
    }
    60% {
      transform: translateX(-250px) rotate(-240deg);
    }

    100% {
      transform: translateX(0) rotate(-360deg);
    }
  }

  svg {
    width: 0;
    height: 0;
  }
</style>

{#if show}
  <div out:blur={{ delay: 0, duration: 500, amount: 20 }} class="load">
    <div class="container22">
      <div class="circle circle1" />
      <div class="circle circle2" />
    </div>
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stfDeviation="10" />
        <feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10 " />
      </filter>
    </svg>
  </div>
{/if}
<div in:fade={{ delay: 300, duration: 500 }}>
  <slot />
</div>
