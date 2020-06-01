<script>
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";
  import { loaded } from "./../stores/var.js";
  let show = false;

  onMount(() => {
    show = true;
  });
</script>

<style>
  div {
    position: relative;
  }
</style>

{#if show}
  <div in:blur={{ delay: 0, duration: 500, amount: 20 }}>
    <slot />
  </div>
{/if}
