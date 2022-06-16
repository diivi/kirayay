<script>
    import Card from "./Card.svelte";
    import CardText from "./CardText.svelte";
</script>

<div class="homelisting">
    <CardText topic="MEN" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"/>
    <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
    <Card cardimgsrc="src/assets/bag.png" cardamount="1400" />

    <CardText topic="BIHAR" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"/>
    <Card cardimgsrc="src/assets/book.png" cardamount="1400" />
    <Card cardimgsrc="src/assets/cycle.png" cardamount="1400" />

    <CardText topic="PATNA" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amsfdfet, consectetur adipiscing eli"/>
    <Card cardimgsrc="src/assets/sofa.png" cardamount="1400" />
    <Card cardimgsrc="src/assets/jacket.png" cardamount="1400" />
</div>

<style>
    .homelisting {
        display: flex;
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-left: 0;
    }
</style>
