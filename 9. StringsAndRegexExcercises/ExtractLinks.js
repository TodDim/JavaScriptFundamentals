// function extract(arr) {
//     const regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
//     let m;
//     let res = '';
//     for (let str of arr) {
//         while ((m = regex.exec(str)) !== null) {
//             if (m.index === regex.lastIndex) {
//                 regex.lastIndex++;
//             }
//             res+=m[0]+"\n"
//         }
//     }
//     console.log(res);
// }
// extract(['Join WebStars now for free, at www.web-stars.com',
//             'You can also support our partners:',
//              'Internet - www.internet.com',
//             'WebSpiders - www.webspiders101.com',
//             'Sentinel - www.sentinel.-ko'])

function lih(n) {
    let imp=n
    let sum=n;
    for (let i = 1; i <=11 ; i++) {
    sum+=n*0.1+imp
        n+=imp
    }
    console.log(sum);
}
lih(5000)
