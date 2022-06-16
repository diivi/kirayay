<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import Shop from "./routes/Shop.svelte";
  import Sell from "./routes/Sell.svelte";
  import Donate from "./routes/Donate.svelte";

  //apply styling to active Link
  let activeLink = "Home";
  let links = [
    { title: "Home", to: "home" },
    { title: "Shop", to: "shop" },
    { title: "Sell", to: "sell" },
    { title: "Donate", to: "donate" },
  ];

  function activateLink(event) {
    activeLink = event.detail.target.innerHTML;

    console.log(event.detail.target.innerHTML);
  }
  //apply styling to active Link
</script>

<Router>
  <nav>
    <div class="nav-logo">
      <img class="site-logo" src="./res/logo-kirayay.png" alt="logo" />
    </div>
    <div class="navlinks">
      {#each links as link}
        <Link
          on:click={activateLink}
          to={"/" + link.path}
          class="patani {activeLink === `${link.title}` ? 'active' : ''}"
          >{link.title}</Link
        >
      {/each}
    </div>
    <div class="navbtns">
      <button class="signinbtn">Sign In</button>
      <img
        class="wishlistbtn"
        src="https://img.icons8.com/ios-glyphs/30/undefined/like--v1.png"
        alt="wishlistbtn"
      />
      <img
        class="cartbtn"
        src="https://img.icons8.com/material/24/undefined/shopping-cart--v1.png"
        alt="cartbtn"
      />
    </div>
  </nav>
  <Route path="/" component={Home} />
  <Route path="/shop" component={Shop} />
  <Route path="/sell" component={Sell} />
  <!-- <Route path="/donate" component={Donate} /> -->
</Router>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");

  :root {
    margin: 0px;
  }
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  nav {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
    padding: 20px 8vh;
    align-items: center;
  }

  /* .navlinks > :global(a) {
    text-decoration: none;
  } */

  .site-logo {
    max-height: 35px;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
    font-family: "Inter";
    font-size: 18px;
    color: #767676;
    margin: 10px;
    padding-bottom: 5px;
  }

  :global(.active) {
    text-decoration: none;
    color: inherit;
    font-family: "Inter";
    font-size: 18px;
    margin: 10px;
    padding-bottom: 5px;
    border-bottom: 3px solid #48a259;
  }

  .navbtns {
    display: flex;
    align-items: center;
  }

  .signinbtn {
    max-height: 35px;
    background-color: #48a259;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
  }

  .cartbtn,
  .wishlistbtn {
    padding: 10px;
    max-height: 45px;
  }

  .nav-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
  }
</style>
