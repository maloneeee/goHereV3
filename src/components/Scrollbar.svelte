<script>
  import { onMount } from "svelte";
  onMount(() => {
    window.addEventListener("scroll", getScroll);
  });

  function getScroll() {
    var sb = document.getElementById("fill");
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    sb.style.height = y + 1 + "%";
    if (y == 0) {
      sb.style.height = 0 + "%";
    }
  }
</script>

<style>
  .scroll_bar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 100vh;
    z-index: 9999999;
  }
  #fill {
    /* background:red; */
    height: 0%;
    border-radius: 0px 0px 10px 10px;
  }
  #fill::after {
    border-radius: 0px 0px 10px 10px;
  }
</style>

<div class="scroll_bar">
  <div id="fill" class="colorBackground" />
</div>
