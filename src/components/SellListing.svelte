<script>
import Card from "./Card.svelte";
import Jacketimg from "../assets/jacket.png";


</script>

<div class="sellListing">
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
</div>

<style>
    .sellListing{
        flex: 8;
        display: flex;
        margin-left: 3%;
        /* margin-top: 20px; */
        flex-wrap: wrap;
        justify-content: space-around;
        padding-left: 0;
    }
</style>