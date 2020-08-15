<script>
    export let serv;  
    import Shell from './../../components/Shell.svelte';
</script>
<style>
    .midImage{
        height:700px;
        position: relative;
        overflow: hidden;
    }
    .midImage .inside{
        height:800px;
        background-size:cover;
        background-position: center;
        position:absolute;
        top:0;
        width:100%;
    }
</style>

<Shell>
    {serv.name}
</Shell>
<div class="midImage" >
    <div class="inside" style="background:url('{serv.midImage}')"></div>
</div>
<Shell>
    {@html serv.desc}
</Shell>