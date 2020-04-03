<script>
	export let segment;
</script>
<style>
	[aria-current] {
		position: relative;
		display: inline-block;
		color:white;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 255, 255);
		display: block;
		bottom: 18px;
	}

	@keyframes rotate{
    0%{
        transform: rotate(0deg);
        }
    100%{
        transform: rotate(359deg);
        }
}

img{
    animation: rotate 30s infinite 0s linear;
}
</style>
<nav>
	<a class="logo_link" href="."><div class="logo">go<span>Here</span><img src="logo-192.png" alt="goHere"/></div></a>
	<ul>
		<li><a aria-current='{segment === "who" ? "page" : undefined}' href='who'>who</a></li>
		<li><a aria-current='{segment === "what" ? "page" : undefined}' href='what'>what</a></li>
		<li><a aria-current='{segment === "work" ? "page" : undefined}' href='work'>work</a></li>
		<li><a aria-current='{segment === "contact" ? "page" : undefined}' href='contact'>contact</a></li>
		<li><a rel=prefetch aria-current='{segment === "insights" ? "page" : undefined}' href='insights'>insights</a></li>
	</ul>
</nav>
