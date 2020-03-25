<script context="module">
    import employees from './../stores/employees.js';
    import Section from './../components/Section.svelte'
    import {who} from './../stores/content.js'
    import Hero from './../components/Hero.svelte'
    import CTA from './../components/CTA.svelte'
    import Employee from './../components/Employee.svelte'
</script>

<svelte:head>
	<title>{who.title}</title>
</svelte:head>
<Hero heading='{who.h1}' />

{#each who.section as section}
<Section {...section}/>
{/each}
{#each employees as employee}
    <Employee {...employee}/>
{/each}
<CTA/>