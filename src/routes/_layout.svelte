<script>
	import Nav from '../components/Nav.svelte';
	import Audio from '../components/Audio.svelte'
	export let segment;
	

</script>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Audio/>