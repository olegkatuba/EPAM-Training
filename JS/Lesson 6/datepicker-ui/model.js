function DatePicker() {
    this.currentDate = new Date();
    this.currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth());
}

DatePicker.prototype.getMonthInfo = function() {
    var month = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth());
    var firstDay = (month.getDay() || 7) - 1;
    month.setMonth(month.getMonth() + 1);
    month.setDate(0);
    var daysCount = month.getDate();
    return {
        firstDay: firstDay,
        daysCount: daysCount
    };
};

DatePicker.prototype.nextMonth = function() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    return this;
};

DatePicker.prototype.prevMonth = function() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    return this;
};

DatePicker.prototype.getCurrentMonth = function() {
    return this.currentMonth;
};

DatePicker.prototype.getCurrentDate = function() {
    return this.currentDate;
};

DatePicker.prototype.setCurrentDate = function(date) {
    this.currentDate.setFullYear(this.currentMonth.getFullYear());
    this.currentDate.setMonth(this.currentMonth.getMonth());
    this.currentDate.setDate(date);
};

DatePicker.prototype.getToday = function() {
    return new Date();
};

DatePicker.prototype.isToday = function(date) {
    let today = new Date();
    return today.getFullYear() === this.currentMonth.getFullYear() && today.getMonth() === this.currentMonth.getMonth() && today.getDate() === date;
};

DatePicker.prototype.isCurrentDate = function(date) {
    return this.currentMonth.getFullYear() === this.currentDate.getFullYear() && this.currentMonth.getMonth() === this.currentDate.getMonth() && this.currentDate.getDate() === date;
};

DatePicker.prototype.toToday = function(date) {
    let today = new Date();
    this.currentMonth.setMonth(today.getMonth());
    this.currentMonth.setFullYear(today.getFullYear());
};