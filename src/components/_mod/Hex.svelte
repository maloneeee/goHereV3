 <script>
     import { onMount } from "svelte";
  import anime from "animejs/lib/anime.es.js";
  let rows = 20;
  let items = 16;

  onMount(() => {
    let tl = anime.timeline({
      duration: 1650,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
    tl.add({
      targets: ".hexagon",
      scale:[ 0.99, 1.02]
    });
  });
 </script>
 

 <style>
.hexagon {
  position: relative;
  width: 300px; 
  height: 173.21px;
  background: linear-gradient(#070707, #000);
  margin: 86.60px 0;
  display:inline-block;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
}

.hexagon:before {
  bottom: 99.5%;
  border-bottom: 86.60px solid #070707;
  left:0;
}

.hexagon:after {
  top: 99.5%;
  width: 0;
  border-top: 86.60px solid #000000;
  left:0;
}

    
</style>
 
 <div class="wrapper">
    <div class="row">
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
    </div>
    <div class="row alt">
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
    </div>
    <div class="row">
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
    </div>
 <div class="row alt">
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
        <div class="hexagon"></div>
    </div>
  </div>


 