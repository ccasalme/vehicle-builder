"use strict";
// // import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
// import Vehicle from './Vehicle.js';
// import Motorbike from './Motorbike.js';
// import Car from './Car.js';
// import Wheel from './Wheel.js';
// import AbleToTow from '../interfaces/AbleToTow.js';
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
// // TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
// class Truck {
//   // TODO: Declare properties of the Truck class
//   // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
//   // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
//   vin: string;
//   color: string;
//   make: string;
//   model: string;
//   year: number;
//   weight: number;
//   topSpeed: number;
//   towingCapacity: number;
//   constructor(
//     vin: string,
//     color: string,
//     make: string,
//     model: string,
//     year: number,
//     weight: number,
//     topSpeed: number,
//     towingCapacity: number
//   ) {
//     // Call the parent class constructor
//     super(vin, color, make, model, year, weight, topSpeed);
//     // Initialize Truck-specific properties
//     this.towingCapacity = towingCapacity;
//     this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel(18, 'DefaultBrand'));
//   }
// }
//   // TODO: Create a constructor that accepts the properties of the Truck class
//     // TODO: The constructor should call the constructor of the parent class, Vehicle
//     // TODO: The constructor should initialize the properties of the Truck class
//     // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
//   // TODO: Implement the tow method from the AbleToTow interface
//   tow(vehicle: Truck | Motorbike | Car): void {
//     // TODO: Get the make an model of the vehicle if it exists
//     // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
//     // TODO: If it is, log that the vehicle is being towed
//     // TODO: If it is not, log that the vehicle is too heavy to be towed
//     const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
//     if (vehicle.weight <= this.towingCapacity) {
//       console.log(`Truck ${this.make} ${this.model} is towing ${vehicleDescription}.`);
//     } else {
//       console.log(`Truck ${this.make} ${this.model} cannot tow ${vehicleDescription} because it is too heavy.`);
//     }
//   }
//   // TODO: Override the printDetails method from the Vehicle class
//     // TODO: The method should call the printDetails method of the parent class
//     // TODO: The method should log the details of the Truck
//     // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
//   // Override the printDetails method from the Vehicle class
//   printDetails(): void {
//     // Call the parent class's printDetails method
//     super.printDetails();
//     // Log Truck-specific details
//     console.log(`Towing Capacity: ${this.towingCapacity}`);
//     console.log(
//       `Wheels: ${this.wheels.map(
//         (wheel, index) => `Wheel ${index + 1}: Diameter - ${wheel.diameter}, Brand - ${wheel.brand}`
//       ).join(', ')}`
//     );
//   }
// // Export the Truck class as the default export
// export default { Truck };
// Importing Vehicle, Motorbike, Car, Wheel, and AbleToTow
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// Truck class that extends Vehicle and implements AbleToTow
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels) {
        if (wheels === void 0) { wheels = []; }
        // Call the parent class constructor
        var _this = _super.call(this, vin, color, make, model, year, weight, topSpeed) || this;
        // Initialize Truck-specific properties
        _this.towingCapacity = towingCapacity;
        _this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel_js_1.default(18, 'DefaultBrand'));
        return _this;
    }
    // Implement the tow method from AbleToTow
    Truck.prototype.tow = function (vehicle) {
        var vehicleDescription = "".concat(vehicle.make, " ").concat(vehicle.model);
        if (vehicle.weight <= this.towingCapacity) {
            console.log("Truck ".concat(this.make, " ").concat(this.model, " is towing ").concat(vehicleDescription, "."));
        }
        else {
            console.log("Truck ".concat(this.make, " ").concat(this.model, " cannot tow ").concat(vehicleDescription, " because it is too heavy."));
        }
    };
    // Override the printDetails method from Vehicle
    Truck.prototype.printDetails = function () {
        // Call the parent class's printDetails method
        _super.prototype.printDetails.call(this);
        // Log Truck-specific details
        console.log("Towing Capacity: ".concat(this.towingCapacity));
        console.log("Wheels: ".concat(this.wheels.map(function (wheel, index) { return "Wheel ".concat(index + 1, ": Diameter - ").concat(wheel.diameter, ", Brand - ").concat(wheel.tireBrand); }).join(', ')));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;
