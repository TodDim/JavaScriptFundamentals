// function helJS(name) {
//     console.log('Hello, '+name+', I am JavaScript!');
// }
//
// function areaAndPer(a,b) {
//     console.log(a*b);
//     console.log(2*a+2*b);
// }

// function distOverTime(array) {
//     console.log(Math.abs(Number (array[0])*Number(array[2])/3600-Number(array[1])*Number(array[2])/3600)*1000);
// }

// function dist3d(array){
//     console.log(Math.pow((Math.pow((array[3] - array[0]),2) + Math.pow((array[4] - array[1]),2) + Math.pow((array[5] - array[2]),2)),1/2));
//
// }
// dist3d([3.5, 0, 1, 0, 2, -1])

// function gradsToDegrees(n){
//     if (n<0){
//         console.log((400+n%400)*0.9);
//     }
//     else
//     console.log(n%400*0.9);
// }
// gradsToDegrees(-50);

// function compoundInterest(array) {
//     let compInt=array[0]*Math.pow((1+(array[1]/100)/(12/array[2])),(12/array[2])*array[3]);
//     console.log(Math.round(compInt*100)/100);
// }
// compoundInterest([1500,4.3,3,6])

// function round(array) {
//     if (array[1]>15){
//         array[1]=15;
//     }
//   let mult=Math.pow(10,array[1])
//     console.log(Math.round(array[0]*mult)/mult);
// }
// round([10.5, 3])

// function imperial(n) {
//     let feet=Math.floor(n/12);
//     let inches=n%12;
//     console.log(feet+'\'-'+inches+"\"");
// }
// imperial(11)

// function nowplaying(arr) {
//     console.log('Now Playing: '+arr[1]+' - '+arr[0]+' ['+arr[2]+']');
// }
// nowplaying(['Number One', 'Nelly', '4:09'])

// function composeTag(arr) {
//     console.log(`<img src=\"${arr[0]}" alt=\"${arr[1]}">`);
// }
// composeTag(['smiley.gif', 'Smiley Face'])

// function binary(n) {
//     console.log(parseInt(n,2));
// }
// binary(1001);

// function assignprop(arr) {
//     let obj={[arr[0]]:arr[1],[arr[2]]:arr[3],[arr[4]]:arr[5] }
//     console.log(obj);
// }
// assignprop(['name', 'Pesho', 'age', '23', 'gender', 'male']);

// function lastDayPrevMonth(arr) {
//     let d=new Date(arr[2],arr[1]-1,arr[0]);
//    d.setDate(1);
//    d.setHours(-1)
//     console.log(d.getDate());
// }
// lastDayPrevMonth([17,3,2002])

// function biggestOfThree(arr) {
//     let biggest=arr[0]
//     if (arr[1]>biggest){
//         biggest=arr[1]
//     }
//     if (arr[2]>biggest){
//         biggest=arr[2]
//     }
//     console.log(biggest);
// }
// biggestOfThree([5,-2,7])
//
// function pointInRect(arr) {
//     let x=arr[0]
//     let y=arr[1]
//     let xMin=arr[2]
//     let xMax=arr[3]
//     let yMin=arr[4]
//     let yMax=arr[5]
//     if (x>=xMin&&x<=xMax&&y>=yMin&&y<=yMax){
// console.log('inside');
//     }
//     else console.log('outside');
//
// }
// pointInRect([8,-1,2,12,-3,3])

// function oddNumbers(n) {
//     for (let i = 1; i <=n ; i+=2) {
//           console.log(i);
//     }
// }

// function triangleOfDollars(n) {
//     let res=''
//     for (let i = 1; i <=n ; i++) {
//       for (let j = 1; j <=i ; j++) {
//           res+='$'
//       }
//       res+='\n'
//     }
//     console.log(res);
// }
// triangleOfDollars(2)

// function quadraticEquation(a, b, c) {
//     let d = Math.pow(b, 2) - 4 * a * c;
//     if(d > 0) {
//         let x1 = (-b + Math.sqrt(d))/(2 * a);
//         let x2 = (-b - Math.sqrt(d))/(2 * a);
//
//         console.log(Math.min(x1, x2));
//         console.log(Math.max(x1, x2));
//     } else if(d == 0) {
//         let x = -b/(2 * a);
//
//         console.log(x);
//     } else {
//         console.log("No");
//     }
// }
// quadraticEquation(6,11,-35)

function figureOfSquares(n) {
    let res=''
    for (let j = 1; j <=2 ; j++) {
        res += '+'
        for (let i = 1; i <= n - 2; i++) {
            res += '-'
        }
    }
    res += '+'
        for (let k = 1; k <=n-5 ; k++) {
            res+='\n|'
            res+=(' '.repeat(n-2))
            res+='|'
            res+=(' '.repeat(n-2))
            res+='|'
        }
        res+='\n'
    for (let j = 1; j <=2 ; j++) {
        res += '+'
        for (let i = 1; i <= n - 2; i++) {
            res += '-'
        }

    }
    res += '+'

    for (let k = 1; k <=n-5 ; k++) {
        res+='\n|'
        res+=(' '.repeat(n-2))
        res+='|'
        res+=(' '.repeat(n-2))
        res+='|'
    }
    res+='\n'
    for (let j = 1; j <=2 ; j++) {
        res += '+'
        for (let i = 1; i <= n - 2; i++) {
            res += '-'
        }

    }
    res += '+'
    console.log(res);

}
// figureOfSquares(4)

// function figureOf4Squares(num) {
//     let length = num % 2 == 0 ? num - 1 : num;
//
//     for(let i = 1; i<= length; i++) {
//         if(i == 1 || i == length || (length +1)/i == 2) {
//             console.log("+" + "-".repeat(num-2) + "+" + "-".repeat(num-2) + "+");
//         } else {
//             console.log("|" + " ".repeat(num-2) + "|" + " ".repeat(num-2) + "|");
//         }
//     }
// }

figureOf4Squares(4)