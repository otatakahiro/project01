<template>
    <div id='calendar' :class={visible:mounted}>

    </div>
</template>

<script>
export default {
    name:'CalenderCompo',
    data() {
        return {
            mounted: false
        }
    },
    mounted() {
        this.mounted = true;
        window.onload = () => {
            
            const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const month_english_list = ['January','February','March','April','May','June','July','August','September','Octorber','November','December'];
            const date = new Date();
            
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const month_for_date = date.getMonth() + 1;
            const month_english = month_english_list[month - 1];
            console.log(month_english)
            const startDate = new Date(year, month_for_date - 1, 1); // 月の最初の日を取得
            const endDate = new Date(year, month,  0); // 月の最後の日を取得
            const endDayCount = endDate.getDate(); // 月の末日
            const lastMonthEndDate = new Date(year, month - 1, 0); // 前月の最後の日の情報
            const lastMonthendDayCount = lastMonthEndDate.getDate(); // 前月の末日
            const startDay = startDate.getDay(); // 月の最初の日の曜日を取得
            let dayCount = 1; // 日にちのカウント
            let calendarHtml = ''; // HTMLを組み立てる変数

            calendarHtml += '<h1 id="h1forCalender">' + date.getDate()  + '/' + month_english + '/' + year + '</h1>';
            calendarHtml += '<table id="tableforCalender" width="100%">';

            // 曜日の行を作成
            for (let i = 0; i < weeks.length; i++) {
                calendarHtml += '<td id="weeks">' + weeks[i] + '</td>';
            }

            for (let w = 0; w < 6; w++) {
                calendarHtml += '<tr id="tr">';

                for (let d = 0; d < 7; d++) {
                    if (w == 0 && d < startDay) {
                        // 1行目で1日の曜日の前
                        let num = lastMonthendDayCount - startDay + d + 1;
                        calendarHtml += '<td id="is-disabled">' + num + '</td>';
                    } else if (dayCount > endDayCount) {
                        // 末尾の日数を超えた
                        let num = dayCount - endDayCount;
                        calendarHtml += '<td id="is-disabled">' + num + '</td>';
                        dayCount++;
                    } else {
                        calendarHtml += '<td id="day-td">' + dayCount + '</td>';
                        dayCount++;
                    }

                }
                calendarHtml += '</tr>';
            }
            calendarHtml += '</table>';


            document.querySelector('#calendar').innerHTML = calendarHtml;
        }

        
    }
}
</script>

<style>

#h1forCalender {
    font-size: 25px;
    padding-bottom: 30px;
}

#tableforCalender {
    border-spacing: 0;
    border-collapse: collapse;
}

#day-td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: center;
}

#weeks {
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    background-color: #ddd;
}

#day-td:first-child,
#weeks:first-child {
    color: red;
}

#day-td:last-child,
#weeks:last-child {
    color: royalblue;
}

#is-disabled {
    color: #ccc;
}

#day-td:nth-child(3){
    background-color: #ED6D3D;
}

#weeks:nth-child(3) {
    background-color: #ddd;
}

#is-disabled {
    background-color: rgba(142, 94, 69, 1);
    color: gainsboro;
}

</style>