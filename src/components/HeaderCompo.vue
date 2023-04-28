<template>
    <header>
        <section>
            <img src="/marulilu_favicon.jpg" alt="">
            <ul class="opentime">
                <li>Mon, 8AM - 6PM</li>
                <!-- <li>Tue, CLOSE</li> -->
                <li>Wed, 8AM - 6PM</li>
                <li>Thu, 8AM - 6PM</li>
                <li>Fri, 8AM - 6PM</li>
                <li>Sat, 8:30AM - 6PM</li>
                <li>Sun, 8:30AM - 6PM</li>
                <li>Holiday, 9AM - 6PM</li>
                <!-- <li>X'MAS & New Year, CLOSE</li> -->
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
            /* background-color: rgba(237, 109, 61, 0.2); */
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
            margin-top: 40px;
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
        }

        .opentime > li {
            padding-left: 30px;
        }
    }

    @media (min-width:800px){
        header {
            position: none;
            margin: 0;
        }

        header h1 {
            font-size: 70px;
            border-radius: 30px;
        }
        header p {
            display: none;
        }
    }

</style>