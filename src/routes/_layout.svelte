<script>
	import Nav from '../components/Nav.svelte';
	import Audio from '../components/Audio.svelte'
	export let segment;
	

</script>
<style>
	main{
		margin-top:200px;
	}
</style>
<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Audio/>