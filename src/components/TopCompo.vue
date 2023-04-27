<template>
    <section class="top">
        <article class="mobile-order">
            <a href="#" class="btn btn-flat">
                <span><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Order Here <font-awesome-icon icon="fa-solid fa-cart-shopping" /></span>
            </a>
        </article>

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
}
</script>

<style scoped>

@media (min-width: 300px) {
    *,
    *:before,
    *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    h5 {
        font-size: 18px;
        color: black;
        text-align: center;
    }

    .btn,
    a.btn,
    button.btn {
        font-size: 20px;
        font-weight: 700;
        position: relative;
        display: inline-block;
        padding: 5px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        color: #212529;
        border-radius: 10px;
    }

    a.btn-flat {
        overflow: hidden;
        padding: 10px;
        color: #fff;
        border-radius: 10px;
        background: #000;
    }

    a.btn-flat span {
        position: relative;
    }

    a.btn-flat:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-96%);
        transform: translateX(-96%);
        background: rgba(142, 94, 69, 1);
    }

    a.btn-flat:hover:before {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
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