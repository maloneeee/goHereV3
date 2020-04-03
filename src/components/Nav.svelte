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
