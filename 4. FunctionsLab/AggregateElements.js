function aggregElements(arr) {
    console.log(aggreg(arr,0,(a,b)=>a+b));
    console.log(aggreg(arr,0,(a,b)=>a+1/b));
    console.log(aggreg(arr,'',(a,b)=>a+b));
    function aggreg(arr,initialVal,func) {
        let val=initialVal;
        for (let i = 0; i <arr.length ; i++) {
          val=func(val,arr[i])

        }
        return val;
    }
}
aggregElements([1,2,3])