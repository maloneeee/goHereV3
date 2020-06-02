<script>
  import { onMount } from "svelte";
  import { services } from "./../../stores/services.js";
  import { scrollPosition } from "./../../stores/var.js";
  import { fade } from "svelte/transition";
  import CTA from "./../../components/CTA.svelte";
  let show = true;
  let number = 0;

  let index;
  let offset;
  let progress;

  onMount(() => {
    transitionSlides();
    window.addEventListener("scroll", checkTrans);
    return () => {
      window.removeEventListener("scroll", checkTrans, false);
      number = 7;
    };
  });

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

    return offset.y;
  }
  let rail, tStart, tEnd, vars;

  function transitionSlides() {
    rail = document.getElementById("rail");
    tStart = rail.offsetTop;
    tEnd = rail.offsetHeight + tStart;
    vars = genLinear(tStart, tEnd, 0, 100);

    console.log("Trans Start and End: " + tStart + ", " + tEnd);
  }
  function genLinear(x1, x2, y1, y2) {
    let m = (y2 - y1) / (x2 - x1);

    let yInt = m * -1 * x1 + y1;

    return [m, yInt];
  }
  function checkTrans() {
    let per = vars[0] * $scrollPosition + vars[1];
    console.log(per);
    if (per < -10) {
      number = 7;
    } else if (per < 20) {
      number = 0;
    } else if (per < 40) {
      number = 1;
    } else if (per < 60) {
      number = 2;
    } else if (per < 80) {
      number = 3;
    } else if (per < 100) {
      number = 7;
    }
  }
</script>

<style>
  #rail {
    width: 100vw;
    height: 400vh;
    position: relative;
    padding: 100px 0px;
  }
  .window {
    position: absolute;
    top: 120px;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    /* background: rgba(0, 0, 0, 0.95); */
    /* border-top: 10px white solid;
    box-shadow: 0px -4px 8px rgba(255, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 0, 0, 0.1); */
  }
  .view {
    position: sticky;
    top: 0;
    height: 100vh;
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
    align-items: flex-start;
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

  .subhead {
    font-size: 42px;
    margin-top: 22px;
    padding-bottom: 18px;
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
    font-size: 22px;
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
    <div class="view">
      {#each services as service, i}
        {#if number == i}
          <div
            class="window colorScrollAlt"
            in:fade={{ delay: 150, duration: 150 }}
            out:fade={{ delay: 0, duration: 150 }}>

            <div class="mainBox">
              <h4
                class="number"
                style="color:white; text-shadow: 2px 2px 4px {service.color2};">
                {i + 1}
              </h4>
              <h2>{service.name}</h2>
              <ul>
                {#each service.li as li}
                  <li
                    out:fade={{ delay: 0, duration: 150 }}
                    in:fade={{ delay: 150, duration: 150 }}>

                    <i class={li.ico} />
                    {li.name}
                  </li>
                {/each}
              </ul>

            </div>

            <!-- <h4>
           
              {service.heading}
          </h4> -->
            <div class="blackBox">
              <img
                src={service.icon}
                alt="goHere for Greatnessness"
                style="width:222px;" />
              <h2 class="subhead">
                {@html service.subhead}
              </h2>
              <p style="color: rgba(228, 228, 228, 0.8);">

                {@html service.p}
              </p>
            </div>
          </div>
        {/if}
      {/each}
    </div>

  </div>
{/if}
<CTA />
