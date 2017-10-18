function Car(model, yearOfIssue, producer) {
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.producer = producer;
    this.image = 'no photo';

    this.info = function () {
        console.log(this.image + ' ' + this.model + ' (' + this.yearOfIssue + ') by ' + this.producer);
    };
}

function Jeep(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚙';
}

function Sedan(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚕';
}

function StationWagon(model, yearOfIssue, producer) {
    Car.call(this, model, yearOfIssue, producer);
    this.image = '🚗';
}

var jeep = new Jeep('Jeep wrangler', '1987', 'Chrysler Corporation');
jeep.info();
var lincoln = new Sedan('Lincoln Town Car', '2002', 'Lincoln Motor Company');
lincoln.info();
var audi = new StationWagon('Audi A6', '1994', 'AUDI AG');
audi.info();