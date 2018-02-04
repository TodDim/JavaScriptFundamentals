function find(str) {
    let regex=/_[A-Za-z0-9]+/g
    let m=str.match(regex)
    let res=''
    if (m){
        for (let i = 0; i <m.length ; i++) {
          res+=m[i].substring(1)+","
        }
    }
    console.log(res.substring(0,res.length-1));
}
find('The _id and _age variables are both integers.')