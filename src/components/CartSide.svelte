<script>
</script>

<div class="container">
  <div class="carbon-info">
    <h3>Total Carbon Footprint Saved</h3>
    <h3
      style=" margin-top: 10px;
    color: #48a259;
    font-size:24px"
    >
      3 kilograms!
    </h3>
    <h3
      style="text-align: right;color:rgba(256,256,256,0.42); margin-right:80px;font-size:18px;
    font-family: 'Josefin Sans';      "
    >
      approx.
    </h3>
  </div>
  <div class="cart-info">
    <h3>Total Amount</h3>
    <div class="cart-info-side">
      <h1 style="color: #48a259;">1400/month</h1>
      <h3>for 3 months</h3>
    </div>
  </div>
  <button> View More </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
  .carbon-info,
  .cart-info {
    border: 2px solid rgb(0, 0, 0, 0.06);
    border-radius: 20px;
    text-align: center;
    padding: 5%;
    font-size: 16px;
  }
  .carbon-info {
    background-color: black;
    color: white;
    margin-bottom: 20px;
  }
  .carbon-info h3 {
    font-size: 18px;
    font-weight: 400;
  }
  .cart-info {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 20px;
  }
  button {
    border: 2px solid;
    border-radius: 40px;
    font-size: larger;
    font-weight: 100;
    padding: 10px 20px;
    color: WHITE;
    cursor: pointer;
    background-color: #48a259;
    position: relative;
    top: 100%;
    bottom: 0%;
    font-family: "Josefin Sans";
  }
  .cart-info h1,
  .cart-info h3 {
    font-family: "Josefin Sans";
    font-weight: 400;
  }
</style>
