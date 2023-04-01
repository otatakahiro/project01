<template>
    <section class="top">
        <article class="mobile-order">
            <button href="#">Order</button>
        </article>

        <article class="announcement">
            <ul>
                <li v-for='(anouncement, index) in announcements' :key='index'>{{anouncement.news}}</li>
            </ul>
        </article>

        <article class="introduction">
            <img :src="require('/public/img/sign.jpg')" alt='malu'>
            <p>Marulilu cafe is a very 喫茶店 (Kissa-ten) style cafe at Broadway, Vancouver.
In Japan, not only coffee/tea and some snacks but also some Japanese meals are provided.
Especially, 洋食 (Yo-shoku) which means western style meals is enjoyed in 喫茶店for example Omu-rice and Curry-rice. Also you can enjoy some traditional/native-popular Japanese meals in Marulilu cafe; you have to know Japanese foods are not only sushi and tempura. Marulilu cafe is only one place to experience the real Japanese-style foods and drinks in Vancouver.</p>
        </article>
    </section>
</template>

<script>
export default {
    name:'TopCompo',
    data(){
        return {
            announcements: [
                {news:'Mon, Wed - Fri 8:00 AM - 6:00 PM'},
                {news:'Sat - Sun 8:30 AM - 6:00 PM'},
                {news:'Holiday 9:00 AM - 6:00 PM'},
                {news:'We close on Tuesday'},
                {news:"We close on X'MAS and New Year"},
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
        width: 100%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    
    button{
        font-size: 28px;
        width: 40%;
        padding: 0 30px;
        height: 60px;
        border-radius: 15px;
        background: rgba(142, 94, 69, 1);
        color: white;
        font-weight: 600;
        text-align: center;
    }

    .announcement {
        width: 92%;
    }

    .announcement > ul {
        width: 100%;
    }    
    
    .announcement li{
        border-bottom: 2px dashed rgba(142, 94, 69, 1);    
        color: rgba(142, 94, 69, 1);
        /* color: white; */
        list-style: none;
        padding: 3px;
        font-size: 19px;
        width: 100%;
    }
    
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