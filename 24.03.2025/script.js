// 
let a = 10;
let b = 5;

// 
console.log("Summa:", a + b);
console.log("Starpība:", a - b);
console.log("Reizinājums:", a * b);
console.log("Dalījums:", a / b);

// 
console.log("a pakāpē b:", a ** b);
console.log("Dalījuma atlikums:", a % b);

// 
if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else {
    console.log("b ir lielāks par a");
}

// 
switch (true) {
    case a > b:
        console.log("a ir lielāks par b");
        break;
    case a == b:
        console.log("a ir vienāds ar b");
        break;
    default:
        console.log("b ir lielāks par a");
}

// 
let masivs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 
for (let i = 0; i < masivs.length; i++) {
    console.log("Masīva elements:", masivs[i]);
}

// 
for (let i = masivs.length - 1; i >= 0; i--) {
    console.log("Masīva elements apgrieztā secībā:", masivs[i]);
}
