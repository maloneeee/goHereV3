<script>
	import Nav from '../components/Nav.svelte';
	import Audio from '../components/Audio.svelte'
	import Scrollbar from '../components/Scrollbar.svelte'
	import Loader from '../components/Loader.svelte'
	import CTAOverlay from '../components/CTAOverlay.svelte'
	export let segment;
	

</script>
<style>
	main{
		margin-top:150px;
		position:relative;
	}
</style>
<Loader>
<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Scrollbar/>
</Loader>
<Audio/>
<CTAOverlay/>