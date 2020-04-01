<script>
    export let name;
    export let desc;
    // export let shortD;
    export let services;
    export let year;
    export let url;
    // export let slug;
    // export let img;

</script>

<style>
   
</style>

<!-- <div class="client_container">
<div class="image_holder" style="background: url({img})">
</div> -->
<div class="client_holder">

    <h2 class="colorDynamic" data-glow="{name}">{name}</h2>
    <h3>{year}</h3>
    <div class="desc">{@html desc}</div>
    <ul>
        {#each services as service}
        <li>{service}</li>
        {/each}
    </ul>
    <a class="button" href="{url}">View Website</a>
</div>
<!-- </div> -->