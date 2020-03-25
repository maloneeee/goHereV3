<script>
      import clients from './../stores/clients.js';

    import Section from './../components/Section.svelte'
    import {work} from './../stores/content.js'
import Hero from './../components/Hero.svelte'
    import CTA from './../components/CTA.svelte'

</script>

<svelte:head>
	<title>{work.title}</title>
</svelte:head>
<Hero heading='{work.h1}' />

{#each work.section as section}
<Section {...section}/>
{/each}

{#each clients as client}
  {client.name}
{/each}

<CTA/>