"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Wheel class that defines the properties of a wheel
var Wheel = /** @class */ (function () {
    // Constructor for the Wheel class
    function Wheel(diameter, tireBrand) {
        if (diameter === void 0) { diameter = 18; }
        if (tireBrand === void 0) { tireBrand = "GoodYear"; }
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    Object.defineProperty(Wheel.prototype, "getDiameter", {
        // Getter methods for the properties of the Wheel class
        get: function () {
            return this.diameter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wheel.prototype, "getTireBrandValue", {
        // Setter method for the diameter property
        get: function () {
            return this.tireBrand;
        },
        enumerable: false,
        configurable: true
    });
    return Wheel;
}());
// Export the Wheel class
exports.default = Wheel;
