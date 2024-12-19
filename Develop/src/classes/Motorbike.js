"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Motorbike class should extend the Vehicle class
// TODO: Declare properties of the Motorbike class
// TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
// TODO: Create a constructor that accepts the properties of the Motorbike class
// TODO: The constructor should call the constructor of the parent class, Vehicle
// TODO: The constructor should initialize the properties of the Motorbike class
// TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
// TODO: Implement the wheelie method
// TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
// TODO: Override the printDetails method from the Vehicle class
// TODO: The method should call the printDetails method of the parent class
// TODO: The method should log the details of the Motorbike
// TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
var Motorbike = /** @class */ (function () {
    function Motorbike(vin, color, make, model, year, weight, topSpeed, frontWheel, rearWheel) {
        // Call the parent class constructor
        var _this = _super.call(this) || this;
        // Initialize Motorbike-specific properties
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Ensure both wheels are provided
        if (wheels.length !== 2) {
            this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            this.wheels = wheels;
        }
        return _this;
    }
    // Override the printDetails method from the Vehicle class
    Motorbike.prototype.printDetails = function () {
        // Call the printDetails method of the parent class, Vehicle
        _super.prototype.printDetails.call(this);
        // Print details of the Car class
        console.log("VIN: ".concat(this.vin));
        console.log("Color: ".concat(this.color));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight, " lbs"));
        console.log("Top Speed: ".concat(this.topSpeed, " mph"));
        // Print details of the wheels
        console.log("Wheel 1: ".concat(this.wheels[0].getDiameter, " inch with a ").concat(this.wheels[0].getTireBrand, " tire"));
        console.log("Wheel 2: ".concat(this.wheels[1].getDiameter, " inch with a ").concat(this.wheels[1].getTireBrand, " tire"));
    };
    return Motorbike;
}());
// Export the Motorbike class as the default export
exports.default = Motorbike;
