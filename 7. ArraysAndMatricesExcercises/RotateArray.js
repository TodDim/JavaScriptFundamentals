function rotate(arr) {
    let rotations=arr[arr.length-1]
    arr.pop()
    for (let i = 0; i <rotations%arr.length ; i++) {

        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}
rotate([1,2,3,4,1])