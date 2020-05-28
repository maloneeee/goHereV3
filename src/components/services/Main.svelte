<script>
  import { services } from "./../../stores/services.js";
  import { fade } from "svelte/transition";
  import CTA from "./../../components/CTA.svelte";
  let show = true;
  let number = 0;

  let index;
  let offset;
  let progress;

  function getPosition(e) {
    var offset = { x: 0, y: 0 };
    while (e) {
      offset.x += e.offsetLeft;
      offset.y += e.offsetTop;
      e = e.offsetParent;
    }

    if (
      document.documentElement &&
      (document.documentElement.scrollTop ||
        document.documentElement.scrollLeft)
    ) {
      offset.x -= document.documentElement.scrollLeft;
      offset.y -= document.documentElement.scrollTop;
    } else if (
      document.body &&
      (document.body.scrollTop || document.body.scrollLeft)
    ) {
      offset.x -= document.body.scrollLeft;
      offset.y -= document.body.scrollTop;
    } else if (window.pageXOffset || window.pageYOffset) {
      offset.x -= window.pageXOffset;
      offset.y -= window.pageYOffset;
    }

    alert(offset.x + "\n" + offset.y);
  }
</script>

<style>
  #rail {
    width: 100vw;
    height: 380vh;
    position: relative;
  }
  .window {
    position: sticky;
    top: 160px;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    background: rgba(0, 0, 0, 0.95);
    border-top: 10px white solid;
    box-shadow: 0px -8px 16px rgba(255, 255, 255, 0.1),
      inset 0px 8px 16px rgba(255, 255, 255, 0.1);
  }

  .mainBox {
    padding: 50px 75px;
    margin-left: 100px;
    width: 550px;
    position: relative;
  }
  .blackBox {
    padding: 50px 75px;

    width: 700px;
    /* background: #FDFAF5; */
    /* border: 6px solid #FFFFFF; */
    /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3), inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -2px 4px #FFFFFF; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    line-height: 1;
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
    text-align: right;
  }
  p {
    font-size: 35px;
    /* padding-bottom: 25px; */
    font-weight: 500;
    color: #888;
  }
  i {
    margin-right: 5px;
    width: 35px;
  }
</style>

{#if show}
  <div id="rail">
    {#each services as service, i}
      <div
        class="window colorScrollAlt"
        style="top:{150 + i * 30}px; background:{service.color}">
        <img src={service.icon} alt="goHere for Greatnessness" />

        <div class="mainBox">
          <h4
            class="number"
            style="color:{service.color1}; text-shadow: -2px -2px 4px {service.color2};">
            {i + 1}
          </h4>
          <h2>{service.name}</h2>
          <ul>
            {#each service.li as li}
              <li
                out:fade={{ delay: 0, duration: 200 }}
                in:fade={{ delay: 200, duration: 200 }}>

                <i class={li.ico} />
                {li.name}
              </li>
            {/each}
          </ul>

        </div>
        <div class="blackBox" style="color:{service.color1}">

          <!-- <h4>
           
              {service.heading}
          </h4> -->
          <p style="color: rgba(228, 228, 228, 0.8);">

            {@html service.p}
          </p>
        </div>
      </div>
    {/each}
    <div style="position: sticky;top: 0px;">
      <CTA />
    </div>
  </div>
{/if}
