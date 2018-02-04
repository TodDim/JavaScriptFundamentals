function sort(arr) {
 arr.sort((a,b)=>{
        let res=a.length-b.length
     // console.log(res);
        if (res===0){
             res=a.toLowerCase()>b.toLowerCase()
            // console.log(res)
        }
        return res;
    }).forEach(e=>console.log(e))

}
// sort(['Isacc','Theodor','Jack','Harrison','George'])
// sort(['alpha','beta','gamma'])
sort(['test','Deny','omen','Default'])