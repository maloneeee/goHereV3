<script>
  import { global } from "./../stores/content.js";
  import { onMount } from "svelte";

  export let posts = [];
  const apiURL =
    "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
  let data = [];
  onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    posts = data.posts;
  });
</script>

<style>
  .footer {
    background: black;
    padding: 10vh 10vw;
    color: white;
    z-index: 999999999999;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .col_holder {
    display: flex;
  }
  .footer_col {
    padding: 10px 20px;
  }

  h3 {
    color: rgb(189, 15, 82);
    font-weight: 800;
    text-decoration: underline;
  }

  .footer_mid {
    margin-top: 20px;
  }
  .footer_right {
    margin-top: 20px;
  }
</style>

<div class="footer">
  <div class="footer_col footer_left">
    <a class="logo_link" href="/">
      <div class="logo">
        go
        <span>Here</span>
        <img src="logo-192.png" alt="goHere" />
      </div>
    </a>
    <h5 class="address">
      {@html global.address}
    </h5>
    <h5>{global.phone}</h5>
    <h5>{global.email}</h5>
  </div>
  <div class="col_holder">

    <div class="footer_col footer_mid">
      <h3>Essential Info</h3>
      <ul>
        <li>
          <a href="#">Who We Are</a>
        </li>
        <li>
          <a href="#">What We Do</a>
        </li>
        <li>
          <a href="#">Where</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
      </ul>
    </div>
    <div class="footer_col footer_mid">
      <h3>Tools</h3>
      <ul>
        <li>
          <a href="#">Wordpress</a>
        </li>
        <li>
          <a href="#">Webflow</a>
        </li>
        <li>
          <a href="#">P3D</a>
        </li>
      </ul>
    </div>

    <div class="footer_col footer_right">
      <h3>Insights</h3>
      <ul>
        {#each posts as post, i}
          <li>
            <a href="/insights/{post.slug}">{post.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
