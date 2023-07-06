<template>
    <section class="news">
        <article class="title">
            <h3>NEWS</h3>
            <h6></h6>
        </article>

        <div>
            <article class="calender">
            <CalenderCompo></CalenderCompo>
                <div class="color">
                    <h5 class="closes"></h5>
                    <p>:close</p>
                </div>
                <div>
                    <h5>※We close every Tuesday, X'MAS and New Year Day</h5>
                </div>
            </article>
            <article class="another">
                <img src="/img/marulilu02.jpg" alt="marulilu_tapestory">
            </article>
        </div>
        <div id="access"></div>
    </section>
</template>
<script>
import CalenderCompo from './CalenderCompo.vue';

export default {
    name:'NewsCompo',
    components:{
        CalenderCompo
    }
}
</script>

<style scoped>
@media (min-width: 300px) {

    h3 {
        text-align: center;
        font-size: 30px;
        font-family: 'Rye',cursive;
        padding-top: 40px;
        font-weight: 400;
        color: rgba(142, 94, 69, 1);
    }

    h5 {
        font-size: 15px;
    }

    h6 {
        width: 60%;
        border-bottom: 3px solid rgba(142, 94, 69, 1);
        margin-bottom: 20px;
    }


    p {
        font-size: 18px;
    }


    .news {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        width: 100%;
        padding-bottom: 40px;
    }

    .news > div {
        width: 80%;
        color: black;
        text-align: center;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .calender {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 40px;
        row-gap: 20px;
    }

    .calender > div {
        width: 100%;
    }

    .color {
        display: flex;
    }
    
    .closes {
        width: 14.25%;
        height: 25px;
        background-color: #ED6D3D;
    } 
    .another {
        display: none;
    }
}

@media (min-width:800px) {

    h3 {
        font-size: 45px;
    }

    h4 {
        font-size: 35px;
    }

    p {
        font-size: 19px;
    }

    ul {
        font-size: 18px;
        width: 100%;
    }

    .news > div {
        display: flex;
        justify-content: center;
        width: 100%;
        column-gap: 5%;
    }

    .calender {
        width: 40%;
    }

    .closes {
        height: 26px;
        background-color: #ED6D3D;
    }
    .another {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .another > img{
        width: 100%;
        border-radius: 30px;
    }
}

@media (min-width:800px) {
    .calender {
        padding-top: 40px;
    }
}

</style>
