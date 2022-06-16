<script>
  import HomeRectCard from "../components/HomeRectCard.svelte";
</script>

<div class="home-nav">
  <p>All Products</p>
  <p>Clothing</p>
  <p>Toys</p>
  <p>Books</p>
  <p>Sports Equipment</p>
  <!-- <HomeRectCard
    rating={4}
    cardTitle="Svelte"
    cfScore={5}
    price={4255}
    imgSrc="src/assets/svelte.png"
  /> -->
</div>

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
</style>
