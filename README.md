# Guvi Zen - [Task-1](https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5)

## Table of Contents
- [Problem 0 : Part A](#problem-0--part-a)
- [Problem 0 : Part B](#problem-0--part-b)
- [Problem 1](#problem-1)
- [Problem 2](#problem-2)
- [Problem 3](#problem-3)
- [Problem 4](#problem-4)
- [Problem 5](#problem-5)


### Problem 0 : Part A
#### Playing with JSON object’s Values:
Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.

``` javascript
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [{
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre - sleep naps'],
            weight: 3
        }
    ]
};
console.log(cat);
```

###### Add height and weight to Fluffy
``` javascript
cat.height = 1;
cat.weight = 6;
```
###### Fluffy name is spelled wrongly. Update it to Fluffyy
``` javascript
cat.name = 'Fluffyy';
```
###### List all the activities of Fluffyy's catFriends.
``` javascript
console.log((cat.catFriends.map(friend => friend.activities.join())).join());
```
###### Print the catFriends names.
``` javascript
cat.catFriends.forEach(friend => console.log(friend.name));
```
###### Print the total weight of catFriends
``` javascript
console.log(cat.catFriends.reduce((acc, cur) => acc + +cur.weight, 0));
```
###### Print the total activities of all cats (op:6)
``` javascript
cat.catFriends.forEach(friend => console.log(friend.activities));
```
###### Add 2 more activities to bar & foo cats
``` javascript
cat.catFriends.forEach(friend => friend.activities.push('eat sleep repeat', 'post - sleep naps'));
```
###### Update the fur color of bar
```javascript
cat.catFriends[0].furcolor = 'black';
```

### Problem 0 : Part B
#### Iterating with JSON object’s Values

Above is some information about my car. As you can see, I am not the best driver.
I have caused a few accidents.
Please update this driving record so that I can feel better about my driving skills.
```javascript
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [{
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
};
```

###### Loop over the accidents array.Change atFaultForAccident from true to false.
```javascript
myCar.accidents.forEach(accident => accident.atFaultForAccident = false);
```
###### Print the dated of my accidents
```javascript
myCar.accidents.forEach(accident => console.log(accident.date));
```

### Problem 1
**Parsing an JSON object’s Values:**

Write a function called "printAllValues" which returns an newArray of all the input object’s values.

**Input (Object):**
``` javascript
var object = {name : "RajiniKanth", age : 25, hasPets : true};
```

**Output:**
``` javascript
['RajiniKanth', 33, false]
```

**Solution:**
``` javascript
var obj = {
    name: "RajiniKanth",
    age: 33,
    hasPets: false
};

function printAllValues(obj) {
    // your code here
    return Object.values(obj)
};

printAllValues(obj);
```

### Problem 2
**Parsing an JSON object’s Keys:**

Write a function called "printAllKeys" which returns an newArray of all the input object’s keys.

**Example Input:**
```javascript
{name : "RajiniKanth", age : 25, hasPets : true}
```
**Example Output:**
```javascript
["name", "age", "hasPets"]
```
**Solution:**
```javascript
var obj = {
    name: "RajiniKanth",
    age: 33,
    hasPets: false
};

function printAllKeys(obj) {
    // your code here
    return Object.keys(obj)
};

printAllValues(obj);
```


### Problem 3
**Parsing an JSON object and convert it to a list:**

Write a function called "convertObjectToList" which converts an object literal into an array of arrays.

**Input (Object):**
```javascript
var object = {name: "ISRO", age: 35, role: "Scientist"};
```
**Output:**
```javascript
[["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
```
**Solution:**
```javascript
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
```

### Problem 4
**Parsing a list and transform the first and last elements of it:**
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.

**Input (Array):**
```javascript
var array = ["GUVI", "I", "am", "Geek"];
```
**Output:**
```javascript
{GUVI : "Geek"}
```
**Solution:**
```javascript
var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
    let newObject = {};
    newObject[arr[0]] = arr[arr.length - 1];
    
    return newObject;
};

transformFirstAndLast(arr);
```

### Problem 5
**Parsing a list of lists and convert into a JSON object:**
Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

**Input (Array):**
```javascript
var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
```
**Output:**
```javascript
{
make : "Ford"
model : "Mustang",
year : 1964
}
```
**Solution:**
```javascript
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
```
