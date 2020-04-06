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
</script>

<style>

  .bottom{
    margin-bottom:-80px;
  }
  .bottom .section_inner{
    margin-bottom:-20px;
  }

  .clear{
    min-height:100vh;
    color:white;
  }

  .clear a{
    margin-top:0;
    margin-bottom:-65px;
  }
  .left{
    align-items:flex-start;
    padding-right:50vw;
    max-width:90%;
  }
  .left h2{
    text-align:left;
    margin-left:0;
  }
  .left p{
    text-align:left;
  }

  

</style>

<section class="section" class:border_color={!clear} class:clear class:invert class:bottom >
  <div  class:clear_inner={clear} class:section_inner={!clear} class:invert>
  <div class="container" class:inner={!clear} class:left>
    {#if sub != ''}
      <h5> <span>{sub}</span></h5>
    {/if}
    <h2 class:colorDynamic={invert} data-glow="{title}">{@html title}</h2>
    <p>
      {@html p}
    </p>
    {#if button != ''}
    <a class="button" href={buttonHref}>{button}</a>
    {/if}
  </div>
  </div>
</section>
