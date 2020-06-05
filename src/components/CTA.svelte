<script>
  import Section from "./Section.svelte";
  import { cta } from "./../stores/content.js";

  export let extra = {
    head: "Default",
    button: "button text"
  };
</script>

<Section {...cta} xtra={extra} />
