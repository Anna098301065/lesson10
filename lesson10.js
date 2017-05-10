/*function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3);

//--------------------------------------

function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log("your doggie is " + dogYears + " years old in dog years! ");
}

calculateDogAge(1);
calculateDogAge(0.5);

//----------------------------------------

function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    console.log("you will need " + totalNeeded + " cups of tea to last you");

}

calculateSupply(23, 36);
calculateSupply(28, 2.5);

//-----------------------------------------

var cube = function(y) {
    return y * y * y;
};
console.log(cube(5));
console.log(cube("test"));

//----------------------------------------

var cube = function(w) {
    if (typeof(w) !== "number") return 0;
    return w * w * w;
}
console.log(cube(5));
console.log(cube("test"));

var t = function(check) {
    if (typeof(check) === "string") {
        return true;
    } else return false;
}

console.log(t("rrr"));
console.log(t(12));
console.log(t(true));

//----------------------------
var ww = 15;
var volume = function(ww, l, h) {
    return ww * l * h;
}

console.log(volume(2, 3, 4));
console.log(ww);

//-------------------------------

var area = 35;

var volume = function(w, l, h) {
    var area = w * l;
    console.log("inside the function, area is " + area);
    return area * h;
};

console.log("the volume is " + volume(2, 3, 4));
console.log("area is " + area);

///--------------------------------------------

function getMAxNumb(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else return n2;
};

var num1 = 5;
var num2 = 6;
alert(getMAxNumb(1, 0.4));
alert(getMAxNumb(num1, num2));

*/
//---------------------------------------------

function doubleMax(x, y) {

    return 2 * getMaxNumb(x, y);
}

function getMaxNumb(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else return n2;
};

console.log(doubleMax(11, 12));

//---------------------------------------------

function luckyNumber(a, b, c) {

    var lucky = b * getMin(a, c);

    return lucky;
}

function getMin(n1, n2) {
    if (n1 > n2) {
        return n2;
    } else {
        return n1;
    }
}

alert("your lucky number is: " + luckyNumber(5, 6.5, 25));