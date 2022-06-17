<script>
    import Card from "./Card.svelte";
    import Jacketimg from "../assets/jacket.png";
    import Bagimg from "../assets/bag.png";
    import Cycleimg from "../assets/cycle.png";
    import Sofaimg from "../assets/sofa.png";
    import Bookimg from "../assets/book.png";
    import CardText from "./CardText.svelte";
</script>

<div class="homelisting">
    <CardText
        topic="MEN"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"
    />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
    <Card cardimgsrc={Bagimg} cardamount="1400" />

    <CardText
        topic="BIHAR"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"
    />
    <Card cardimgsrc={Bookimg} cardamount="1400" />
    <Card cardimgsrc={Cycleimg} cardamount="1400" />

    <CardText
        topic="PATNA"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"
    />
    <Card cardimgsrc={Sofaimg} cardamount="1400" />
    <Card cardimgsrc={Jacketimg} cardamount="1400" />
</div>

<style>
    .homelisting {
        display: flex;
        margin-top: -40px;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0px 0vw;
        transform: scale(0.9);
    }
</style>
