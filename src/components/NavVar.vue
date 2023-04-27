<template>
<section>
    <nav>
        <ul>
            <li v-for='(nav, index) in navs' :key='index'><a :href="nav.href">{{nav.text}}</a></li>
        </ul>
        <details>
            <summary ><font-awesome-icon icon="fa-solid fa-bars" /></summary>
            <ul>
                <li v-for='(nav, index) in navs' :key='index'><a :href="nav.href">{{nav.text}}</a></li>
            </ul>
        </details>


        <a href="#">
            <h3>Marulilu Cafe</h3>
        </a>

        <a class="order" href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
    </nav>
</section>
</template>
<script>
export default {
    name:'NavVar',
    data() {
        return {
            navs: [
                {text: 'Top', href: '#top'},
                {text: 'Menu', href: '#menu'},
                {text: 'News', href: '#news'},
                {text: 'Access', href: '#access'},
            ]
        }
    },
}
</script>

<style scoped>

@media (min-width: 300px){
    section{
        width: 100%;
    }

    nav{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #97B8C2;
        color: white;
        position: fixed;
        z-index: 1;
    }

    nav > ul{
        display: none;
    }
    
    nav > a {
        text-decoration: none;   
    }

    nav > a > h3  {
        font-size: 28px;
        font-family: 'Rye',cursive;
        color: #834f2f;
        font-weight: 400;
    }

    details {
        display: flex;
        justify-content: left;
    }

    details > ul{
        background-color: rgba(256, 256, 256, .5);
        position: absolute;
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 150px;
    }

    details li{
        display: flex;
    }

    details a {
        color: white;
        -webkit-text-stroke: 1px #60281E;
        padding: 8%;
        width: 100%;
        font-size: 20px;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;     
    }

    summary {
        font-size: 28px;
        display: block;
    }

    .order {
        font-size: 20px;
        color: white;
    }
}

@media (min-width:800px){
    nav {
        position: fixed;
        top: 0;
        height: 75px;
        flex-direction: row-reverse;
        justify-content: space-around;
        z-index: 2;
    }

    nav > ul {
        display: flex;
        width: 50%;
        justify-content: space-around;
    }

    nav > ul > li {
        list-style: none;

    }

    nav > ul a {
        font-size: 25px;
        text-decoration: none;
        color: white;
    }

    nav > ul a:hover {
        color: orange;
    }

    summary {
        display: none;
    }

    nav > a > h3 {
        padding-left: 0px;
    }


}
</style>
