<script>
	import Nav from '../components/Nav.svelte';
	import Audio from '../components/Audio.svelte'
	import Scrollbar from '../components/Scrollbar.svelte'
	import Loader from '../components/Loader.svelte'
	import CTAOverlay from '../components/CTAOverlay.svelte'
	
	import {scrollPosition, scrollPer} from './../stores/var.js'
	import {onMount} from 'svelte';
	export let segment;
	

	onMount(()=>{
		window.addEventListener("scroll", calcPosition);
	})

	function calcPosition(){
		var h = document.documentElement,
		b = document.body,
		st = "scrollTop",
		sh = "scrollHeight";
		var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
		scrollPer.set(y)
		scrollPosition.set(window.scrollY)
	}

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
