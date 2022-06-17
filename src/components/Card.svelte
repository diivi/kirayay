<script>
  // import StarIcon from '@mui/icons-material/Star';
  import StarRating from "svelte-stars-rating";
  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "white",
    styleFullStarColor: "#ffd219",
  };
  export let cardimgsrc = "";
  export let rating = 4;
  export let cardamount;
  export let cfScore = 9.2;
</script>

<div class="card">
  <div class="cfScore">
    <p>CFScore: {cfScore}</p>
  </div>
  <img class="card-img-top" src={cardimgsrc} alt="" />

  <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
  <div class="card-body">
    <div class="cardbodyleft">
      <span>
        <StarRating {rating} {style} isIndicatorActive={false} />
      </span>
      <span class="text">starting at</span>
      <span class="price">{cardamount}/month</span>
    </div>
    <div class="cardbodyright">
      <button class="carbtn">Rent Now</button>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  * {
    font-family: "Josefin Sans", sans-serif;
  }
  .card {
    min-width: 400px;
    min-height: 520px;
    border: 3px solid #e8e8e8;
    border-radius: 20px;
    width: fit-content;
    flex: 0 0 27.77%;
    margin-top: 3%;
  }

  .cfScore {
    background-color: #48a259;
    color: white;
    height: fit-content;
    display: flex;
    justify-content: start;
    align-items: start;
    position: inherit;
    width: 120px;
    margin: 5%;
    border-radius: 42px;
    padding: 4px 10px;
    font-size: 16px;
  }

  img {
    width: 223px;
    height: 315px;
    text-align: center;
    justify-content: center;
    display: grid;
    object-fit: contain;
    place-items: center;
    margin: auto;
  }

  .text {
    color: #949494;
  }

  .card-title {
    font-size: x-large;
    margin: 0 5%;
  }

  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5%;
    margin-top: 10%;
  }

  .cardbodyleft {
    display: flex;
    flex-direction: column;
  }

  .cardbodyright {
    justify-content: right;
  }

  /* .rentnow {
        text-align: right;
        justify-content: right;
        background-color: white;
        text-decoration: none;
        color: #666666;
    } */

  .carbtn {
    border: 2px solid #cfcfcf;
    border-radius: 40px;
    font-size: larger;
    padding: 10px 20px;
    cursor: pointer;
    color: #666666;
    background-color: white;
  }
</style>
