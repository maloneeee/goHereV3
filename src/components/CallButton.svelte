<script>
    import {global} from './../stores/content.js'
</script>

<style>
    a{
        font-size:12em;
    }
</style>

<div style="display:flex; align-items:center; justify-content:center;">
<i class="fas fa-mobile-alt colorDynamic" style="font-size:11em; margin-right:15px; "></i>
<a class="colorDynamic" href="tel:{global.phone}" data-glow="{global.phone}" >
    {global.phone}
</a>
</div>