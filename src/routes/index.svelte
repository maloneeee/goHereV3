<script>
  import {home} from './../stores/content.js'
</script>

<svelte:head>
  <title>{home.title}</title>
</svelte:head>
<section>
<div class="container">
<h1>{home.h1}</h1>

{#each home.sections as section}
  <h5>{section.sub}</h5>
  <h2 class="color_dynamic text-3xl" data-glow="{section.title}">{section.title}</h2>
  <p>{section.p}</p>
  {#if section.button != ''}
  <a href='{section.buttonHref}'>{section.button}</a>
  {/if}
{/each}
</div>
</section>
