<script>
  let randomHeadArray = [
    "invention",
    "creative direction",
    "problem-solving",
    "technology solutions",
    "custom engineering",
    "crisis management",
    " business consulting"
  ];
  let i =1;
  let randomHead;
  import { onMount } from "svelte";
  let secondLength = 0.8;

  onMount(() => {
    randomHead = randomHeadArray[randomInt()];
     requestAnimationFrame(ani)
  });

  function randomInt() {
    return Math.floor(Math.random() * Math.floor(randomHeadArray.length));
  }

  function ani(){
      i++
      if (i == Math.floor(60*secondLength)){
        chooseHead()
        i=0;
      }
      console.log(i);
      
      requestAnimationFrame(ani)
    }

    function chooseHead(){
      let newHead = randomHeadArray[randomInt()];
        if (randomHead != newHead){
          randomHead = newHead
        }else{
          chooseHead()
        }
    }

 
</script>

<style>
  h1{
    font-size:5vw;
    text-align:right;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content: flex-end;
  }
  h1 span{
    font-size: 6vw;
    line-height: 110%;
  }
  .logo.inline{
    display:flex;
    font-size:5vw;
    margin-right:1.5vw;
  }
  .logo.inline img{
    width: 60px;
    height:60px;
  }
  .hero_text_holder{
    display:flex;
    align-items:flex-end;
    justify-content: flex-end;
  }
 
</style>

<div class="hero" id="sec-1">
  <h1 >
    <div class="hero_text_holder"><div class="logo inline">go<span>Here</span><img src="logo-192.png" alt="goHere"/></div> for</div>
    <span class="colorDynamic" data-glow={randomHead}>{randomHead}</span>
  </h1>
</div>
