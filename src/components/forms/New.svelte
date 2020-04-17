<script>
    import { db } from "./../../firebase.js";
    import {global} from './../../stores/content.js'
    let form = {
    name: "",
    email: "",
    project:'',
    phone: "",
    website: ""
  };
  let error = false;
  let sent = false;
  let zoom=false;

  function zoomIn(){
    zoom=true;
  }
  function zoomOut(){
    zoom=false;
  }
  async function sendContactMessage() {
    try {
      await db.collection("leads").add(form);
      sent = true;
    } catch (e) {
      console.log(";(", e);
      console.log("Big Error: " + e);
      error = true;
    }
  }

</script>

<section class="form">
<div class="form_holder">
    {#if sent == false}
    <form action="" on:submit|preventDefault={sendContactMessage}>
        <div class="form_body">
            <h3>Get A Quote</h3>
            <input type="text" bind:value={form.name} placeholder="Full Name" />
            <input type="text" bind:value={form.email} placeholder="Email Address" />
            <input type="text" bind:value={form.phone} placeholder="Phone Number" />
            <input type="text" bind:value={form.project} placeholder="Type of Project" />
            <button on:click={sendContactMessage} on:mouseenter={zoomIn} on:mouseleave={zoomOut}>Submit</button>
        </div>
    </form>
    {:else}
        <div class="form_confirmation">
            <h4>Looks Great, {form.name}</h4>
            <p>Our team will review your website, <span>{form.website}</span></p>
            <p>After we assess your needs one of our brand ambassadors will be in contact with you.</p>
            <h5>Thank you,</h5>
            <h5 class="gohere">goHere</h5>

            <h6>If you have any questions or need immediate assistance please call us at <a href="tel:{global.phone}">{global.phone}</a></h6>
        </div>
    {/if}
</div>
<div class="form_window">
    <img src="img/astro.png" alt="goHere" id="astro" class:zoom class="colorRotate">
    <img src="img/space/planet1-min.png" alt="goHere" id="planet" class:zoom>
</div>
</section>