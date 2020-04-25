<script>
  import { services } from "./../../stores/services.js";
  import { fade } from "svelte/transition";
  let show = true;
  let number = 0;
  
</script>

<style>
  #rail {
    width: 100vw;
    height: 400vh;
    position: relative;
  }
  .window {
    position: sticky;
    top: 150px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 36px;
    background:rgba(0, 0, 0, 0.95);
  }

  .mainBox {
    padding: 50px 75px;
    width: 600px;
    position: relative;
  }
  .blackBox {
    padding: 50px 75px;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    width: 600px;
  }
  li {
    padding-bottom: 15px;
    font-size: 24px;
  }

  h2 {
    font-size: 50px;
    padding-bottom: 60px;
    font-weight: 700;
  }

  h4 {
    font-size: 50px;
    padding-bottom: 64px;
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
</style>
{#if show}
  <div id="rail" >
    {#each services as service, i}
      <div class="window">
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
           
              {li}
          </li>
        {/each}
          </ul>

        </div>
        <div class="blackBox">

          <h4>
           
              {service.heading}
          </h4>
          <p>
            
              {@html service.p}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque error est rem, quo nostrum culpa magnam qui voluptatem eius
            eligendi aut unde possimus ipsum placeat ea quaerat! Inventore minus
            cumque ullam consequatur distinctio incidunt ratione..
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}