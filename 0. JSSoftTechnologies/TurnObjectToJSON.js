function turnObjectToJSON(arr) {
    let str = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens=arr[i].split(" -> ");
    str[tokens[0]]=tokens[1];
        if(tokens[0]=="grade"||tokens[0]=="age"){
            str[tokens[0]]=Math.round(parseInt(tokens[1]));
        }
    }

    console.log(JSON.stringify(str))
}
turnObjectToJSON(["name -> Angel",
"surname -> Georgiev",
"age -> 20",
"grade -> 6.00",
"date -> 23/05/1995",
"town -> Sofia"])