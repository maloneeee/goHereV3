<script>
  import {tags} from './../stores/content.js'
  
  let i = 1;
  let randomHead;
  import { onMount } from "svelte";
  let secondLength = 1.4;

  onMount(() => {
    randomHead = tags[0];
    requestAnimationFrame(ani);
  });

  function randomInt() {
    return Math.floor(Math.random() * Math.floor(tags.length));
  }

  function ani() {
    i++;
    if (i == Math.floor(60 * secondLength)) {
      chooseHead();
      i = 0;
    }

    requestAnimationFrame(ani);
  }

  function chooseHead() {
    let newHead = tags[randomInt()];
    if (randomHead != newHead) {
      randomHead = newHead;
    } else {
      chooseHead();
    }
  }
</script>

<style>
span{
      font-size: 2.5vw;
  }
  .small {
    font-size: 3vw;
    line-height: 110%;
  }
  .fart{
     padding:0vw 0.8vw 0vw 0.5vw;
  }
</style>


      
   <span class="fart">for</span> <span class="colorDynamic small" data-glow={randomHead}>{randomHead}</span>