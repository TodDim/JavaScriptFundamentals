function printArray(arr) {
    let res=''
    for (let i = 0; i <arr.length-1 ; i++) {
     res+=arr[i]+arr[arr.length-1]
    }
    console.log(res.slice(0,res.length-1));
}
printArray()