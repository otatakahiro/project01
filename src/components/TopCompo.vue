<template>
    <section class="top">
        <article class="mobile-order">
            <button href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Order Here <font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
            <!-- <button><img src="/img/ubereats.png" alt="uber"> 
            </button> -->
            <!-- <button href="#">DoorDash</button> -->
        </article>
        <!-- <article class="announcement">
            <h5>Hours</h5>
            <ul class="for-open">
                <li v-for='(anouncement, index) in openannouncements' :key='index'>{{anouncement.news}}</li>
            </ul>
            <ul class="for-close">
                <li v-for='(anouncement,index) in closeannouncements' :key='index'>{{anouncement.news}}</li>
            </ul>
        </article> -->

        <article class="introduction">
            <img :src="require('/public/img/sign.jpg')" alt='malu'>
            <p>Marulilu cafe is a very 喫茶店 (Kissa-ten) style cafe at Broadway, Vancouver.
In Japan, not only coffee/tea and some snacks but also some Japanese meals are provided.
Especially, 洋食 (Yo-shoku) which means western style meals is enjoyed in 喫茶店for example Omu-rice and Curry-rice. Also you can enjoy some traditional/native-popular Japanese meals in Marulilu cafe; you have to know Japanese foods are not only sushi and tempura. Marulilu cafe is only one place to experience the real Japanese-style foods and drinks in Vancouver.</p>
        </article>
        <div id="menu"></div>
    </section>
</template>

<script>
export default {
    name:'TopCompo',
    data(){
        return {
            openannouncements: [
                {news:'Mon, Wed - Fri 8:00 AM - 6:00 PM'},
                {news:'Sat - Sun 8:30 AM - 6:00 PM'},
                {news:'Holiday 9:00 AM - 6:00 PM'}
            ],
            closeannouncements: [
                {news:'We close on Tuesday'},
                {news:"We close on X'MAS and New Year"}
            ]
        }
    }
}
</script>

<style scoped>
/* *{
    padding: 0;
    margin: 0;
} */

@media (min-width: 300px) {
    h5 {
        font-size: 18px;
        color: black;
        text-align: center;
    }

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 40px;
        padding: 40px 0 40px 0;
        /* background: #BF9A77; */
        color: #D6C6B9;
        /* background-color: #D6C6B9; */
    }

    .mobile-order {
        width: 90%;
        display: flex;
        justify-content: space-around;
    }

    button{
        font-size: 20px;
        letter-spacing: 2px;
        /* width: 45%; */
        padding: 5px;
        /* height: 40px; */
        border-radius: 10px;
        background: rgba(142, 94, 69, 1);
        background-color: #E45E00;
        background-color: #FF5D20;
        background-color: #ED551B;
        background-color: #FD7E00;
        background-color: #E7552C;
        background-color: #D55448;
        background-color: #FFA577;
        background-color: #FF8D3F; 
        background-color: #D35C37;
        background-color: #F78B2D;
        background-color: #FA8D62;
        background-color: #D6C6B9;
        background-color: #F47D4A;
        background-color: #EB8A3E;
        background-color: #dfc6b5;
        color: black;
        font-weight: 600;
        text-align: center;
    }

    .announcement {
        width: 92%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
    }

    .for-open,
    .for-close {
        display: flex;
        flex-direction: column;
    }    

    .for-open > li,
    .for-close > li {
        color: black;
        list-style: square;
        /* width: 100%; */
        font-size: 15px;
        text-align: left;
    }
    
    /* .for-close > li {

    }
     */
    .introduction > img {
        width: 100%;
    }
    .introduction p{
        display: none;
    }
}

@media (min-width:800px){
        
    .announcement li{
        font-size: 18px;
    }

    .introduction {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: 100%;
        /* position: relative; */
    }

    .introduction > img {
        height: 40%;
        width: 100%;
        border-radius: 0 30px 30px 0;
        /*  横からアニメーション*/
    }

    .introduction > p{
        display: unset;
        font-size: 19px;
        background-color: rgba(256, 256, 256, .4);
        color: rgba(142, 94, 69, 1);
        padding: 5%;
        border-radius: 30px 0 0 30px;
        /*  横からアニメーション*/
    }
}

@media (min-width:1200px){

    .announcement {
        width: 93%;
        padding-bottom: 20px;
        border: 2px dashed rgba(142, 94, 69, 1);
        background-color: bisque;
    }

    .announcement > ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        column-gap: 2%;
        padding-left: 3%;
    }

    .announcement li{
        width: 30%;
        padding-top: 2%;
        list-style: square;
        font-size: 16px;
    }

}


</style>