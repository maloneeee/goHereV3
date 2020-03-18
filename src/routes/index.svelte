<script>
  import {home} from './../stores/content.js'
</script>

<svelte:head>
  <title>{home.title}</title>
</svelte:head>

<h1>{home.h1}</h1>

{#each home.sections as section}
  <h5>{section.sub}</h5>
  <h2>{section.title}</h2>
  <p>{section.p}</p>
  {#if section.button != ''}
  <a href='{section.buttonHref}'>{section.button}</a>
  {/if}
{/each}
