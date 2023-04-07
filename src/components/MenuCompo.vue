<template>
        <section class="menu">
            <article class="title">
            <h3>MENU</h3>
            <h6></h6>
            </article>

            <article class="mobile-order">
                <button>Order</button>
            </article>

            <article class="menu-title">

                <div>
                    <router-link class="router-link" v-for='(menu,index) in menus' :key='index' :to='menu.path' @click='move'>
                        <img :src="menu.src" :alt="menu.src">{{menu.title}}
                    </router-link>
                    <router-view id="moveto"></router-view>
                </div>
                <img src="/img/katsu.jpg" alt="">
            </article>

            <article class="menutopbutton">
                <a type="button" href="#moveto">Menu Top<font-awesome-icon icon="fa-solid fa-angles-up" /></a>
            </article>

            <div id="news"></div>
        </section>
</template>
<script>
// import { faTextHeight } from '@fortawesome/free-solid-svg-icons'

export default {
    name:'MenuCompo',
    data() {
        return {
            menus: [
                {title: 'ALL-DAY BREAKFASTS', href: 'breakfast', src:'img/katsu.jpg', path:'/breakfast',name:'Breakfast Menu'},
                {title: 'JAPANESE DISH & YOSHOKU', href: 'dish', src:'img/katsu.jpg', path:'/jpndish',name:'Jpn Dish Menu'},
                {title: 'JAPANESE SIDE MENU', href: 'side', src:'img/katsu.jpg', path:'/jpnside',name:'Jpn Side Menu'},
                {title: 'MONTHLY SPECIAL', href: 'monthly', src:'img/katsu.jpg', path:'/monthly',name:'Monthly Menu'},
                {title: 'SWEET & DESSERTS', href: 'sweets', src:'img/katsu.jpg', path:'/sweets',name:'Sweets Menu'},
                {title: 'BEVERAGES', href: 'beverage', src:'img/katsu.jpg', path:'/beverages',name:'Beverages Menu'},
            ],
            curretPath:'',
        }
    },
    methods:{
        move(){
            let movetoHeight = document.getElementById('moveto');
            movetoHeight.scrollIntoView({
                behavior:'smooth',
                block:'start',
                
            });
        }
    }
}
</script>

<style scoped>

@media (min-width: 300px){

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
    
    .mobile-order > button {
        font-size: 25px;
        width: 40%;
        height: 60px;
        border-radius: 15px;
        background-color: #dfc6b5;
        color: rgba(142, 94, 69, 1);
        font-weight: 600;
        margin: 30px;
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(142, 94, 69, .6);
        padding-bottom: 60px;
        color: white;
        row-gap: 10px;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mobile-order {
        width: 100%;
        text-align: center;
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
        row-gap: 10px;
    }

    .router-link{
        font-size: 17px;
        font-family: 'Rye',cursive;
        color: white;
        text-decoration: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        align-items: center;
        width: 50%;
        height: 50%;
    }

    .router-link:hover{
        color: #ED6D3D;
        text-decoration: underline dotted #ED6D3D 5px;
    }

    .menu-title img {
        width: 80%;
        height: 75%;
    }

    .menu-img {
        display: none;
    }

    .menu-title > img {
        display: none;
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
        background-color: #ED6D3D;
        color: antiquewhite;
        text-decoration: none;
        border-radius: 10px; 
    }

    .menutopbutton > a:hover {
        color: #ED6D3D;
        background-color: antiquewhite;
    }

    .picture2{
        background-image: url('/public/img/udon.jpg');
    }
}

@media (min-width: 800px) {
    
    h3 {
        font-size: 45px;
    }

    #moveto {
        padding-top: 70px;
    }

    .menu-title > div {
        width: 100%;
        justify-content: space-evenly;
    }

    .menu-title a{
        font-size: 20px;
        z-index: 1;
        width: 30%;
    }

    .menu-title a > img {
        width: 100%;
    }

    .menu-title > img {
        height: 100%;
        width: 50%;
        left: 50%;
        border-radius: 30px 0 0 30px;
    }

    .menutopbutton > a {
        width: 20%;
        font-size: 18px;
        padding: 1%;
    }
}

@media (min-width:1200px) {

}

</style>
