
// Javascript Arrays
var things1 = [1,2,3];

// Type mixing
var things2 = 
    [ 1,
     '2',
      3
    ];


// Can also put a function inside the array
var things3 = 
    [ 1,
     '2',
     function() {
         alert('Hello!');
     }];

things3[2]();


console.log(things1);
console.log(things2);
console.log(things3);
