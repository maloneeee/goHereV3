<script>
  export let heading;
  export let headingSub;
  export let color = true;
</script>


<div class="hero" class:colorful={color} id="sec-1">
  <h1 class="colorDynamic" data-glow={heading}>{heading}</h1>
  <h1 class="colorDynamic" data-glow={headingSub}>{headingSub}</h1>
</div>
