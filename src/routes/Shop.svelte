<script>
  import SellListing from "../components/SellListing.svelte";
  import Filter from "../components/Filter.svelte";
</script>

<div class="shop">
  <Filter />
  <SellListing />
</div>

<style>
  .shop{
    display: flex;
    margin-right: 5%;
  }
</style>
