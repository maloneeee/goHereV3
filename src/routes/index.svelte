<script>
  import {home} from './../stores/content.js'
  import Section from './../components/Section.svelte'
</script>

<svelte:head>
  <title>{home.title}</title>
</svelte:head>
<h1>{home.h1}</h1>

{#each home.sections as section}
<Section {...section}/>
{/each}

