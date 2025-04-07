

let vards = "Jānis";
let vecums = 20;
let irPilsonis = true;


console.log("1. UZDEVUMS");
console.log(`Vārds: ${vards}`);
console.log(`Vecums: ${vecums}`);
console.log(`Ir pilsonis: ${irPilsonis}`);


if (vecums >= 18 && irPilsonis) {
    console.log("Drīkst balsot.");
} else if (vecums >= 18 && !irPilsonis) {
    console.log(`Personai ir ${vecums} gadi, bet viņa nav pilsonis.`);
} else if (vecums < 18 && irPilsonis) {
    console.log(`Personai ir tikai ${vecums} gadi, lai gan viņa ir pilsonis.`);
} else {
    console.log(`Personai ir tikai ${vecums} gadi un viņa nav pilsonis.`);
}


console.log("\n2. UZDEVUMS");
let atzime = parseInt(prompt("Lūdzu, ievadiet atzīmi (0-100):"));

let vertējums;
if (atzime >= 90 && atzime <= 100) {
    vertējums = "Izcili";
} else if (atzime >= 70 && atzime <= 89) {
    vertējums = "Labi";
} else if (atzime >= 50 && atzime <= 69) {
    vertējums = "Vidēji";
} else if (atzime >= 0 && atzime <= 49) {
    vertējums = "Slikti";
} else {
    vertējums = "Nepareizi ievadīta atzīme!";
}

console.log(`Atzīme: ${atzime}, Vērtējums: ${vertējums}`);


console.log("\n3. UZDEVUMS");
let saraksts = [];

saraksts.push("Pirmais elements");
saraksts.push("Otrais elements");
saraksts.push("Trešais elements");
saraksts.push("Ceturtais elements");
saraksts.push("Piektais elements");

console.log("Masīva elementi:");
for (let i = 0; i < saraksts.length; i++) {
    console.log(saraksts[i]);
}


console.log("\n4. UZDEVUMS*");
console.log("Masīva elementi apgrieztā secībā:");
for (let i = saraksts.length - 1; i >= 0; i--) {
    console.log(saraksts[i]);
}


console.log("\n5. UZDEVUMS");
function calculate() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operator = document.getElementById("operator").value;
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const resultElement = document.getElementById("result");
    
    if (isNaN(operand1) || isNaN(operand2)) {
        resultElement.textContent = "Lūdzu, ievadiet derīgus skaitļus!";
        return;
    }
    
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 === 0) {
                resultElement.textContent = "Dalīt ar nulli nav iespējams!";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            resultElement.textContent = "Nepareizs operators! Lūdzu, izmantojiet +, -, *, vai /";
            return;
    }
    
    resultElement.textContent = `Rezultāts: ${result}`;
    console.log(`Kalkulators: ${operand1} ${operator} ${operand2} = ${result}`);
}