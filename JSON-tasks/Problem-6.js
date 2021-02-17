// Parsing a list of lists and convert into a JSON object:
// Write a function called "transformGeekData" that transforms some set of data from one format to another.
// Input (Array):
// var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
// Output:
// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]
// Sample Function proto:

var arr = [
    [
        ["firstName", "Vasanth"],
        ["lastName", "Raja"],
        ["age", 24],
        ["role", "JSWizard"]
    ],
    [
        ["firstName", "Sri"],
        ["lastName", "Devi"],
        ["age", 28],
        ["role", "Coder"]
    ]
];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];

    //Your code
    arr.forEach(subArr => {
        var newObject = {};
        subArr.forEach(elm => newObject[elm[0]] = elm[1]);
        tranformEmployeeList.push(newObject);
    });
    
    return tranformEmployeeList;
};

transformEmployeeData(arr);