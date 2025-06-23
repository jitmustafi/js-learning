function checkPrime(n) {
    for (let index = 2; index < (n / 2); index++) {
        if (n % index == 0) {
            return false;
        }
    }

    return true;
}
const n = 2;
const res = checkPrime(n);

console.log(`is ${n} prime number? ${res}`);
