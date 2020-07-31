<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`services/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { serv: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let serv;

  import { onMount } from "svelte";
  import { loaded } from "./../../stores/var.js";
  import CTA from "./../../components/CTA.svelte";
  import ServiceList from "./_ServiceList.svelte";
  onMount(() => {
    loaded.set(true);
  });
</script>

<style>
  .heroish {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 85px;
    margin-top: 93px;
  }
  .content {
    font-size: 48px;
    margin: 0px 96px;
    margin-top: 64px;
    margin-bottom: 93px;
  }
</style>

<svelte:head>
  <title>{serv.name}</title>
</svelte:head>
<div class="fullServ">
  <div class="heroish">
    <h1>{serv.name}</h1>
  </div>
  <div class="content">
    {@html serv.desc}
  </div>
  <ServiceList />
</div>
<CTA />
