"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import classes
var Truck_js_1 = require("./classes/Truck.js");
var Car_js_1 = require("./classes/Car.js");
var Motorbike_js_1 = require("./classes/Motorbike.js");
var Wheel_js_1 = require("./classes/Wheel.js");
var Cli_js_1 = require("./classes/Cli.js");
// create an array of vehicles
var vehicles = [];
// TODO: uncomment once trucks are implemented
var truck1 = new Truck_js_1.default(Cli_js_1.default.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// will use default wheels
var car1 = new Car_js_1.default(Cli_js_1.default.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
// TODO: uncomment once motorbikes are implemented
var motorbike1Wheels = [new Wheel_js_1.default(17, "Michelin"), new Wheel_js_1.default(17, "Michelin")];
var motorbike1 = new Motorbike_js_1.default(Cli_js_1.default.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(
//   Cli.generateVin(),
//   "black",
//   "Harley Davidson",
//   "Sportster",
//   2021,
//   500,
//   125,
//   motorbike1Wheels[0],
//   motorbike1Wheels[1]
// );
// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(Truck_js_1.default);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);
// create a new instance of the Cli class
var cli = new Cli_js_1.default(vehicles);
// start the cli
cli.startCli();
