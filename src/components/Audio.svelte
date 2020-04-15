<script>
  import { Howl, Howler } from "howler";
  var sound = new Howl({
    src: ["audio/amb.wav"],
    autoplay: true,
    loop: true,
    volume: 0.10
  });
  sound.play();
  Howler.volume(0.0);
  let audio = false;

	function toggleAudio(){
        audio = !audio;
        if (audio == true){
            Howler.volume(1);
        }else{
            Howler.volume(0.0);
        }
	}
</script>

<style>
  .pause {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 60px;
    z-index: 99999999999999999999999999999;
  }
  i{
     font-size: 4rem;
     -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  }
</style>

<div class="pause" on:click="{toggleAudio}">
    {#if audio}
        <i class="fas fa-volume-up"></i>
    {:else}
        <i class="fas fa-volume-mute"></i>
    {/if}
</div>
