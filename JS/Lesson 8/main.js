let datepicker = new DatePicker();

let renderer = new Renderer('datepicker-ui', datepicker,
    `<input class="dp-date" type="text" value="{{getCurrentDateAsString()}}" disabled>
     <div class="dp-datepicer">
         <h3 class="dp-datepicer__header">
             <div class="dp-datepicker__prev" onclick="prevMonth()"><</div>
             <div class="dp-datepicker__next" onclick="nextMonth()">></div>
             <div class="dp-datepicker__info" onclick="toToday()">{{getCurrentMonthAsString()}} {{getCurrentYearAsString()}}</div>
         </h3>
         <div class="dp-datepicer__days-of-week">
             <div class="dp-datepicer__day-of-week" __for__="dayOfWeek:getDaysOfWeek()" title="{{dayOfWeek}}">{{dayOfWeek}}</div>              
         </div>
         <div class="dp-datepicer__days">
             <div class="dp-datepicer__day __if__='isToday({{day}}):today' __if__='isCurrentDate({{day}}):currentDate'" onclick="setDate({{day}})" __for__="day:getDaysOfMonth()" title="{{day}}">{{day}}</div>
         </div>
     </div>`);

renderer.render();

function prevMonth() {
    datepicker.prevMonth();
    renderer.render();
}

function nextMonth() {
    datepicker.nextMonth();
    renderer.render();
}

function toToday() {
    datepicker.toToday();
    renderer.render();
}

function setDate(date) {
    datepicker.setCurrentDate(date);
    renderer.render();
}