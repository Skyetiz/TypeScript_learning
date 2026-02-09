// Basic Types
var num = 1;
var str = "Hello, TypeScript!";
var bool = true;
var nullValue = null;
var undefinedValue = undefined;
var symbolValue = Symbol("unique");
console.log(num, str, bool, nullValue, undefinedValue, symbolValue);
// Array
var numArray = [1, 2, 3];
var strArray = ["a", "b", "c"];
var arr = [1, "two", 3];
console.log(numArray);
console.log(arr);
// Tuple
var tupleValue = [1, "Hello"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blues"] = 2] = "Blues";
})(Color || (Color = {}));
var color = Color.Green;
// Any
var anyValue = "This can be any type";
anyValue = 42;
// Void
function logMessage(message) {
    console.log(message);
}
// Never
function throwError(message) {
    throw new Error(message);
}
