function extract(arr) {
    let biggest=arr[0]
    console.log(biggest);
    for (let i = 1; i <arr.length ; i++) {
      if (arr[i]>=biggest){
          biggest=arr[i]
          console.log(biggest);
      }
    }
}
extract([1,3,8,4,10,12,3,24])