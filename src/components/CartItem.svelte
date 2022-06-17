<script>
  import StarRating from "svelte-stars-rating";

  import TshirtImage from "../../res/tshirt.png";
  let rating = 3.5;
  let style = {
    styleStarWidth: 25,
    styleEmptyStarColor: "#737373",
    styleFullStarColor: "#ffd219",
  };
</script>

<div class="container">
  <div class="img">
    <img src={TshirtImage} alt="" />
  </div>
  <div class="sep" />
  <div class="text">
    <div>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h3>Lorem ipsum dolor sit amet.</h3>
    </div>
    <div class="row">
      Condition:&nbsp;&nbsp;&nbsp;&nbsp;<StarRating {rating} {style} isIndicatorActive={false} />
    </div>
    <div>
      <h3 style="color:rgb(0, 0, 0, 0.42)">starting at</h3>
      <h1>1400/month</h1>
    </div>
    <h4 style="color:rgb(0, 0, 0, 0.42)">1 month</h4>
  </div>
  <div class="close">x</div>
</div>

<style>
  .container {
    display: flex;
    border: 2px solid rgb(0, 0, 0, 0.06);
    border-radius: 32px;
    position: relative;
  }
  .img {
    padding: 3%;
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .text {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text h3 {
    font-family: "Inter";
    font-weight: 400;
  }
  .sep {
    border-left: 2px solid rgb(0, 0, 0, 0.06);
    height: 250px;
    margin-top: 25px;
  }
  .close {
    position: absolute;
    right: 25px;
    top: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.06);
  }
  .text h1 {
    color: #48a259;
  }
  .row {
    display: flex;
    align-items: center;
  }
</style>
