// Parsing a list of lists and convert into a JSON object:
// Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
// Output:
// var object = {
// make : "Ford"
// model : "Mustang",
// year : 1964
// }

var arr = [
    ["make", "Ford"],
    ["model", "Mustang"],
    ["year", 1964]
];

function fromListToObject(arr) {
    var newObject = {};
    arr.forEach(elm => newObject[elm[0]] = elm[1]);
    return newObject;
};

fromListToObject(arr);