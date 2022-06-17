<script>
  import CartItem from "../components/CartItem.svelte";
  import CartSide from "../components/CartSide.svelte";
  import Card from "../components/Card.svelte";
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
  <br />
  <h1 style="margin-top:20px">Suggestions</h1>
  <div class="suggested">
    <div>
      <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
    </div>
    <div>
      <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
    </div>
    <div>
      <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
    </div>
    <div>
      <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
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
  .suggested {
    display: flex;
    justify-content: space-evenly;
    margin-top: -30px;
  }
  .suggested div {
    transform: scale(0.8);
  }
</style>
