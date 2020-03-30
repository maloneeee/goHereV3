<script>
    export let name;
    export let desc;
    export let shortD;
    export let services;
    export let year;
    export let url;
    export let slug;
    export let img;

</script>

<style>
    .client_holder{
        width:100%;
        text-align:left;
        padding: 100px 2rem;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
    }
    .main{
        text-align:center;
        width:100%;
    }
    h2{
        font-size:5rem;
    }
    h3{
        margin-top:0px;
        font-size:2rem;
    }
    .desc{
        margin-top:20px;
        font-size:2rem;
        text-align:left;
    }
    p{
        margin-bottom:10px;
        
    }
    ul{
        margin-top:40px;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        flex-wrap: wrap;
        width:90%;
    }
    li{
        padding: 5px 30px;
        font-size: 2rem;
        font-weight:700;
        white-space: nowrap;
    }
    li:first-child{
        padding-left:0;
    }
    a{
        margin-top:20px;
        padding-top:20px;
        font-size:2rem;
    }
</style>

<div class="client_holder">

    <h2 class="colorDynamic center" data-glow="{name}">{name}</h2>
    <h3>{year}</h3>
    <div class="desc">{@html desc}</div>
    <ul>
        {#each services as service}
        <li>{service}</li>
        {/each}
    </ul>
    <a href="{url}">View Website</a>
</div>