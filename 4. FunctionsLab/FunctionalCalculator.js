function funcCalc(a,b, op) {

    let add= (a,b)=>a+b
    let subtract= (a,b)=>a-b
    let multiply =(a,b)=>a*b
    let divide= (a,b)=>a/b
    switch (op){
        case '+':
            return add(a,b)
        break;
        case '-':
            return subtract(a,b)
            break;
        case '*':
            return multiply(a,b)
            break;
        case '/':
            return divide(a,b)
            break;
    }
}

console.log(funcCalc(5, 2, '*'));