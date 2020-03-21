function isPrime(num) {
    let i = 3;

    switch (num) {
        case 1:
            return false;
        case 2:
            return true;
    }

    for (i; i < Math.sqrt(num); i++) {
        if(num % i === 0){
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(2)); // true;
console.log(isPrime(1)); // false;
console.log(isPrime(13)); // true;
console.log(isPrime(97)); // true;
console.log(isPrime(1000000007)); // true;
console.log(isPrime(1000000011)); // false;
