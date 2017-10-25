function DatePicker() {
    this._currentDate = new Date();
    this._currentMonth = new Date(this._currentDate.getFullYear(), this._currentDate.getMonth());
}

DatePicker.prototype.nextMonth = function() {
    this._currentMonth.setMonth(this._currentMonth.getMonth() + 1);
};

DatePicker.prototype.prevMonth = function() {
    this._currentMonth.setMonth(this._currentMonth.getMonth() - 1);
};

DatePicker.prototype.getCurrentYearAsString = function () {
    return this._currentMonth.toLocaleString("en-US", {year: 'numeric'});
};

DatePicker.prototype.getCurrentMonthAsString = function () {
    return this._currentMonth.toLocaleString("en-US", {month: 'long'});
};

DatePicker.prototype.getDaysOfWeek = function () {
    return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
};

DatePicker.prototype.getDaysOfMonth = function () {
    let month = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth());
    let firstDay = (month.getDay() || 7) - 1;
    month.setMonth(month.getMonth() + 1);
    month.setDate(0);
    let daysCount = month.getDate();

    let days = [];

    for (let i = 0; i < firstDay; i++)
        days.push("");
    for (let i = 0; i < daysCount; i++)
        days.push(i+1);
    return days;
};

DatePicker.prototype.getCurrentDateAsString = function() {
    return `${this._currentDate.getDate()}/${this._currentDate.getMonth()+1}/${this._currentDate.getFullYear()}`;
};

DatePicker.prototype.isToday = function(date) {
    if(!date) return;
    let today = new Date();
    return today.getFullYear() === this._currentMonth.getFullYear() && today.getMonth() === this._currentMonth.getMonth() && today.getDate() === +date;
};

DatePicker.prototype.toToday = function() {
    let today = new Date();
    this._currentMonth.setMonth(today.getMonth());
    this._currentMonth.setFullYear(today.getFullYear());
};

DatePicker.prototype.setCurrentDate = function(date) {
    this._currentDate.setFullYear(this._currentMonth.getFullYear());
    this._currentDate.setMonth(this._currentMonth.getMonth());
    this._currentDate.setDate(date);
};

DatePicker.prototype.isCurrentDate = function(date) {
    if(!date) return;
    return this._currentMonth.getFullYear() === this._currentDate.getFullYear() && this._currentMonth.getMonth() === this._currentDate.getMonth() && this._currentDate.getDate() === +date;
};


/*DatePicker.prototype.getCurrentMonth = function() {
    return this._currentMonth;
};*/

/*DatePicker.prototype.setCurrentDate = function(date) {
    this._currentDate.setFullYear(this._currentMonth.getFullYear());
    this._currentDate.setMonth(this._currentMonth.getMonth());
    this._currentDate.setDate(date);
};

DatePicker.prototype.getToday = function() {
    return new Date();
};

DatePicker.prototype.isCurrentDate = function(date) {
    return this._currentMonth.getFullYear() === this._currentDate.getFullYear() && this._currentMonth.getMonth() === this._currentDate.getMonth() && this._currentDate.getDate() === date;
};
*/
