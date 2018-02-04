function addRemove(arr) {
    let res=[]
    let n=1;
    for (let i = 0; i <arr.length ; i++) {
      if (arr[i]==='add'){
          res.push(n)
          n+=1;
      }
      else if(arr[i]==='remove'){
          res.pop()
          n+=1;
      }
    }
    if (res.length===0){
        console.log('Empty');
    }
    else
    console.log(res.join("\n"));
}
// addRemove(['add','add','add','add'])
// addRemove(['add','add','remove','add','add'])
addRemove(['remove','remove'])