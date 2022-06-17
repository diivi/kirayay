<script>
  import CartItem from "../components/CartItem.svelte";
  import CartSide from "../components/CartSide.svelte";
</script>

<main>
  <h1>Cart</h1>
  <div class="cart-body">
    <div class="cart-items">
      <CartItem />
    </div>
    <div class="cart-side">
      <CartSide />
    </div>
  </div>
</main>

<style>
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  main {
    padding: 0 8vw;
  }
  .cart-body {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .cart-items {
    width: 60%;
  }
  .cart-items {
    margin-right: 20px;
  }
  .cart-side {
    margin-left: 20px;
    flex: 1;
  }
</style>
