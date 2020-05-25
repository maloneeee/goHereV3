<script>
  import { onMount, onDestroy } from "svelte";
  import { home } from "./../stores/content.js";
  import { fade } from "svelte/transition";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  import Index from "./../components/space.js";
  import Hero from "./../components/Hero.svelte";
  import { showingCTA, scrollPer } from "./../stores/var.js";
  import ScrollAnimation from "../components/ScrollAnimation.svelte";

  let phase = 0;
  let displayMenu = false;

  function toggleMenu() {
    displayMenu = !displayMenu;
  }
  function closeMenu() {
    displayMenu = false;
  }

  onMount(() => {
    var createScene = new Promise((resolve, reject) => {
      let create3d = new Index();
      resolve(create3d);
    });
    createScene.then(loaded.set(true));
    window.addEventListener("scroll", fadeScroll);
  });
   onDestroy(() => {
    loaded.set(false);
  });

  function fadeScroll() {
    if (y < 3) {
      phase = 0;
    } else if (y > 40 && y < 52) {
      phase = 1;
    } else if (y > 99.1) {
      phase = 3;
    } else {
      phase = 0;
    }
  }
</script>
