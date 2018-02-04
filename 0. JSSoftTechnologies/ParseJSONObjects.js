function parseJSONObjects(arr) {
    let array = [];
    for (let i=0;i<arr.length;i++) {
        array.push(JSON.parse(arr[i]))
    }
    for (let obj of array) {
        console.log('Name: '+obj.name)
        console.log('Age: '+obj.age)
        console.log('Date: '+obj.date)
    }
}
parseJSONObjects(['{"name":"Gosho","age":10,"date":"19/06/2005"}','{"name":"Gosho","age":10,"date":"19/06/2005"}'])