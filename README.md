# Guvi Zen - Task-1

## Table of Contents
- [Write up](#write-up)
- [JSON Tasks](#json-tasks)
    - [Problem 0 : Part A](#problem-0--part-a)
    - [Problem 0 : Part B](#problem-0--part-b)
    - [Problem 1](#problem-1)
    - [Problem 2](#problem-2)
    - [Problem 3](#problem-3)
    - [Problem 4](#problem-4)
    - [Problem 5](#problem-5)

## Write up
--------------------------------------------------------------------------------------------------------------------
1. **Difference between HTTP1.1 vs HTTP2 HTTP version history.**
   - HTTP 1.1 is the first standard version of http and released in 1997.
   - To overcome the limititaions of HTTP 1.1, in 2015 HTTP 2 was introduced, primarily developed by google to reduce web page load latency by using various technique

| version history | |
| --- | --- |
| HTTP 0.9 | 1991 |
| HTTP 1.1 | 1997 |
| HTTP 2.0 | 2015 |
| HTTP 3.0 | 2020 |
--------------------------------------------------------------------------------------------------------------------

2. **List 5 differences between Browser JS vs Node Js.**
    - javascript that runs on a client machine on browser environment, we called that as Browser JS. where as Node gives an environment for JavaScript to run outside the client machine/ browser.
    - Browser JavaScript has access to interect with DOM and browser APIs and all But it does not have access to file systems unlike Node Js.
    - While writting Browser Js for client, we have to take care of all browser support as we can not predict which version of Js that particular browser is using. But while writting Node Js, we dont have this issue.
--------------------------------------------------------------------------------------------------------------------

3. **what happens when you type a URL in the address bar in the browser?**
    - when we enter the url in the adress bar. The browser checks gets the ip address for that url from DNS.
    - then it's make a http get request to that ip address.
    - the the server sends a HTML file in response.
    - then it makes one more request if any additional supporting css or java file  is required.
    - then html parser, css parser and js engine make the page available for the user.
--------------------------------------------------------------------------------------------------------------------

4. **Write a write up on Difference between copy by value and copy by reference.** 
    - In JavaScript, we have 2 types of data types.
        - Primitive data types
        - Non-Primitive data types
    - when we try to copy a Primitive data type (such as String, Number, Boolean etc), It creates a new copy of that value and assigned the target variable. both the source and target has no relation at all.
    - In the other hand, for Non-Primitive data type (such as Array, Object, Fucnction), when we try to copy from one variable to other, instade of creating a separate copy of it, it assign a reference of the same value to the target variable. It means both the variable points to the same value. any chnage in one variable will refect on the other.
--------------------------------------------------------------------------------------------------------------------

5. **How to copy by value a composite data type (array+objects).** 
   - we have 3 methods to do so.
     - using spread operator.
     - using Object.assign().
     - using JSON parser and stringify.
   - among these 3 first two makes shallow copy where as using JSON's method we can do deep copy of an object.
--------------------------------------------------------------------------------------------------------------------

6. **JSON tasks:** [Problem](https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5)
   
    - [Solutions](#json-tasks)
--------------------------------------------------------------------------------------------------------------------



## JSON Tasks

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
--------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------

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
