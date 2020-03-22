<script>
  import Section from './../components/Section.svelte'
    import {what} from './../stores/content.js'
import Hero from './../components/Hero.svelte'
import Services from './../components/Services.svelte'
</script>

<svelte:head>
	<title>{what.title}</title>
</svelte:head>
<Hero heading='{what.h1}' />
{#each what.section as section}
<Section {...section}/>
{/each}
<Services />