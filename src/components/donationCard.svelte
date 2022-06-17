<script>
  let selected;
  export let cardID = 0;
  export let cancelFunction;

  let categories = ["", "Clothing", "Books", "Books", "Sports Equipemnts"];

  let img1;

  function insertImage(e) {
    console.log(e.target.value);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      img1 = reader.result;
      const div = document.querySelector(` ${this} .img1 img`);
      div.setAttribute("src", img1.toString());
      console.log("here" + img1.toString());
    });
    reader.readAsDataURL(this.files[0]);
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="formCard">
  <div class="cancel" on:click={cancelFunction} data-cid={`${cardID}`}>
    <i class="fa-solid fa-x" />
  </div>
  <form action="">
    <div class="upperDiv">
      <div class="upperFields">
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Your Name"
        />
        <input
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Item Name"
        />
        <select>
          <option disabled selected>Select your option</option>
          {#each categories as category}
            <option value={category}>
              {category}
            </option>
          {/each}
        </select>
        <i class="fa fa-chevron-down" />
      </div>

      <div class="imageContainer">
        <div class="img1 image">
          {#if img1}
            <img src={`${img1.toString()}`} alt="" />
          {/if}

          {#if !img1}
            <label for="image1" class="imageLabel">
              <i class="fa-solid fa-circle-plus" />
              <span
                ><input
                  on:change={insertImage}
                  type="file"
                  name="image"
                  id="image1"
                  accept="image/png, image/jpg"
                /></span
              >
            </label>
          {/if}
        </div>
        <div class="img2 image" />
        <div class="img3 image" />
        <div class="img4 image" />
      </div>
    </div>
    <div class="lowerDiv">
      <textarea
        name="description"
        id="description"
        cols="70"
        rows="8"
        placeholder="Description"
      />
    </div>
  </form>
</div>

<!-- Styling -->
<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .formCard {
    background-color: rgba(0, 0, 0, 0.05);
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    /* width: 70%; */
    position: relative;
    margin-bottom: 3rem;
    border-radius: 22px;
  }

  .cancel {
    background-color: #48a259;
    color: white;
    font-size: 1.2rem;
    border-radius: 50px;
    padding: 0.4rem 0.8rem;
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
  }

  .cancel i {
    pointer-events: none;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-left: 3rem;
    padding: 2rem 0;
  }

  input,
  select {
    border-radius: 22px;
    height: 3rem;
    padding: 8px 20px;
    width: 80%;
    margin: 1rem;
    margin-bottom: 1.5rem;
    border: none;
  }

  select {
    color: grey;
    margin-bottom: 0.5rem;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }

  select + i.fa {
    position: relative;
    float: right;
    margin-top: -13%;
    margin-right: 19%;
    height: 1rem;
    font-size: 1.2rem;
    width: auto;
    /* this is so when you click on the chevron, your click actually goes on the dropdown menu */
    pointer-events: none;
    /* everything after this is just to cover up the original arrow */
    /* (for browsers that don't support the syntax used above) */
    background-color: #fff;
    padding-right: 5px;
  }
  .formCard textarea {
    border-radius: 22px;
    /* height: 3rem; */
    padding: 20px 20px;
    width: 90%;
    margin: 1rem;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    resize: none;
    border: none;
  }

  textarea:focus,
  input:focus,
  select:focus {
    border: 3px solid #48a259;
    outline: none;
  }

  .upperDiv {
    display: flex;
    justify-content: space-between;
  }
  /* 
    .upperFields {
      flex: 1 2 60;
    } */

  .imageContainer {
    display: grid;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1px;

    border: none;
    position: relative;
    right: 8%;
    /* flex: 1 1 40%; */
  }

  .image {
    background-color: rgb(255, 255, 255);
    height: 7rem;
    width: 7rem;
    margin: 0.5rem;
    border-radius: 22px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    overflow: hidden;
  }

  label.imageLabel {
    /* width: 120px;
      height: 40px; */
    overflow: hidden;
    position: relative;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-self: center;
  }

  label span input {
    z-index: 999;
    line-height: 0;
    font-size: 50px;
    position: absolute;
    top: -2px;
    left: -700px;
    opacity: 0;
    filter: "alpha(opacity = 0)";
    -ms-filter: "alpha(opacity=0)";
    cursor: pointer;
    _cursor: hand;
    margin: 0;
    padding: 0;
  }
  /* 
    .imageContainer {
      margin: 1rem;
    } */

  .imageContainer img {
    width: auto;
    height: 100%;
    border-radius: 22px;
  }
</style>
