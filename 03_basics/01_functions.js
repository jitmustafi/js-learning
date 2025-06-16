function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

const result = addTwoNumbers(2,3);
console.log(result);

function hello(name) {
    if(!name) {
        console.log('Please enter a value');
        return;
    }
    return (`Hello ${name}`);
}

const fncall = hello("jit");
console.log(fncall);