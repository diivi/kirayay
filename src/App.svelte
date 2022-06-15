<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import Shop from "./routes/Shop.svelte";
  import Sell from "./routes/Sell.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/sell">Sell</Link>
  </nav>
  <Route path="/" component={Home} />
  <Route path="/shop" component={Shop} />
  <Route path="/sell" component={Sell} />
</Router>

<style>
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
    justify-content: center;
  }
</style>
