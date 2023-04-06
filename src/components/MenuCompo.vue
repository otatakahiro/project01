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
                    <router-link class="router-link" v-for='(menu,index) in menus' :key='index' :to='menu.path'>
                        <img :src="menu.src" :alt="menu.src">{{menu.title}}
                    </router-link>
                    <router-view></router-view>
                </div>
                <img src="/img/katsu.jpg" alt="">
            </article>

            <article class="menutopbutton">
                <a type="button" href="#menu">Menu Top<font-awesome-icon icon="fa-solid fa-caret-up" /></a>
            </article>



            <article class="menu-img">
                <img src="/img/katsu.jpg" alt="">
                <img src="/img/katsu.jpg" alt="">
                <img src="/img/katsu.jpg" alt="">
            </article>
        </section>
        
</template>
<script>

export default {
    name:'MenuCompo',
    data() {
        return {
            menus: [
                {title: 'ALL-DAY BREAKFASTS', href: '#', src:'img/katsu.jpg', path:'/breakfast',name:'Breakfast Menu'},
                {title: 'JAPANESE DISH & YOSHOKU', href: '#', src:'img/katsu.jpg', path:'/jpndish',name:'Jpn Dish Menu'},
                {title: 'JAPANESE SIDE MENU', href: '#', src:'img/katsu.jpg', path:'/jpnside',name:'Jpn Side Menu'},
                {title: 'MONTHLY SPECIAL', href: '#', src:'img/katsu.jpg', path:'/monthly',name:'Monthly Menu'},
                {title: 'SWEET & DESSERTS', href: '#', src:'img/katsu.jpg', path:'/sweets',name:'Sweets Menu'},
                {title: 'BEVERAGES', href: '#', src:'img/katsu.jpg', path:'/beverages',name:'Beverages Menu'},
            ],
            curretPath:'',
        }
    },
    methods:{

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

    .menu-title > div {
        width: 100%;
        justify-content: space-evenly;
        /* flex-wrap: unset; */
        /* flex-direction: column; */
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
        /* display: unset; */
        /* position: absolute; */
        /* z-index: 0; */
        height: 100%;
        width: 50%;
        left: 50%;
        border-radius: 30px 0 0 30px;
    }
}

</style>
