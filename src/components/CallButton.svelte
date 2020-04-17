<script>
    import {global} from './../stores/content.js'
</script>

<style>
    a{
        font-size:12em;
    }
</style>

<a class="colorDynamic" href="tel:{global.phone}" data-glow="{global.phone}">
    {global.phone}
</a>