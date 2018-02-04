// function capture(arr) {
//     let res=''
//     let regex=/[0-9]+/g
//     let m;
//     for (let str of arr) {
//         m=str.match(regex)
//         if(m){
//             for (let i = 0; i <m.length ; i++) {
//                 res+=m[i]+" "
//             }
//         }
//     }
//     console.log(res);
// }

function capture(arr){
    let numbers=[]
    let regex=/[0-9]+/g
    let text=''
    for (let i = 0; i <arr.length ; i++) {
      let current=arr[i]
        text+=current+" "
    }
    let m=regex.exec(text)
    while (m){
        numbers.push(m[0])
        m=regex.exec(text)
    }
    console.log(numbers.join(" "));
}
capture(['123a456', '789b987', '654c321', '0'])

