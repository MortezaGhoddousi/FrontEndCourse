// comparison operators

var x = 7;
var y = 15;

var z = x < y;
console.log("x < y", z);

z = x > y;
console.log("x > y", z);

z = x <= y;
console.log("x <= y", z);

z = x >= y;
console.log("x >= y", z);

z = x == y;
console.log("x == y", z);

z = x != y;
console.log("x != y", z);

x = 4;
y = "4";

z = x == y;
console.log("x == y", z);

z = x === y;
console.log("x === y", z);

// logical operators

x = true;
y = true;

z = true && true && true && true;
z = false || false || false || false;

console.log(!(((4 == '4') && true) || false));

// if statement

var age = 5;

if (age > 18) {
    console.log('adult');
} else if (age > 10) {
    console.log('teenager');
} else {
    console.log('child');
}

console.log('end of the script!');
