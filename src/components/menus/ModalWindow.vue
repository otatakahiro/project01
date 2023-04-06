<template>
    <div id='overlay' v-on:click='clickEvent'>
        <div id="content" v-on:click='stopEvent' v-if='breakfast'>
            <img v-if='breakfast.menuImg' :src="breakfast.menuImg" :alt="breakfast.menuName">
            <h3>{{breakfast.menuName}}</h3>
            <p>${{breakfast.price}}</p>
            <div class="details" v-if="breakfast.explanation1">
                <p>{{breakfast.explanation1}}</p>
                <p v-if="breakfast.explanation2">{{breakfast.explanation2}}</p>
                <p v-if="breakfast.explanation3">{{breakfast.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>




        <div id="content" v-on:click='stopEvent' v-if='dish'>
            <img v-if='dish.menuImg' :src="dish.menuImg" :alt="dish.menuName">
            <h3>{{dish.menuName}}</h3>
            <p>${{dish.price}}</p>
            <div class="details" v-if="dish.explanation1">
                <p>{{dish.explanation1}}</p>
                <p v-if="dish.explanation2">{{dish.explanation2}}</p>
                <p v-if="dish.explanation3">{{dish.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>





        <div id="content" v-on:click='stopEvent' v-if='side'>
            <img v-if='side.menuImg' :src="side.menuImg" :alt="side.menuName">
            <h3>{{side.menuName}}</h3>
            <p>${{side.price}}</p>
            <div class="details" v-if="side.explanation1">
                <p>{{side.explanation1}}</p>
                <p v-if="side.explanation2">{{side.explanation2}}</p>
                <p v-if="side.explanation3">{{side.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>





        <div id="content" v-on:click='stopEvent' v-if='month'>
            <img v-if='month.menuImg' :src="month.menuImg" :alt="month.menuName">
            <h3>{{month.menuName}}</h3>
            <p>${{month.price}}</p>
            <div class="details" v-if="month.explanation1">
                <p>{{month.explanation1}}</p>
                <p v-if="month.explanation2">{{month.explanation2}}</p>
                <p v-if="month.explanation3">{{month.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>







        <div id="content" v-on:click='stopEvent' v-if='sweet'>
            <img v-if='sweet.menuImg' :src="sweet.menuImg" :alt="sweet.menuName">
            <h3>{{sweet.menuName}}</h3>
            <p>${{sweet.price}}</p>
            <div class="details" v-if="sweet.explanation1">
                <p>{{sweet.explanation1}}</p>
                <p v-if="sweet.explanation2">{{sweet.explanation2}}</p>
                <p v-if="sweet.explanation3">{{sweet.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>







        <div id="content" v-on:click='stopEvent' v-if='beverage'>
            <img v-if='beverage.menuImg' :src="beverage.menuImg" :alt="beverage.menuName">
            <h3>{{beverage.menuName}}</h3>
            <p>{{beverage.price}}</p>
            <div class="details" v-if="beverage.explanation1">
                <p>{{beverage.explanation1}}</p>
                <p v-if="beverage.explanation2">{{beverage.explanation2}}</p>
                <p v-if="beverage.explanation3">{{beverage.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>
    </div>


    <!-- <div id='overlay' v-on:click='clickEvent' >
    </div> -->
</template>

<script>

export default {
    name:'ModalWindow',
    props:{
        breakfast: Object,
        dish: Object,
        side: Object,
        month: Object,
        sweet: Object,
        beverage: Object
    },
    methods: {
        clickEvent() {
            this.$emit('from-child');
        },
        stopEvent() {
            this.$emit('from-child');
        }
    }
}

</script>

<style scoped>
    img {
        width: 90%;
        border-radius: 5px;
    }

    h3 {
        font-size: 17px;
        width: 100%;
        text-align: center;
    }

    #overlay {
        z-index: 2;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.1);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #content {
        border-radius: 15px;
        z-index: 1;
        overflow-y: scroll;
        width: 70%;
        height: 70%;
        padding: 3%;
        background-color: #dfc6b5;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2%;
    }

    .details {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        border: 1px solid black;
        text-align: center;
        background-color: antiquewhite;
        white-space: pre-wrap;
        padding: 3% 1%;
    }

    .details > p {
        border-bottom: 1px solid orange;
    }

    .closemodal {
        width: 40%;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: 16px;
    }
</style>