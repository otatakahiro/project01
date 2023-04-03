<template>
    <div id='overlay' v-on:click='clickEvent'>
        <div id="content" v-on:click='stopEvent'>
            <img :src="breakfast.menuImg" :alt="breakfast.menuName">
            <h3>{{breakfast.menuName}}</h3>
            <p>${{breakfast.price}}</p>
            <div class="details" v-if="breakfast.explanation1">
                <p>{{breakfast.explanation1}}</p>
                <p v-if="breakfast.explanation2">{{breakfast.explanation2}}</p>
                <p v-if="breakfast.explanation3">{{breakfast.explanation3}}</p>
            </div>
            <button class='closemodal' @click='clickEvent'>close</button>
        </div>

    </div>
</template>

<script>

export default {
    name:'ModalWindow',
    props: {
        breakfast: Object       
    },
    data() {
        return {
            
        }
    },
    methods: {
        clickEvent() {
            this.$emit('from-child');
            console.log(this.breakfast.menuName)
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
        z-index: 1;
        overflow-y: scroll;
        width: 70%;
        height: 70%;
        padding: 2%;
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
        width: 80%;
    }
</style>