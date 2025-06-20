

// 
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
console.log(factorial(6));

// 
console.log(`половина от нихуя равна ${100/2}`);
console.log(3 > 2);
console.log(3 < 2);

// ГЛАВА 2. СТРУКТУРА ПРОГРАММЫ
// ПЕРЕМЕННЫЕ
let ten = 10;
console.log(ten * ten);

// 
let mood = "light";
console.log(mood);
mood = "hard";
console.log(mood);

// 
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);


// ФУНКЦИИ
console.log(Math.max(2, 4));

console.log(Math.min(2, 4) + 100);

// 
let theNumber = Number(promt("введите число"));
console.log("если это число является квадратным корнем из " + theNumber * theNumber);



