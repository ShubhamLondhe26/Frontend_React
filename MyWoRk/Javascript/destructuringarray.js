function calculate(a,b){
    const add = a + b;
    const sub = a - b;
    const mul = a * b;

    return [add,sub,mul]
}

const [add,sub,mul] = calculate(5,6);
console.log("Addition: "+ add + " Subtraction: " + sub + " MUltiplication: " + mul);