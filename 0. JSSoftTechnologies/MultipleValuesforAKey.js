function multipleValuesForaKey(arr) {
    let array={};
    for (let i=0;i<arr.length-1;i++) {
        if (array[arr[i].split(' ')[0]]===undefined) {
            array[arr[i].split(' ')[0]] = [arr[i].split(' ')[1]]
        }
        else{
            array[arr[i].split(' ')[0]].push(arr[i].split(' ')[1])
        }
        // array.push(array[arr[i].split(' ')[0]],arr[i].split(' ')[1])

    }
    if(!(arr[arr.length-1] in array)){
        console.log('None')
    }
    else{
        for (let obj of array[arr[arr.length-1]]) {
            console.log(obj)
        }

    }

}
multipleValuesForaKey(['key value','key eulav','test tset','key'] )
multipleValuesForaKey(['3 test','3 test1','4 test2','4 test3','4 test5','4'] )
multipleValuesForaKey(['3 bla','3 alb','2'] )