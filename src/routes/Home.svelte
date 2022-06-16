<script>
<<<<<<< HEAD
import CardText from "../components/CardText.svelte";
import Card from "../components/Card.svelte";
import HomeRectCard from "../components/HomeRectCard.svelte";
import HomeListing from "../components/HomeListing.svelte";
=======
  import HomeRectCard from "../components/HomeRectCard.svelte";
  import HomeCarousel from "../components/HomeCarousel.svelte";
>>>>>>> 6839a83b9f8e3a257af5226c21b2a035c98409e6
</script>

<div class="home-nav">
  <p>All Products</p>
  <p>Clothing</p>
  <p>Toys</p>
  <p>Books</p>
  <p>Sports Equipment</p>
</div>
<div class="carousel-container">
  <HomeCarousel />
</div>
<div class="rect-cards">
  <HomeRectCard
    rating={4}
    cardTitle="Svelte"
    cfScore={5}
    price={4255}
    imgSrc="src/assets/svelte.png"
  />
  <HomeRectCard
    rating={4}
    cardTitle="Svelte"
    cfScore={5}
    price={4255}
    imgSrc="src/assets/svelte.png"
  />

  
</div>
<HomeListing />

<style>
  .home-nav {
    display: flex;
    justify-content: space-between;
    background-color: #48a259;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    padding: 12px 20vw;
  }
  .carousel-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5vh 0px;
  }
  .rect-cards {
    display: flex;
    justify-content: space-evenly;
  }
</style>
