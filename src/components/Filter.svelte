<script>
  import StarRating from "svelte-stars-rating";
  let style = {
    styleStarWidth: 15,
    styleEmptyStarColor: "#737373",
    styleFullStarColor: "#ffd219",
  };
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

  // output.innerHTML = slider.value;

  // slider.oninput = function () {
  //   output.innerHTML = this.value;
  // };

  let singleValue = null;
  let rating = 5;

  let value = [10, 100];
</script>

<div class="container">
  <div class="filter subcon">
    <h1>Filter</h1>
  </div>
  <div class="categories subcon">
    <h1 class="heading checkbox-h1">Categories</h1>
    <ul>
      <div class="checkbox-row">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="stars">
          <li>All Products</li>
        </div>
      </div>

      <div class="checkbox-row">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="stars">
          <li>Clothing</li>
        </div>
      </div>

      <div class="checkbox-row">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="stars">
          <li>Electronics</li>
        </div>
      </div>

      <div class="checkbox-row">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="stars">
          <li>Books</li>
        </div>
      </div>

      <div class="checkbox-row">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
        <div class="stars">
          <li>Others</li>
        </div>
      </div>
    </ul>
  </div>

  <div class="price subcon">
    <h1>Price Range</h1>
  </div>

  <div class="condition subcon">
    <h1 class="heading checkbox-h1">Condition</h1>
    <div class="checkbox-row">
      <label class="container">
        <input type="checkbox" />
        <span class="checkmark" />
      </label>
      <div class="stars">
        <StarRating rating={5} {style} isIndicatorActive={false} />
      </div>
    </div>
    <div class="checkbox-row">
      <label class="container">
        <input type="checkbox" />
        <span class="checkmark" />
      </label>
      <div class="stars">
        <StarRating rating={4} {style} isIndicatorActive={false} />
      </div>
    </div>
    <div class="checkbox-row">
      <label class="container">
        <input type="checkbox" />
        <span class="checkmark" />
      </label>
      <div class="stars">
        <StarRating rating={3} {style} isIndicatorActive={false} />
      </div>
    </div>
  </div>

  <div class="cfscore subcon">
    <h1>CFScore</h1>
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="10"
        value="5"
        class="slider"
        id="myRange"
      />
    </div>
  </div>
</div>

<style>
  :root {
    font-family: "Inter";
  }
  .container{
    flex:4;
    position: sticky;
    text-align: left;
  }
  h1 {
    font-size: 20px;
    font-weight: 500;
    /* padding: 30px 0; */
  }

  .slider {
    --sliderPrimary: #ff9800;
    --sliderSecondary: rgba(0, 0, 0, 0.05);
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  .slidecontainer {
    max-width: 200px;
  }

  .container {
    max-width: 250px;
    /* padding-left: 4vw; */
    /* border: 2px solid rgba(0, 0, 0, 0.06); */
  }

  ul {
    list-style-type: none;
  }

  .subcon {
    padding: 30px 0;
    padding-left: 2vw;
    border: 2px solid rgba(0, 0, 0, 0.06);
  }

  .checkbox-row {
    display: flex;
    align-items: flex-start;
  }
  input[type="checkbox"] {
    accent-color: #04aa6d;
  }

  .stars {
    padding: 1px 0 0 5px;
  }

  .checkbox-h1 {
    padding-bottom: 20px;
  }
</style>
