<script>
    export let topic="";
    export let text="";
</script>

<div class="cardtext">
    <div class="inside">
        <div class="text">
            <span>{topic}</span>
            <p>
               {text}
            </p>
        </div>

        <button class="listingcardbutton"> View More </button>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
    * {
        font-family: "Josefin Sans", sans-serif;
    }
    .cardtext {
        min-width: 400px;
        min-height: 500px;
        border: 3px solid #e8e8e8;
        border-radius: 20px;
        flex: 0 0 27.77%;
        background-color: #F5F5F5;
        margin-top: 3%;
    }

    .text{
        margin-top:65px;
    } 
    .text span{
        font-weight: 1000;
        font-size: xx-large;
       
    }
    .text p{
        margin-right: 25%;
        font-size: 20px;
    }
    .inside{
        margin: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .listingcardbutton {
        border: 2px solid;
        border-radius: 40px;
        font-size: larger;
        font-weight: 100;
        padding: 10px 20px;
        color: WHITE;
        width: fit-content;
        cursor: pointer;
        background-color: #48a259;
        position: relative;
        top: 100%;
        margin-top: 220px;
        bottom: 0%;
    }

    /* @media (max-width: 680px){
        .cardtext{
            flex: 0 0 50%;       
        }
    } */
</style>
