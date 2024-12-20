"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing classes from other files
var inquirer_1 = require("inquirer");
var Truck_js_1 = require("./Truck.js");
var Car_js_1 = require("./Car.js");
var Motorbike_js_1 = require("./Motorbike.js");
var Wheel_js_1 = require("./Wheel.js");
// define the Cli class
var Cli = /** @class */ (function () {
    function Cli(vehicles) {
        // TODO: update the vehicles property to accept Truck and Motorbike objects as well
        // TODO: You will need to use the Union operator to define additional types for the array
        // TODO: See the AbleToTow interface for an example of how to use the Union operator
        this.vehicles = [];
        this.car = new Car_js_1.default('', '', '', '', 0, 0, 0, []);
        this.truck = new Truck_js_1.default('', '', '', '', 0, 0, 0, [], 0);
        this.motorbike = new Motorbike_js_1.default('', '', '', '', 0, 0, 0, []);
    }
    // static method to generate a vin
    Cli.generateVin = function () {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    };
    // method to choose a vehicle from existing vehicles
    Cli.prototype.chooseVehicle = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map(function (vehicle) {
                    return {
                        name: "".concat(vehicle.vin, " -- ").concat(vehicle.make, " ").concat(vehicle.model),
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then(function (answers) {
            // set the selectedVehicleVin to the vin of the selected vehicle
            _this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            _this.performActions();
        });
    };
    // method to create a vehicle
    Cli.prototype.createVehicle = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                // TODO: Update the choices array to include Truck and Motorbike
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ])
            .then(function (answers) {
            if (answers.vehicleType === 'Car') {
                // create a car
                _this.createCar();
            }
            else if (answers.vehicleType === 'Truck') {
                // create a truck
                _this.createTruck();
            }
            else if (answers.vehicleType === 'Motorbike') {
                // create a motorbike
                _this.createMotorbike();
            }
            // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        });
    };
    // method to create a car
    Cli.prototype.createCar = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then(function (answers) {
            var car = new Car_js_1.default(
            // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
            Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            // push the car to the vehicles array
            _this.vehicles.push(car);
            // set the selectedVehicleVin to the vin of the car
            _this.selectedVehicleVin = car.vin;
            // perform actions on the car
            _this.performActions();
        });
    };
    // method to create a truck
    Cli.prototype.createTruck = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then(function (answers) {
            // TODO: Use the answers object to pass the required properties to the Truck constructor
            // TODO: push the truck to the vehicles array
            // TODO: set the selectedVehicleVin to the vin of the truck
            // TODO: perform actions on the truck
            var truck = new Truck_js_1.default(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), parseInt(answers.towingCapacity));
            _this.vehicles.push(truck);
            _this.selectedVehicleVin = truck.vin;
            _this.performActions();
        });
    };
    // method to create a motorbike
    Cli.prototype.createMotorbike = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then(function (answers) {
            // TODO: Use the answers object to pass the required properties to the Motorbike constructor
            // TODO: push the motorbike to the vehicles array
            // TODO: set the selectedVehicleVin to the vin of the motorbike
            // TODO: perform actions on the motorbike
            var frontWheel = new Wheel_js_1.default(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand);
            var rearWheel = new Wheel_js_1.default(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand);
            var motorbike = new Motorbike_js_1.default(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [frontWheel, rearWheel]);
            _this.vehicles.push(motorbike);
            _this.selectedVehicleVin = motorbike.vin;
            _this.performActions();
        });
    };
    // method to find a vehicle to tow
    // TODO: add a parameter to accept a truck object
    Cli.prototype.findVehicleToTow = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map(function (vehicle) {
                    return {
                        name: "".concat(vehicle.vin, " -- ").concat(vehicle.make, " ").concat(vehicle.model),
                        value: vehicle,
                    };
                }),
            },
        ])
            .then(function (answers) {
            // TODO: check if the selected vehicle is the truck
            // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
            // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
            var vehicleToTow = answers.vehicleToTow;
            if (vehicleToTow) {
                truck.tow(vehicleToTow);
            }
            _this.performActions();
        });
    };
    // method to perform actions on a vehicle
    Cli.prototype.performActions = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                // TODO: add options to tow and wheelie
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then(function (answers) {
            // perform the selected action
            if (answers.action === 'Print details') {
                // find the selected vehicle and print its details
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].printDetails();
                    }
                }
            }
            else if (answers.action === 'Start vehicle') {
                // find the selected vehicle and start it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].start();
                    }
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                // find the selected vehicle and accelerate it by 5 MPH
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].accelerate(5);
                    }
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                // find the selected vehicle and decelerate it by 5 MPH
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].decelerate(5);
                    }
                }
            }
            else if (answers.action === 'Stop vehicle') {
                // find the selected vehicle and stop it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].stop();
                    }
                }
            }
            else if (answers.action === 'Turn right') {
                // find the selected vehicle and turn it right
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].turn('right');
                    }
                }
            }
            else if (answers.action === 'Turn left') {
                // find the selected vehicle and turn it left
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].turn('left');
                    }
                }
            }
            else if (answers.action === 'Reverse') {
                // find the selected vehicle and reverse it
                for (var i = 0; i < _this.vehicles.length; i++) {
                    if (_this.vehicles[i].vin === _this.selectedVehicleVin) {
                        _this.vehicles[i].reverse();
                    }
                }
            }
            // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
            // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
            else if (answers.action === 'Select or create another vehicle') {
                // start the cli to return to the initial prompt if the user wants to select or create another vehicle
                _this.startCli();
                return;
            }
            else {
                // exit the cli if the user selects exit
                _this.exit = true;
            }
            if (!_this.exit) {
                // if the user does not want to exit, perform actions on the selected vehicle
                _this.performActions();
            }
        });
    };
    // method to start the cli
    Cli.prototype.startCli = function () {
        var _this = this;
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ])
            .then(function (answers) {
            // check if the user wants to create a new vehicle or select an existing vehicle
            if (answers.CreateOrSelect === 'Create a new vehicle') {
                _this.createVehicle();
            }
            else {
                _this.chooseVehicle();
            }
        });
    };
    return Cli;
}());
// export the Cli class
exports.default = Cli;
