<script>
  import StarRating from "svelte-stars-rating";
  1;

  export let cardTitle = "Title";
  export let price = 0;
  export let imgSrc = "";
  export let cfScore = 0;
  export let rating = 1;

  let style = {
    styleStarWidth: 25,
    styleEmptyStarColor: "#737373",
    styleFullStarColor: "#ffd219",
  };
</script>

<div class="homeRectCard">
  <div class="image">
    <img src={imgSrc} alt={cardTitle} />
    <div class="cfScore">
      <p>CFScore: {cfScore}</p>
    </div>
  </div>
  <div class="divider" />
  <div class="content">
    <h2 class="title">{cardTitle}</h2>
    <StarRating {rating} {style} isIndicatorActive={false} />
    <div class="price">
      <p>starting at</p>
      <span>{price}/month</span>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
  .title {
    outline: none;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
  .homeRectCard {
    display: flex;
    width: 40vw;
    height: 30vh;
    border: 4px solid #d9d9d9;
    border-radius: 30px;
    padding: 0px 5px;
    font-family: "Josefin Sans", sans-serif;
  }

  .divider {
    background-color: rgba(217, 217, 217, 0.32);
    height: 95%;
    width: 5px;
    align-self: center;
  }

  .image {
    display: flex;
    position: relative;
    padding: 5px;
    flex: 1 1 50%;
    justify-content: center;
  }

  .image img {
    height: 100%;
    width: auto;
  }

  .cfScore {
    background-color: #48a259;
    color: white;
    height: fit-content;
    position: absolute;
    bottom: 8%;
    left: 5%;
    border-radius: 42px;
    padding: 4px 10px;
    font-size: 16px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0 0 20px;
    flex: 1 1 50%;
    margin-right: 1rem;
  }

  .content h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .price {
    color: rgba(0, 0, 0, 0.42);
    margin-top: 0.5rem;
  }

  .price span {
    font-size: 1.8rem;
    font-weight: normal;
    color: black;
  }

  /* Media Queries */
  @media (max-width: 1300px) {
    .homeRectCard {
      padding: 0px 0px;
    }
    * {
      font-size: 0.7rem;
    }
    .content h2 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1080px) {
    * {
      font-size: 0.5rem;
    }
    .image {
      /* flex-basis: 50%; */
      height: 90%;
      align-self: center;
    }
    .homeRectCard {
      height: 200px;
    }
    .price span {
      font-size: 1.3rem;
    }
  }
</style>
