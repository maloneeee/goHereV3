<script context="module">
  import employees from "./../stores/employees.js";
  import Section from "./../components/Section.svelte";
  import { who } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import CTA from "./../components/CTA.svelte";
  import Employee from "./../components/Employee.svelte";
  import TransitionWrapper from '../components/TransitionWrapper.svelte';
</script>

<svelte:head>
  <title>{who.title}</title>
</svelte:head>
<TransitionWrapper>
<Hero heading={who.h1} headingSub={who.h1Sub} />

{#each who.section as section}
  <Section {...section} />
{/each}
{#each employees as employee}
  <Employee {...employee} />
{/each}
<CTA />
</TransitionWrapper>
