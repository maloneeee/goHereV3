<script>
    export let heading;
</script>

<style>
    .hero{
        height:70vh;
        width:100%;
        display:flex;
        justify-content: flex-end;
        align-items:flex-end;
        padding-bottom:2rem;
        padding-right:3rem;
    }

    .hero h1{
        font-size: 8rem;
    }

    
</style>


<div class="hero">
    <h1 class="colorDynamic" data-glow='{heading}'>{heading}</h1>
</div>