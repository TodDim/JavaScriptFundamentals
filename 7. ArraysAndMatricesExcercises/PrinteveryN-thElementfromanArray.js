function printNelemrnth(arr) {
    let step=arr[arr.length-1]
    let res=arr.pop()
    res=  arr.filter((el, i) => i % step === 0)
    console.log(res.join("\n"));
}
printNelemrnth([1,2,3,4,2])