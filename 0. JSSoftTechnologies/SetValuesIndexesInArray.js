function setValuesIndexesInArray(arr) {
    let array=new Array(Number(arr[0])).fill(0)
    for (let i=1;i<arr.length;i++){
        array[arr[i].split(' - ')[0]]=arr[i].split(' - ')[1]
    }
    for (let j=0;j<array.length;j++){
        console.log(array[j])
    }
}
setValuesIndexesInArray(['3','0 - 5','1 - 6','2 - 7'] )