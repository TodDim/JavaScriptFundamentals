function storingObjects(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push({Name: arr[i].split(' -> ')[0], Age: arr[i].split(' -> ')[1], Grade: arr[i].split(' -> ')[2]})
    }
    for (let obj of array) {
        console.log('Name: '+obj.Name)
        console.log('Age: '+obj.Age)
        console.log('Grade: '+obj.Grade)

    }
}
    storingObjects(['Pesho -> 13 -> 6.00','Ivan -> 12 -> 5.00','Toni -> 17 -> 3.00'])
