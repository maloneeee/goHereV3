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
    show = false;
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
    background-image: url("https://gohere2-f295.kxcdn.com/img/gif/loading2.gif");
    background-size: cover;
    background-position: center;
    animation: color_rotate 20ms infinite;
  }
</style>

{#if show}
  <div out:blur={{ delay: 0, duration: 500, amount: 20 }} class="load">
    <loader />
  </div>
{/if}
<div in:fade={{ delay: 300, duration: 500 }}>
  <slot />
</div>
