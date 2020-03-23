<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
	import { Howl, Howler } from "howler";
  let rows = 20;
  let items = 16;
  var sound = new Howl({
    src: ["audio/amb.wav"],
    autoplay: true,
    loop: true,
    volume: 0.15
  });

  sound.play();
</script>


<Nav {segment}/>

<main>
	<slot></slot>
</main>