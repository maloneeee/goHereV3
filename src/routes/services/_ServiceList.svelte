<script>
  import { serv } from "./_services.js";
</script>

<style>
  .hld {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: ". . . ." ". . . ." ". . . ." ". . . ." ". . . .";
    margin-bottom: 103px;
    justify-items: center;
    align-items: center;
  }

  h5 {
    font-size: 25px;
    margin: 17px 45px;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<div class="hld">
  {#each serv as service}
    {#if service.name != serv.name}
      <a href="/services/{service.slug}">
        <i class={service.ico} />
        <h5>{service.name}</h5>
      </a>
    {/if}
  {/each}
</div>
