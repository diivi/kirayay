<script>
  import headerBg from "../assets/header-bg.png";
  export let headerTitle;
</script>

<div class="header">
  <div class="overlay" />
  <img src={headerBg} alt="" class="header-bg" />
  <h1 class="header-title">
    {headerTitle}
  </h1>
</div>

<style>
  .header {
    position: relative;
    height: 60vh;
    width: 100vw;
    background-size: cover;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 67vh;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .header-title {
    color: white;
    z-index: 1;
    font-family: "Open Sans";
    position: absolute;
    bottom: 0;
    left: 5vw;
    font-size: 4rem;
  }
</style>
