<script>
  import Section from "./Section.svelte";
  import { cta } from "./../stores/content.js";

  export let extra = {
    head: "Let's Create Together",
    button: "Let's Go"
  };
</script>

<Section {...cta} xtra={extra} />
