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
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Call the parent class constructor
        var _this = _super.call(this) || this;
        // Initialize Truck-specific properties
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.towingCapacity = towingCapacity;
        _this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel_js_1.default(18, 'DefaultBrand'));
        return _this;
    }
    // TODO: Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
        var vehicleDescription = "".concat(vehicle.make, " ").concat(vehicle.model);
        if (vehicle.weight <= this.towingCapacity) {
            console.log("Truck ".concat(this.make, " ").concat(this.model, " is towing ").concat(vehicleDescription, "."));
        }
        else {
            console.log("Truck ".concat(this.make, " ").concat(this.model, " cannot tow ").concat(vehicleDescription, " because it is too heavy."));
        }
    };
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    // Override the printDetails method from the Vehicle class
    Truck.prototype.printDetails = function () {
        // Call the parent class's printDetails method
        _super.prototype.printDetails.call(this);
        // Log Truck-specific details
        console.log("Towing Capacity: ".concat(this.towingCapacity));
        console.log("Wheels: ".concat(this.wheels.map(function (wheel, index) { return "Wheel ".concat(index + 1, ": Diameter - ").concat(wheel.getDiameter, ", Brand - ").concat(wheel.getTireBrandValue); }).join(', ')));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;
