<template>
    <section class="top">
        <!-- <article class="mobile-order">
            <a href="#" class="btn btn-flat">
                <span><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Order Here <font-awesome-icon icon="fa-solid fa-cart-shopping" /></span>
            </a>
        </article> -->

        <article class="introduction">
            <img :src="require('/public/img/marulilu01.jpg')" alt='malu' />
            <p>Marulilu cafe is a Japanese style cafe at West Broadway, Vancouver. We provid coffee, tea and Japanese meals popular in Japan like Omu-Rice and Curry-Rice. You would have great time at Marulilu cafe. We are looking forward to see you !! See you soon ! <font-awesome-icon icon="far fa-face-smile-wink" /></p>
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
        color: #D6C6B9;
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
        font-size: 15px;
        text-align: left;
    }

    .introduction {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        align-items: center;
    }
    .introduction > img {
        width: 90%;
        border-radius: 30px;
    }
    .introduction p{
        background-color: rgba(256, 256, 256, .4);
        color: rgba(142, 94, 69, 1);
        width: 80%;
        border-radius: 30px;
        padding: 2% 5%;
    }
}

@media (min-width:800px){
        
    .btn,
    a.btn,
    button.btn{
        font-size: 23px;
        padding: 15px;
    }

    .announcement li{
        font-size: 18px;
    }

    .introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        width: 100%;
    }

    .introduction > img {
        height: 40%;
        width: 90%;
        border-radius: 50px;

    }

    .introduction > p{
        font-size: 19px;
        background-color: rgba(256, 256, 256, .4);
        color: rgba(142, 94, 69, 1);
        padding: 5%;
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