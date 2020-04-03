<script>
    export let heading;
    export let headingSub;
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
        flex-direction:column;
    }

    .hero h1{
        font-size: 8rem;
        line-height:100%;
    }

    
</style>


<div class="hero" id="sec-1">
    <h1 class="colorDynamic" data-glow='{heading}'>{heading}</h1>
    <h1 class="colorDynamic" data-glow='{headingSub}'>{headingSub}</h1>
</div>