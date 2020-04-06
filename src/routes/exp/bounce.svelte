<script>
    import { onMount } from "svelte";

    let canvas = document.querySelector('canvas');
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
</script>

<style>
    canvas{
        margin-top:-150px;
        background:red;
    }
</style>
<svelte:head>
	<title>Bounce | Expereriment</title>
</svelte:head>
<canvas></canvas>