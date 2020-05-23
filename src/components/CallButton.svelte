<script>
    import {global} from './../stores/content.js'
</script>

<style>
    a{
        font-size:3em;
    }
</style>

<a href="tel:{global.phone}"class="button colorRotate"  style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(135, 135, 135, 0) 46.87%, rgba(0, 0, 0, 0.26) 100%), linear-gradient(106.98deg, red, purple); display:flex; align-items:center;justify-content:center">
<i class="fas fa-mobile-alt" style="color:black; font-size:1em; margin-right:15px;"></i>

    {global.phone}
</a>