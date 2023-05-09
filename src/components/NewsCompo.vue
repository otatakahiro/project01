<template>
    <section class="news">
        <article class="title">
            <h3>NEWS</h3>
            <h6></h6>
        </article>

        <div>
            <article class="calender">
                <img src="" alt="">
                <h4>April</h4>
                <ul>
                    <li class="label">Sun</li>
                    <li class="label">Mon</li>
                    <li class="label">Tue</li>
                    <li class="label">Wed</li>
                    <li class="label">Thu</li>
                    <li class="label">Fri</li>
                    <li class="label">Sat</li>
                    <li class="pre">26</li>
                    <li class="pre">27</li>
                    <li class="pre">28</li>
                    <li class="pre">29</li>
                    <li class="pre">30</li>
                    <li class="pre">31</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li class="close">4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li class="close">11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li class="close">18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li class="close">25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li class="next">1</li>
                    <li class="next">1</li>
                    <li class="next">1</li>
                    <li class="next">1</li>
                    <li class="next">1</li>
                    <li class="next">1</li>
                </ul>
                <div class="color">
                    <h5 class="closes"></h5>
                    <p>:close</p>
                </div>
            </article>
            <article class="another">
                <img src="/img/katsu.jpg" alt="">
            </article>
        </div>
        <div id="access"></div>
    </section>
</template>
<script>

export default {
    name:'NewsCompo',
}
</script>

<style scoped>
@media (min-width: 300px) {
    
    h3 {
        text-align: center;
        font-size: 30px;
        font-family: 'Rye',cursive;
        padding-top: 40px;
        font-weight: 400;
    }

    h4 {
        font-size: 25px;
        width: 30%;
        text-align: center;
    }

    h6 {
        width: 60%;
        border-bottom: 3px solid;
        margin-bottom: 20px;
    }
    
    p {
        font-size: 18px;
    }

    ul {
        font-size: 17px;
        width: 86%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }

    li {
        list-style: none;
        width: 14.25%;
        text-align: center;
    }

    .color {
        display: flex;
        column-gap: 1px;
        width: 86%;
    }

    .news {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        color: rgba(142, 94, 69, 1);
        width: 100%;
        padding-bottom: 40px;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .calender {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
        row-gap: 20px;
    }

    .label {
        border-top: 1px solid black; 
        border-bottom: 1px solid black; 
    }

    .pre, .next {
        background-color: rgba(142, 94, 69, 1);
    }

    .close {
        background-color: #ED6D3D;
    }

    .closes {
        width: 14.25%;
        height: 25px;
        background-color: #ED6D3D;
    }

    .another {
        display: none;
    }
}

@media (min-width:800px) {

    h3 {
        font-size: 45px;
    }

    h4 {
        font-size: 35px;
    }

    p {
        font-size: 19px;
    }

    ul {
        font-size: 18px;
        width: 100%;
    }

    .news > div {
        display: flex;
        justify-content: center;
        width: 100%;
        column-gap: 5%;
    }

    .calender {
        width: 40%;
    }

    .closes {
        height: 26px;
        background-color: #ED6D3D;
    }
    .another {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .another > img{
        width: 100%;
    }
} 

</style>
