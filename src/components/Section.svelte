<script>
  export let title;
  export let sub;
  export let p;
  export let button;
  export let buttonHref;
</script>

<style>
  section {
    min-height: 700px;
  }


</style>

<section class="border_color">
  <div class="section_inner">
  <div class="container">
    {#if sub != ''}
      <h5> <span>{sub}</span></h5>
    {/if}
    <h2>{title}</h2>
    <p>
      {@html p}
    </p>
    {#if button != ''}
    <a href={buttonHref}>{button}</a>
    {/if}
  </div>
  </div>
</section>
