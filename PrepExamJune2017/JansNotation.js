function notate(arr) {
    let numbers=[]
    let operators=[]
    for (let i = 0; i <arr.length ; i++) {
       if (Number(arr[i])){
           numbers.push(arr[i])
       }
       else{
           if(numbers.length<2){
            console.log('Error: not enough operands!');
            return
           }
           switch (arr[i]){
               case '*': numbers[numbers.length-2]=numbers[numbers.length-1]*numbers[numbers.length-2]; numbers.pop();break
               case '+': numbers[numbers.length-2]=numbers[numbers.length-1]+numbers[numbers.length-2]; numbers.pop();break
               case '/': numbers[numbers.length-2]=numbers[numbers.length-2]/numbers[numbers.length-1]; numbers.pop();break
               case '-': numbers[numbers.length-2]=numbers[numbers.length-2]-numbers[numbers.length-1]; numbers.pop();break
           }
       }
    }
    if (numbers.length>1){
        console.log('Error: too many operands!');
        return
    }
    console.log(numbers[0]);
}
// notate([31, 2, '+',  11,   '/'])
// notate([7,
//     33,
//     8,
//     '-'])
// notate([15,
//     '/'])
// notate([-1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/'])