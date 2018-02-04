function magic(m) {
    let isMagic=true;
    let sum=0;
    let fSum=0;
    for (let i = 0; i <1 ; i++) {
        for (let j = 0; j <m[0].length ; j++) {
            fSum+=m[i][j]
        }
            }

    for (let i = 0; i <m.length ; i++) {
        sum=0;
      for (let j = 0; j <m[i].length ; j++) {
        sum+=m[i][j]
      }
      if (sum!==fSum){
          return false
      }
    }

    for (let i = 0; i <m[0].length ; i++) {
        sum=0;
        for (let j = 0; j <m.length ; j++) {
            sum+=m[j][i]
        }
        if (sum!==fSum){
            return false
        }
    }
    return isMagic
}

console.log(magic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magic([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));