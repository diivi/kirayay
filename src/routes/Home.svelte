<script>
  import CardText from "../components/CardText.svelte";
  import Card from "../components/Card.svelte";
  import HomeListing from "../components/HomeListing.svelte";
  import HomeRectCard from "../components/HomeRectCard.svelte";
  import HomeCarousel from "../components/HomeCarousel.svelte";
  import Filter from "../components/Filter.svelte";
  import Svelteimg from "../assets/svelte.png";
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
    imgSrc={Svelteimg}
  />
  <HomeRectCard
    rating={4}
    cardTitle="Svelte"
    cfScore={5}
    price={4255}
    imgSrc={Svelteimg}
  />
</div>
<HomeListing />

<style>
  :root {
    padding: 0 ;
  }

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
