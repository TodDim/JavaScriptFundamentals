function workingWithKeyValuePairs(arr) {
    let array={};
    for (let i=0;i<arr.length-1;i++) {
        array[arr[i].split(' ')[0]] = arr[i].split(' ')[1]
    }
    if(!(arr[arr.length-1] in array)){
        console.log('None')
    }
    else{
        console.log(array[arr[arr.length-1]])
    }

}
workingWithKeyValuePairs(['key value','key eulav','test tset','key'] )
workingWithKeyValuePairs(['3 test','4 test1','4 test2','4 test3','4 test5','4'] )
workingWithKeyValuePairs(['3 bla','3 alb','2'] )