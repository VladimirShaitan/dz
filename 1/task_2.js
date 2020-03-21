// В коде из задачи не была объявлена переменная sum

let n = 10000;
let arr = [];

// Объявляем переменную sum
let sum = 0;

for(let i = 0; i < n; i++) {
    arr.push( i * i + 2 * i + 28 );
}

for(let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for(let j = 0; j < i; j++) {
            // В коде из задачи не была объявлена переменная sum
            sum += arr[j];
        }
    }
}
console.log(sum);
console.log('Сложность данного алгоритма O(n^2) n-квадрат');