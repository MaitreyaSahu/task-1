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
//console.log(cat);

//Add height and weight to Fluffy
cat.height = 1;
cat.weight = 6;
// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy';
// List all the activities of Fluffyy's catFriends.
console.log((cat.catFriends.map(friend => friend.activities.join())).join());
// Print the catFriends names.
cat.catFriends.forEach(friend => console.log(friend.name));
// Print the total weight of catFriends
console.log(cat.catFriends.reduce((acc, cur) => acc + +cur.weight, 0));
// Print the total activities of all cats (op:6)
cat.catFriends.forEach(friend => console.log(friend.activities));
// Add 2 more activities to bar & foo cats
cat.catFriends.forEach(friend => friend.activities.push('eat sleep repeat', 'post - sleep naps'));
// Update the fur color of bar
cat.catFriends[0].furcolor = 'black';