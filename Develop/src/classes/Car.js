"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// Car class that extends Vehicle class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    // Constructor for the Car class
    function Car(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        var _this = _super.call(this) || this;
        // Initialize properties of the Car class
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    // Override the printDetails method from the Vehicle class
    Car.prototype.printDetails = function () {
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
        console.log("Wheel 1: ".concat(this.wheels[0].getDiameter, " inch with a ").concat(this.wheels[0].getTireBrandValue, " tire"));
        console.log("Wheel 2: ".concat(this.wheels[1].getDiameter, " inch with a ").concat(this.wheels[1].getTireBrandValue, " tire"));
        console.log("Wheel 3: ".concat(this.wheels[2].getDiameter, " inch with a ").concat(this.wheels[2].getTireBrandValue, " tire"));
        console.log("Wheel 4: ".concat(this.wheels[3].getDiameter, " inch with a ").concat(this.wheels[3].getTireBrandValue, " tire"));
    };
    return Car;
}(Vehicle_js_1.default));
// Export the Car class as the default export
exports.default = Car;
