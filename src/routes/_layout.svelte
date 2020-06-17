<script>
  import Nav from "../components/Nav.svelte";
  import Audio from "../components/Audio.svelte";
  import Scrollbar from "../components/Scrollbar.svelte";
  import Loader from "../components/Loader.svelte";
  import CTAOverlay from "../components/CTAOverlay.svelte";
  import Footer from "../components/Footer.svelte";
  import { scrollPosition, scrollPer } from "./../stores/var.js";
  import { onMount } from "svelte";
  export let segment;

  onMount(() => {
    window.addEventListener("scroll", calcPosition);
  });

  function calcPosition() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    scrollPer.set(y);
    scrollPosition.set(window.scrollY);
  }
</script>

<style>
  main {
    margin-top: 150px;
    position: relative;
  }

  .bg-scroll {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url("/img/space/space1x.png");
    background-size: cover;
    z-index: -1;
  }
</style>

<Loader>
  <Nav {segment} />
  <div class="bg-scroll" />
  <main>
    <slot />
  </main>
  <Scrollbar />
  <Footer />
</Loader>
<!-- <Audio /> -->
<CTAOverlay />
