<script>
  import Header from "../components/Header.svelte";

  import DonationCard from "../components/donationCard.svelte";

  import { writableArray, count } from "../../res/donationResources/store";

  // $storeFE = [];
  let cardArray = [];
  // idIncrement.set(1);
  let numberID = 0;
  function addItem() {}

  function addNewCard() {
    $writableArray = [
      ...$writableArray,
      {
        cardID: $count++,
      },
    ];
    numberID = $writableArray.length;
  }

  function deleteCard(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
</script>

<Header headerTitle="Donate" />

<section class="donation_main">
  <div class="content">
    <div class="left-div">
      <img src="res\donationResources\Help.png" alt="help_icon_png" />
      <div class="text">
        <h2>Don’t have space for your old items? We’ve got plenty!</h2>
        <p>
          Kirayay! believes in the concept of re-use so if you’ve got any items
          that you can find no use of then we are ready to take them into our
          hands and <span>break the cycle of buy more.</span> We will simply list
          them at a lesser price after a thorough quality check.
        </p>
      </div>
    </div>
    <div class="right-div">
      <p>
        Out of ideas for <span>proper disposable</span> of your old items or just
        too lazy? Kirayay! will do all of that for you!
      </p>
      <div class="text">
        <img src="res/donationResources/CO2.png" alt="help_image" />

        <p>
          Your donation will help us provide a wider variety of products at
          lesser prices helping us create <span
            >sustainability accessible for all.</span
          >
        </p>
      </div>
    </div>
  </div>
  <!-- Form Starting -->
  <div class="form">
    <DonationCard cancelFunction={deleteCard} />
    <ul>
      {#each $writableArray as item}
        <li>
          <DonationCard cancelFunction={deleteCard} cardID={numberID} />
        </li>
      {/each}
    </ul>
  </div>
  <div class="buttonContainer">
    <button class="addfieldBtn" on:click={addNewCard}>Add Field</button>
    <button class="submitBtn">Submit</button>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@700&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 2rem;
  }

  h2 {
    font-size: 2.063rem;
    margin-bottom: 0.5rem;
    font-family: "Open Sans", sans-serif;
    color: #48a259;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;

    font-family: "Inter", sans-serif;
  }
  span {
    font-size: 1.25rem;
    color: #48a259;
  }
  section {
    margin: 0 8vw;
  }
  .content {
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }

  .left-div {
    flex: 2 1 60%;

    position: relative;
    margin-right: 10rem;
  }
  .right-div {
    flex: 1 1 40%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .left-div img {
    float: left;
    /* position: relative; */
  }

  .left-div .text {
    /* float: right; */
    margin-left: 5rem;
  }
  .right-div img {
    position: absolute;
    top: 40%;
    left: -5rem;
  }

  .right-div .text {
    display: flex;
    flex-direction: row;
  }

  /* Item Addition Section */

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form ul {
    list-style-type: none;
  }

  .buttonContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }

  button {
    border: none;
    margin: 0 1rem;
    border-radius: 40px;
    font-size: 1rem;
    padding: 15px 40px;
    cursor: pointer;
    color: white;
    background-color: rgb(255, 0, 0);
  }

  .addfieldBtn {
    background-color: black;
  }

  .submitBtn {
    background-color: #48a259;
  }
</style>
