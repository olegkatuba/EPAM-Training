function Car(model, yearOfIssue, producer) {
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.producer = producer;
    this.image = 'no photo';
}

Car.prototype.info = function () {
    console.log(this.image + ' ' + this.model + ' (' + this.yearOfIssue + ') by ' + this.producer);
};

function Jeep(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚙';
}

Jeep.prototype = Object.create(Car.prototype);
Jeep.prototype.constructor = Jeep;

function Sedan(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚕';
}

Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype.constructor = Sedan;

function StationWagon(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚗';
}

StationWagon.prototype = Object.create(Car.prototype);
StationWagon.prototype.constructor = StationWagon;

var jeep = new Jeep('Jeep wrangler', '1987', 'Chrysler Corporation');
jeep.info();
var Lada = new Sedan('Lincoln Town Car', '2002', 'Lincoln Motor Company');
Lada.info();
var Peugeot = new StationWagon('Audi A6', '1994', 'AUDI AG');
Peugeot.info();