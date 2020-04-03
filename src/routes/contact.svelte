<script>
  import Hero from './../components/Hero.svelte'
  import {contact} from './../stores/content.js'
  import Section from './../components/Section.svelte'
  import Main from './../components/forms/Main.svelte'
</script>


<svelte:head>
	<title>{contact.title}</title>
</svelte:head>
<Hero heading='{contact.h1}' headingSub={contact.h1Sub}/>
{#each contact.section as section}
<Section {...section}/>
{/each}
<Main/>

