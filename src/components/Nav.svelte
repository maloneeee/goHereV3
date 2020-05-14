<script>
  import RandomText from "./RandomText.svelte";
  export let segment;
  let displayMenu = false;
  function toggleMenu() {
    displayMenu = !displayMenu;
  }
  function closeMenu() {
    displayMenu = false;
  }
</script>

<style>
  [aria-current] {
    position: relative;
    display: inline-block;
    color: white;
  }
  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 255, 255);
    display: block;
    bottom: 18px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  img {
    animation: rotate 30s infinite 0s linear;
  }
</style>

<nav>
  <a class="logo_link" href="." on:click={closeMenu}>
    <div class="logo">
      go
      <span>Here</span>
      <img src="logo-192.png" alt="goHere" />
    </div>
    <RandomText />
  </a>
  <ul class:nav-active={displayMenu}>
    <li class:act={displayMenu}>
      <a
        aria-current={segment === 'who' ? 'page' : undefined}
        href="who"
        on:click={closeMenu}>
        who
      </a>
    </li>
    <li class:act={displayMenu}>
      <a
        aria-current={segment === 'what' ? 'page' : undefined}
        href="what"
        on:click={closeMenu}>
        what
      </a>
    </li>
    <li class:act={displayMenu}>
      <a
        aria-current={segment === 'work' ? 'page' : undefined}
        href="work"
        on:click={closeMenu}>
        work
      </a>
    </li>
    <li class:act={displayMenu}>
      <a
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact"
        on:click={closeMenu}>
        contact
      </a>
    </li>
    <li class:act={displayMenu}>
      <a
        rel="prefetch"
        aria-current={segment === 'insights' ? 'page' : undefined}
        href="insights"
        on:click={closeMenu}>
        insights
      </a>
    </li>
  </ul>
  <div class="burger" class:toggle={displayMenu} on:click={toggleMenu}>
    <div class="line1" />
    <div class="line2" />
    <div class="line3" />
  </div>
</nav>
