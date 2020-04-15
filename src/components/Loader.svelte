<script>
    import {onMount} from 'svelte';
    import loader from '../routes/exp/loader.svelte'
    import {blur, fade} from 'svelte/transition';
    let show = true;
    onMount(()=>{
        show=false;
    })
</script>
<style>
    .load{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 9999999999999999999999999999;
        background:black;
        background-image:url('/img/gif/loading2.gif');
        background-size:cover;
        background-position:center;
        animation: color_rotate_invert 2s infinite;
    }
</style>

{#if show}
    <div out:blur='{{delay: 0, duration: 500, amount:20}}' class="load"><loader/></div>
{:else}
    <div  in:fade='{{delay: 300, duration: 500}}'><slot></slot></div>
{/if}