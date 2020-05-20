<script>
    import New from './forms/New.svelte'
    import {showingCTA} from './../stores/var.js'
    import {blur} from 'svelte/transition';

    function closeOverlay (){
       showingCTA.set(false)
    }
</script>
<style>
    .form_overlay{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
        background:url('/img/space/space1x.png');
        padding: 2vh 4vw;
        background-size:cover;
    }

    .close{
        position:absolute;
        top:0;
        right:0;
        margin: 2vw;
        padding:30px 30px;
    }
</style>

{#if $showingCTA}
<div in:blur='{{delay: 70, duration: 500, amount:20}}' out:blur='{{delay: 0, duration: 500, amount:20}}' class="form_overlay" >
    <New />
    <button class="close" on:click={closeOverlay}><i class="fas fa-times" style="font-size:2vw"></i></button>
</div>
{/if}