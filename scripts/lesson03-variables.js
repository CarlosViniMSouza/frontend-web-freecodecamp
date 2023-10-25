/**
 * JS is a Dynamic Typing Language, so, the variable type is defined when declared the value;
 * But, we should define if the variable is adjustable or not.
 */

// To change the variable value when necessary, use 'var' or 'let'
var variableAdjust01 = "value01";
let variableAdjust02 = true;

// To keep unadjustable, use 'const'
const variableUnadjust = "This will not charge!";

// Variable List
const variableList = [1, 2, 3];

// Variable Object
const variableObject = {
    "prop01": "Name", 
    "prop02": 0, 
    "prop03": 2.56
};

// Nested Objects in Variable
const variableNestedObject = {
    "prop01": {
        "age": 22
    }
}

console.log(variableNestedObject.prop01);
console.log(variableNestedObject.prop01.age);
