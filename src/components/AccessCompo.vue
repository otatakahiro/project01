<template>
        <section class="access">
            <article class="title">
            <h3>ACCESS</h3>
            <h6></h6>
            </article>

            <div>

            <article class="info">
                <table>
                    <tr>
                        <th>Name</th>
                        <td class="td">Marulilu Cafe</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td class="td">(604)568-4211</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td class="td">451 W Broadway, Vancouver,<br>BC, V5Y 1R4</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td class="td">
                            <table class="time">
                                <tr>
                                    <td class="td2">Mon, Wed - Fri 8:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td class="td2">Sat - Sun 8:30 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td class="td2">Holiday 9:00 AM - 6:00 PM</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Close</th>
                        <td class="td">
                            <table>
                                <tr>
                                    <td class="td2">Tuesday</td>
                                </tr>
                                <tr>
                                    <td class="td2">New Year</td>
                                </tr>
                                <tr>
                                    <td class="td2">X'MAS</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </article>
            <article class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10414.74347946346!2d-123.1228416030972!3d49.263399670885256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867158d9a61a51%3A0xf94a37a17c60a71f!2sMarulilu%20Caf%C3%A9!5e0!3m2!1sja!2sca!4v1678987209823!5m2!1sja!2sca" width="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </article>
            </div>
        </section>

</template>
<script>

export default {
    name:'AccessCompo',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
    @media (min-width: 300px) {
        h3 {
            padding-top: 40px;
            text-align: center;
            font-size: 30px;
            font-family: 'Rye',cursive;
            font-weight: 400;
        }
    
        h6 {
            width: 60%;
            border-bottom: 3px solid white;
            margin-bottom: 40px;
        }

        article {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        article > table{
            width: 100%;
            border-collapse: collapse;
            font-size: 18px;
        }

        tr {
            width: 100%;
        }
    
        th {
            border-right: 1px solid white;
            width: 25%;
        }

        iframe {
            height: 300px;
            width: 100%;
        }
    
        .access {
            background-color: rgba(142, 94, 69, .6);
            color: white;
            padding-bottom: 30px;
        }

        .td {
            padding:1% 2%;
            width: 75%;
        }

        .title {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .map {
            padding-top: 40px;
        }
    }

    @media (min-width:800px) {
    h3 {
        font-size: 45px;
    }

    article {
        width: 100%;
    }


    iframe {
        height: 400px;
    }

    .info > table {
        width: 80%;
        font-size: 19px;
        border: 1px solid white;
    }

    }
@media (min-width:1200px){
    article > table {
        width: 80%;
    }
    th{
        padding: 0;
    }
    
    iframe {
        width: 100%;
        height: 100%;
    }

    .access > div {
        display: flex;
        justify-content: center;
        width: 100%;
        column-gap: 3%;
    }

    .info {
        width: 45%;
    }

    .info > table {
        width: 100%;

    }

    .td {
        padding:2% 7%;
        width: 75%;
    }

    .td2 {
        padding: 2% 0;
    }

    .map {
        padding: 0;
        width: 45%;
    }

}
</style>
