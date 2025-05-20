// Exercise 1
var number = 1742;

var result = number % 2;

if (result == 0) {
    console.log(number, "the number is even!");
} else {
    console.log(number, "the number is odd!");
}

// Exercise 5
var year = 2025;

if (year % 4 == 0) {
    if (year % 100 != 0 || year == 400) {
        console.log(year, "is a leap year!");
    } else {
        console.log(year, "is not a leap year!");
    }
} else {
    console.log(year, "is not a leap year!");
}

// While loop
var i = 0;

while (i < 30) {
    console.log("hello");
    i++;
}

// For loop
for (var i = 0; i < 30; i++) {
    console.log("hello");
}

// var name = null;