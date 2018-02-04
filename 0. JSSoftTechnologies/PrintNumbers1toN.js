function printOnetoN(arr) {
    for (let i = 1; i <= Number(arr); i++){
        console.log(i)
    }
}
printOnetoN(5)

function printNtoOne(arr) {
    for (let i = Number(arr); i >=1; i--){
        console.log(i)
    }
}
printNtoOne(5)

function printLines(arr) {
let index=0;
    while (arr[index]!=='Stop'){
        console.log(arr[index])
        index++;
    }
}
printLines(['Line 1','Line 2','Stop'])

function printNumbersInReversedOrder(arr) {
    let index=arr.length;
    for (let i = index-1; i >=0; i--){
        console.log(arr[i])
    }
}
printNumbersInReversedOrder(['10','15','20'])