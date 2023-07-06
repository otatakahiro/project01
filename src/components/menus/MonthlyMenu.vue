<template>
<div>
    <article id="monthly">
        <h2>MONTHLY</h2>
    </article>
    <article class="special-menu">
        <img src="/img/special/Monthly_SP_June_2023.jpg">
        <img src="/img/special/Morning_Happy_Hour_May_2023.jpg">
        <!-- このページでpdfをjpgにしてくださいhttps://pdftoimage.com/pdf-to-jpg -->
    </article>
</div>
</template>
<script>
export default {
    name:'MonthlyMenu',
}
</script>

<style scoped>

@media (min-width:300px){
    div {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    h2 {
        background-color: #97B8C2;
        font-family: 'Rye', cursive;
        text-align: center;
        font-weight: 400;
        padding: 5px;
    }

    #monthly {
        width: 100%;
    }

    .special-menu {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        align-items: center;
    }

    .special-menu > img {
        width: 90%;
    }
}

@media (min-width:800px) {

    h2 {
        font-size: 30px;
    }
        .special-menu {
        flex-direction: row;
        column-gap: 20px;
        justify-content: center;
    }

    .special-menu > img {
        width: 45%;
    }
}

@media (min-width:1200px) {
    div {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
}

</style>
