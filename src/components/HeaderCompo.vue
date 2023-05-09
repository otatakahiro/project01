<template>
    <header>
        <section>
            <img src="/marulilu_favicon.jpg" alt="">
            <ul class="opentime">
                <li>Mon, 8AM - 6PM</li>
                <li>Wed, 8AM - 6PM</li>
                <li>Thu, 8AM - 6PM</li>
                <li>Fri, 8AM - 6PM</li>
                <li>Sat, 8:30AM - 6PM</li>
                <li>Sun, 8:30AM - 6PM</li>
                <li>Holiday, 9AM - 6PM</li>
                <li><a href="#access">More Info</a></li>
            </ul>
            
        </section>
    </header>
</template>

<script>
export default {
    name:'HeaderCompo'
}
</script>

<style scoped>
@media (min-width: 300px){
        
        header {
            height: 100vh;
            background-image: url('/public/img/marulilu00.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            margin-bottom: 10vh;
            width: 100%;
        }
        header > section{
            background-color: rgba(0,0,0,.2);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: top;
            align-items: center;
            row-gap: 20px;
            width: 100%;
        }

        header img {
            width: 40%;
            border-radius: 50%;
            margin-bottom: auto;
            margin-top: 90px;
            z-index: 2;
        }

        header h1 {
            width: 100%;
            /* color: #834f2f; */
            color: white;
            background-color: rgba(96, 40, 30, .8);
            /* background-color: white; */
            width: fit-content;
            padding: 2% 1%;
            border-radius: 15px;
            font-family: 'Rye',cursive;
            font-weight: 400;
            font-size: 30px;
        }
        header p {
            /* display: none; */
            width: 80%;
            background-color: rgba(256,256,256,.5);
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
        }

        a {
            font-size: 20px;
            background-color: white;
            border-radius: 10px;
            padding: 3px 8px;
            text-decoration: none;
            color: black;
            transition: 1s;
        }

        a:hover {
            background: black;
            color: white;
        }

        .opentime {
            color: white;
            /* background-color: rgba(0,0,0,.3); */
            list-style: none;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 24px;
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            padding-bottom: 20px;
        }

        .opentime > li {
            padding-left: 30px;
        }
        
        .opentime > li:last-child {
            text-align: center;
        }
}

@media (min-width:800px){
        header img {
            width: 30%;
        }

        a {
            padding: 5px 10px;
        }

        .opentime {
            font-size: 28px;
            letter-spacing: 2px;
        }
}

@media (min-width:1200px) {
    header img {
        width: 15%;
    }

    .opentime {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 25px;
        justify-content: center;
    }

    .opentime > li {
        border-bottom: 5px dotted orange;
    }

    .opentime > li:last-child {
        border-bottom: none;
    }
    
}

</style>