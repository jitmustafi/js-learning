const n = 5;
let a = 0, b = 1;
for (let index = 1; index < n; index++) {
    const sum = a + b;
    a = b;
    b = sum;
    console.log(`fibonacci of ${index} is ${b}`);
}

const res = (n === 0) ? 0 : b;
console.log('fib', res);

/*
0: 0
1: 1
2: 1 + 0 = 1;
3: 1 + 1 = 2;
4: 1 + 2 = 3;
5: 2 + 3 = 5;
*/
