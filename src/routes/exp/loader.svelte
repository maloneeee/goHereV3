<script>
  import { onMount } from "svelte";
  import anime from "animejs/lib/anime.es.js";
  

  onMount(() => {
    let tl = anime.timeline({
      duration: 750,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
    tl.add({
      targets: ".square",
      translateX: anime.stagger(10, {
        grid: [20, 16],
        from: "center",
        axis: "x"
      }),
      translateY: anime.stagger(10, {
        grid: [20, 16],
        from: "center",
        axis: "y"
      }),
      scale: anime.stagger([0.7, 1.2], {
        grid: [20, 16],
        from: "center",
        axis: "y"
      }),
      rotateZ: anime.stagger([0, 90], {
        grid: [20, 16],
        from: "center",
        axis: "x"
      }),
      delay: anime.stagger(200, { grid: [20, 16], from: "center" })
    }).add({
      targets: ".square",
      translateX: anime.stagger(20, {
        grid: [20, 16],
        from: "center",
        axis: "x"
      }),
      translateY: anime.stagger(20, {
        grid: [20, 16],
        from: "center",
        axis: "y"
      }),
      scale: anime.stagger([0.8, 1.6], {
        grid: [20, 16],
        from: "center",
        axis: "y"
      }),
      rotateZ: anime.stagger([90, 180], {
        grid: [20, 16],
        from: "center",
        axis: "x"
      }),
      delay: anime.stagger(200, { grid: [20, 16], from: "center" })
    });
  });
</script>

<style>
  .square {
    width: 20px;
    height: 20px;
    background: black;
    margin: 1px;
    transition: background-color 000ms, width 1600ms, height 1600ms;
  }
  .square:hover {
    background-color: rgb(40, 107, 110);
    transform: scale(1.2);
  }

  .holder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    background: white;
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="holder">
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
  <div class="row">
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
    <div class="square" />
    <div class="square blue" />
    <div class="square" />
    <div class="square orange" />
    <div class="square" />
  </div>
</div>
