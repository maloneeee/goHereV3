<script>
  import Hex from "./mod/Hex.svelte";

  export let title;
  export let sub;
  export let p;
  export let button;
  export let buttonHref;
  export let invert;
</script>

<style>
    .abs{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
    }
</style>

<section class="border_color">
 <Hex/>
    <div class="container abs">
         {#if sub != ''}
      <h5> <span>{sub}</span></h5>
    {/if}
    <h2 class:colorDynamic={invert} data-glow="{title}">{title}</h2>
    <p>
      {@html p}
    </p>
    {#if button != ''}
    <a href={buttonHref}>{button}</a>
    {/if}
    </div>
</section>
