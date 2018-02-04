// function calculateBoxes(a,b) {
//     console.log(Math.ceil(a/b));
// }
// calculateBoxes(20,5)

// function leapYear(n) {
//     if ((n%4===0&&n%100!==0)||n%400===0){
//         console.log('yes');
//     }
//     else{
//         console.log('no');
//     }
// }
// leapYear(2000)

// function circleArea(n) {
//     console.log(Math.PI*n*n);
//     console.log(Math.round(Math.PI*n*n*100)/100);
// }
// circleArea(5)

// function triangleArea(a,b,c) {
//     let sp=(a+b+c)/2
//     console.log(Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c)));
// }
// triangleArea(2,3.5,4)

// function cone(r,h) {
//     let l=Math.sqrt(r*r+h*h);
//
//     console.log('volume = '+Math.PI*r*r*h/3);
//     console.log('area = '+Math.PI*r*(r+l));
// }
// cone(3,5)

// function oddOrEven(n) {
//     if (Math.abs(n)%2===0){
//         console.log('even');
//     }
//     else if (Math.abs(n)%2===1){
//         console.log('odd');
//     }
//     else{
//         console.log('invalid');
//     }
// }
// oddOrEven(-1)

// function colorfulNumbers(n) {
//     let color='';
//     console.log('<ul>\n');
//     for (let i = 1; i <=n; i++) {
//
// if (i%2===0){
//     color='blue';
// }
// else{
//     color='green';
// }
//         console.log(`<li><span style=\'color:${color}\'>${i}</span></li>`);
//     }
//     console.log('</ul>');
// }
// colorfulNumbers(10)

// function chessboard(n) {
//     let color='';
//     let row=0;
//     console.log('<div class="chessboard">');
//
//     for (let i = 1; i <=n; i++) {
//         console.log('  <div>');
//         row+=1;
//         for (let i = 1; i <=n; i++) {
//             if ((row+i)%2==0){
//                 color='black'
//             }
//             else{
//                 color='white'
//             }
//             console.log(`    <span class="${color}"></span>`);
//         }
//         console.log('  </div>');
//
//     }
//     console.log('</div>');
// }
// chessboard(3)

// function log(array){
//     for (let x of array) {
//         console.log(Math.log2(x));
//     }
//
// }
// log(['2','4']);

function  prime(n) {
    let prime=true;
    if (n<0||n===1||n===0){
        return prime=false;
    }
    if (n===2){
        return prime=true
    }
    for (let x = 2; x <=Math.sqrt(n) ; x++) {
        if (n%x===0){
            return prime=false;
        }
    }

    return prime
}
console.log(prime(0));