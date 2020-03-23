<script>
      import clients from './../stores/clients.js';

    import Section2 from './../components/Section2.svelte'
    import {work} from './../stores/content.js'
import Hero from './../components/Hero.svelte'
</script>

<svelte:head>
	<title>{work.title}</title>
</svelte:head>
<Hero heading='{work.h1}' />

{#each work.section as section}
<Section2 {...section}/>
{/each}

{#each clients as client}
  {client.name}
{/each}