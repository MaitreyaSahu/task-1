// Parsing an JSON object and convert it to a list:
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]


var obj = {
    name: "ISRO",
    age: 35,
    role: "Scientist"
};

function convertListToObject(obj) {
    // your code here
    return Object.keys(obj).map(key => [key, obj[key]]);
};

convertListToObject(obj);