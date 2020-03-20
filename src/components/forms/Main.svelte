<script>
  import { db } from "./../../firebase.js";
  let contactForm = {
    name: "goHere Rebuild",
    email: "2",
    phone: "3",
    website: "4"
  };
  let error = false;
  let sent = false;

  async function sendContactMessage() {
    try {
      await db.collection("leads").add(contactForm);
      sent = true;
    } catch (e) {
      console.log(";(", e);
      console.log("Big Error: " + e);
      error = true;
    }
  }
</script>

<button on:click={sendContactMessage}>Click Me</button>
