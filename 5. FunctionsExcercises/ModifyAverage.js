function modifyAverage(n) {
    let res='';
    let sum=0
    while (n>=1){
        res=res+n%10;
        sum+=n%10
        n=Math.floor(n/10);
    }
        res=res.split("").reverse().join("")
        while (sum / res.length <= 5) {
            res += '9'
            sum += 9;
        }
        console.log(res)
}

modifyAverage(5835);
