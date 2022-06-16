<script>
  import Carousel from "svelte-carousel";
  import SlideShowImg from "../assets/slideshow-img.svg";
  import bags from "../assets/bags.png";
  let carousel;
  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>

<div class="carousel">
  <Carousel bind:this={carousel} arrows={false}>
    <div class="slide-container">
      <img src={bags} alt="" class="slide-img" />
      <img src={SlideShowImg} alt="" class="slide-bg-img" />
    </div>
    <div>2</div>
    <div>3</div>
    <div class="dots" slot="dots">
      <div
        on:click={() => {
          carousel.goTo(0);
        }}
        class="carousel-dot active-dot"
      />
      <div
        on:click={() => {
          carousel.goTo(1);
        }}
        class="carousel-dot"
      />
      <div
        on:click={() => {
          carousel.goTo(2);
        }}
        class="carousel-dot"
      />
    </div>
  </Carousel>
</div>

<style>
  .carousel {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .dots {
    display: flex;
    position: absolute;
    bottom: 40px;
    width: 20%;
    justify-content: space-evenly;
  }
  .carousel-dot {
    height: 7px;
    width: 60px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.6);
  }
  .carousel-dot.active-dot {
    background-color: white;
  }
  .carousel-dot:hover {
    cursor: pointer;
  }
  .slide-container {
    position: relative;
  }
  .slide-img {
    position: absolute;
    top: 10%;
    width: 28%;
    left: 3%;
  }
</style>
