<script>
  export let title;
  export let sub;
  export let p;
  export let button;
  export let buttonHref;
  export let invert;
  export let bottom;
</script>

<style>
  section {
    min-height: 700px;
    text-align:center;
  }
  .bottom{
    margin-bottom:-80px;
  }
  .bottom .section_inner{
    margin-bottom:-20px;
  }

</style>

<section class="section border_color" class:invert class:bottom>
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
    <a class="button" href={buttonHref}>{button}</a>
    {/if}
  </div>
  </div>
</section>
