// let val = ((30 + 25) / 3 * (35 - 14 - 12)) ** 2;
// console.log(val);

// function sum(nums) {
//     let num1=Number(nums[0])
//     let num2=Number(nums[1])
//     let num3=Number(nums[2])
//     let sum=num1+num2+num3
//
//     return sum
// }
//  console.log(sum(['5','10','3']))

// function threeIntegerSUm(arr) {
//     let nums=arr[0].split(' ').map(Number);
//     console.log(
//         check(nums[0],nums[1],nums[2])||
//         check(nums[0],nums[2],nums[1])||
//         check(nums[1],nums[2],nums[0])||'No'
//
//     );
//
//     function check(num1, num2, sum) {
//         if (num1 + num2 != sum)
//             return false;
//         if (num1 > num2)
//             [num1, num2] = [num2, num1]; // Swap num1 and num2
//         return `${num1} + ${num2} = ${sum}`;
//     }
// }
// threeIntegerSUm(['8 15 7']);

// function symmetricNumbers(arr) {
//     let n = Number(arr[0]), result = ''
//     for (let i = 1; i <= n; i++)
//         if (isSymmetric(i.toString()))
//             result += i + " "
//     console.log(result)
//     function isSymmetric(str) {
//         for (let i = 0; i < str.length / 2; i++)
//             if (str[i] != str[str.length - i - 1])
//                 return false
//         return true
//     }
// }
// symmetricNumbers(['1000']);

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(2, 3));

// let obj = { name : "SoftUni", age : 2 };
// console.log(obj); // Object {name: "SoftUni", age: 2}
// obj['site'] = "http://www.softuni.bg";
// obj.age = 10;
// obj['name'] = "Software University";
// console.log(obj); // Object {name: "Software University", age: 10, site: "http://www.softuni.bg"}
// delete obj.name;
// delete obj.site;
// console.log(obj); // Object {age: 10}

// function calcSumsByTown(arr) {
//     let objects = arr.map(JSON.parse);
//     let sums = {};
//     for (let obj of objects)
//         if (obj.town in sums)
//             sums[obj.town] += obj.income;
//         else
//             sums[obj.town] = obj.income;
//     let towns = Object.keys(sums).sort();
//     for (let town of towns)
//         console.log(`${town} -> ${sums[town]}`);
// }
// calcSumsByTown(['{"town":"Sofia","income":200}',
//     '{"town":"Varna","income":120}',
//     '{"town":"Pleven","income":60}',
//     '{"town":"Varna","income":70}']);

// let numbers = [1, 2, 3, 4];
// console.log(numbers.join('|')); // result: 1|2|3|4|5
// numbers.push(5);
// console.log(numbers.join('|')); // result: 1|2|3|4|5
// let tail = numbers.pop();       // tail = 5;
// console.log(numbers.join('|')); // result: 1|2|3|4
// numbers.unshift(0);
// console.log(numbers.join('|')); // result: 0|1|2|3|4
// let head = numbers.shift();     // head = 0;
// console.log(numbers.join('|')); // result: 1|2|3|4

// function largest3Numbers(arr) {
//     let nums = arr.map(Number);
//     let numsSorted = nums.sort((a, b) => b - a);
//     let count = Math.min(3, arr.length);
//     for (let i = 0; i < count; i++)
//         console.log(numsSorted[i]);
// }
// largest3Numbers(['10', '30', '15', '20', '50', '5'])


// function extractCapitalCaseWords(arr) {
//     let text = arr.join(",");
//     let words = text.split(/\W+/);
//     let nonEmptyWords = words.filter(w => w.length > 0);
//     let upWords = nonEmptyWords.filter(isUppercase);
//     console.log(upWords.join(", "));
//     function isUppercase(str) {
//         return str === str.toUpperCase();
//     }
// }
// extractCapitalCaseWords(['PHP, Java and HTML'])

// function calculateSumAndVAT(nums){
//     let sum=0
//     for (let x of nums) {
//         sum+=x
//     }
//
//     let vat=sum*0.2
//
//     console.log('sum = '+sum);
//     console.log('VAT = '+vat);
//     console.log('total = '+(sum+vat));
// }
// calculateSumAndVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445])

// function letterOccurs(str, letter){
//     let occurs=0;
//     for (let i=0;  i< str.length;i++) {
//         if (str[i]===letter){
//             occurs++;
//         }
//     }
//     console.log(occurs);
//
// }
// letterOccurs('hello','l')
//
// function filterByAge(minAge, name1, age1, name2, age2) {
//     let person1={name : name1,age : age1};
//     let person2={name : name2,age : age2};
//     if (person1.age>=minAge){
//         console.log(person1);
//     }
//     if (person2.age>=minAge){
//         console.log(person2);
//     }
// }
// filterByAge(12, 'Ivan', 15, 'Asen', 9)

// function stringOfNumbers(number) {
//     let str='';
//     for (let i = 1; i <=number ; i++) {
//         str=str+i
//     }
//     console.log(str);
// }
// stringOfNumbers(11);

// function figureArea(w, h, W, H) {
//     let area=W*H+w*h-Math.min(w,W)*Math.min(h,H);
//     console.log(area);
// }
// figureArea(13,2,5,8)

// function calcNextDay(year, month, day) {
//     let date = new Date(year, month-1, day);
//     let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
//     let nextDate = new Date(date.getTime() + oneDay);
//     return nextDate.getFullYear() + "-" +
//         (nextDate.getMonth() + 1) + '-' +
//         nextDate.getDate();
// }

// function distBetwTwoPoints(x1,y1,x2,y2) {
//     let dist=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
//     console.log(dist);
// }
// distBetwTwoPoints(2,4,5,0)

