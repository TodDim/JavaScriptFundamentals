function build(arr) {
    let res=''
    let heights=arr.map(h=>Number(h))
    let teams=heights.length

    while (heights.length>0){
        for (let i = 0; i <heights.length ; i++) {
            if (heights[i]<30){

                heights[i]++
            }
            else {
                heights.splice(i,1)
                teams--
                i--
            }
        }
        res+=teams*195+', '
    }
    res=res.substring(0,res.length-5)

    console.log(res);
    console.log(res.split(", ").map(c=>Number(c)).reduce((a,b)=>a+b)*1900+" pesos");
}
// build(['21','25','28'])
// build(['17'])
build(['17', '22', '17', '19', '17'])