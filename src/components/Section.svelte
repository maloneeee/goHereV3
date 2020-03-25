<script>
  export let title;
  export let sub;
  export let p;
  export let button;
  export let buttonHref;
  export let invert;
</script>

<style>
  section {
    min-height: 700px;
    text-align:center;
  }


</style>

<section class="section border_color">
  <div class="section_inner" class:invert>
  <div class="container inner">
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
  </div>
</section>
