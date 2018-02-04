function lastKNumseq(n,k){
    let arr=[1]
    for (let i = 1; i <n ; i++) {
        arr.push(sum(arr.length-k))
    }
    console.log(arr.join(" "));
    function sum(start) {
        let res=0;
        for (let i =arr.length-1; i >=Math.max(0,arr.length-k) ; i--) {
            res+=arr[i]
        }
        return res;
    }

}