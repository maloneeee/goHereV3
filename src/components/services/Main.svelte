<script>
  import { services } from "./../../stores/services.js";
  import { fade } from "svelte/transition";
  import CTA from "./../../components/CTA.svelte";
  let show = true;
  let number = 0;

  let index;
  let offset;
  let progress;
</script>

<style>
  #rail {
    width: 100vw;
    height: 480vh;
    position: relative;
  }
  .window {
    position: sticky;
    top: 160px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 36px;
    background:rgba(0, 0, 0, 0.95);
    border-top: 10px white solid;
    box-shadow: 0px -8px 16px rgba(255, 255, 255, 0.1), inset 0px 8px 16px rgba(255, 255, 255, 0.1);
  }

  .mainBox {
    padding: 50px 75px;
    width: 600px;
    position: relative;
  }
  .blackBox {
    padding: 50px 75px;
   
    width: 600px;
     /* box-shadow: 5px 10px #000000, inset -5px -10px #000000, inset 5px 10px white, -5px -10px white; */
     /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.1), inset -8px -8px 8px rgba(0, 0, 0, 0.1), inset 8px 8px 8px rgba(255, 255, 255, 0.1); */
  }
  li {
    padding-bottom: 7px;
    font-size: 24px;
  }

  h2 {
   font-size: 140px;
    padding-bottom: 20px;
    font-weight: 700;
    line-height: 110%;
  }

  h4 {
    font-size: 80px;
    padding-bottom: 20px;
    line-height:1;
  }
  .number {
    position: absolute;
    top: 40px;
    left: -50px;
    font-size: 170px;
    color: rgba(255, 255, 255, 0.1);
    font-weight: 800;
    font-family: "Roboto", sans-serif;
    line-height: 100%;
    text-align:right;
  }
  p {
    font-size: 22px;
    padding-bottom: 25px;
  }
  i{
    margin-right:5px;
  }
</style>
{#if show}
  <div id="rail" >
    {#each services as service, i}
      <div class="window colorScrollAlt" style="top:{150+((i)*30)}px; background:{service.color}">
        <div class="mainBox">
          <h4 class="number">
              {i + 1}
          </h4>
          <h2>
              {service.name}
          </h2>
          <ul>
            {#each service.li as li}
          <li
            out:fade={{ delay: 0, duration: 200 }}
            in:fade={{ delay: 200, duration: 200 }}>
           
             <i class="{li.ico}"></i> {li.name}
          </li>
        {/each}
          </ul>

        </div>
        <div class="blackBox" style=' background:{service.color};'>

          <h4>
           
              {service.heading}
          </h4>
          <p>
            
              {@html service.p}
          </p>
        </div>
      </div>
    {/each}
    <div style='position: sticky;top: 0px;'>
      <CTA />
    </div>
  </div>
{/if}