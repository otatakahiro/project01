<template>
    <header>
        <section>
            <!-- <article> -->
            <h1>Marulilu Cafe</h1>
            <!-- </article> -->
            <p>Marulilu cafe is a very 喫茶店 (Kissa-ten) style cafe at Broadway, Vancouver.
In Japan, not only coffee/tea and some snacks but also some Japanese meals are provided.
Especially, 洋食 (Yo-shoku) which means western style meals is enjoyed in 喫茶店for example Omu-rice and Curry-rice. Also you can enjoy some traditional/native-popular Japanese meals in Marulilu cafe; you have to know Japanese foods are not only sushi and tempura. Marulilu cafe is only one place to experience the real Japanese-style foods and drinks in Vancouver.</p>
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
            /* height: 60vh; */
            height: 90vh;
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
            justify-content: center;
            align-items: center;
            row-gap: 20px;
            width: 100%;
        }
        /* header > section > article {
            width: 100%;
            background-color: rgba(256,256,256,.8);
            height: 7vh;
            display: flex;
            justify-content: center;
            align-items: center;
        } */

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