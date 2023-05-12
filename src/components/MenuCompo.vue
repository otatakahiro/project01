<template>
        <section class="menu">
            <article class="title">
            <h3>MENU</h3>
            <h6></h6>
            </article>

            <article class="mobile-order">
                <a href="#" class="btn btn-flat">
                    <span><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Order Here <font-awesome-icon icon="fa-solid fa-cart-shopping" /></span>
                </a>
            </article>

            <article class="menu-title">

                <div>
                    <router-link class="router-link" v-for='(menu,index) in menus' :key='index' :to='menu.path' @click='move'>
                        <img :src="menu.src" :alt="menu.src">
                        <span class="tospace"></span>
                        <h5 class="menu-link">{{menu.title}}</h5>
                    </router-link>
                    <router-view></router-view>
                </div>
            </article>

            <article class="menutopbutton">
                <a type="button" href="#moveto" class="menutop" @click='move'>Menu Top<font-awesome-icon icon="fa-solid fa-angles-up" /></a>
            </article>

            <div id="news"></div>
        </section>
</template>
<script>

export default {
    name:'MenuCompo',
    data() {
        return {
            menus: [
                {title: 'ALL-DAY BREAKFASTS', href: 'breakfast', src:'img/doublebenny.jpg', path:'/breakfast',name:'Breakfast Menu'},
                {title: 'JAPANESE DISH & YOSHOKU', href: 'dish', src:'img/omu.jpg', path:'/jpndish',name:'Jpn Dish Menu'},
                {title: 'JAPANESE SIDE MENU', href: 'side', src:'img/katsu.jpg', path:'/jpnside',name:'Jpn Side Menu'},
                {title: 'MONTHLY SPECIAL', href: 'monthly', src:'img/katsu.jpg', path:'/monthly',name:'Monthly Menu'},
                {title: 'SWEET & DESSERTS', href: 'sweets', src:'img/pudd.jpg', path:'/sweets',name:'Sweets Menu'},
                {title: 'BEVERAGES', href: 'beverage', src:'img/matcharate.jpg', path:'/beverages',name:'Beverages Menu'},
            ],
            curretPath:'',
        }
    },
    methods:{
        move() {
            const moving = document.getElementsByClassName("tospace")[5];
            const moveTo = "moveto";
            moving.setAttribute("id",moveTo);
            let movetoHeight = document.getElementById('moveto');
            console.log(movetoHeight)
            movetoHeight.scrollIntoView({
                behavior:'smooth',
                block:'start',
                transition:'5s',
            });
        }
    }
}
</script>

<style scoped>

@media (min-width: 300px){

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

    h3 {
        text-align: center;
        font-size: 30px;
        font-family: 'Rye',cursive;
        padding-top: 40px;
        font-weight: 400;
    }

    h6 {
        width: 60%;
        border-bottom: 3px solid;
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
        background: #D6C6B9;
    }

    a.btn-flat:hover:before {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(142, 94, 69, .6);
        padding-bottom: 50px;
        color: white;
        row-gap: 30px;
    }
        

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mobile-order {
        width: 90%;
        display: flex;
        justify-content: space-around;
    }

    .menu-title {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-title > div{
        width: 98%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 30px;
    }

    .router-link{
        color: white;
        text-decoration: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        align-items: center;
        width: 50%;
        height: 50%;
        position: relative;
    }

    .router-link:hover{
        color: #ED6D3D;
        text-decoration: underline dotted #ED6D3D 5px;
    }

    .menu-title img {
        width: 80%;
    }

    .tospace {
        position: absolute;
        top: 78%;
    }

    .router-link h5 {
        font-size: 16px;
        font-family: 'Rye',cursive;
        font-weight: 400;
    }

    .menutopbutton {
        width: 90%;
    }

    .menutopbutton > a {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 32%;
        font-size: 16px;
        padding: 2%;
        margin-left: auto;
        background-color: #97B8C2;
        color: antiquewhite;
        text-decoration: none;
        border-radius: 10px; 
    }

    .menutopbutton > a:hover {
        color: #ED6D3D;
        background-color: antiquewhite;
    }

}

@media (min-width: 800px) {
    
    h3 {
        font-size: 45px;
    }

    .btn,
    a.btn,
    button.btn {
        font-size: 23px;
        padding: 15px;
    }

    .menu-title > div {
        width: 100%;
        justify-content: space-evenly;
        row-gap: 25px;
    }

    .menu-title a{
        z-index: 1;
        width: 30%;
    }

    .menu-title a > img {
        width: 100%;
    }

    .router-link h5 {
        font-size: 20px;
    }



    .menutopbutton > a {
        width: 20%;
        font-size: 18px;
        padding: 1%;
    }
}

@media (min-width:1200px) {
    .menu-title a{
        z-index: 1;
        width: 30%;
    }

    .menu-title a > img {
        width: 85%;
    }
}

</style>
