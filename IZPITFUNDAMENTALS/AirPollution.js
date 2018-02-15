function air(matrix, arr) {
// matrix=matrix.forEach(r=>r.split(" ").map(c=>Number(c)).push(matrix[r]))
    let map = []
    for (let i = 0; i < matrix.length; i++) {
        map.push(matrix[i].split(" ").map(c => Number(c)))
    }

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ")

        if (tokens[0] === 'breeze') {
            let r = map[tokens[1]].map(el => el -= 15)
            // r=r.map(el=>el<0? el===0:el)
            map[tokens[1]] = r
            map=check(map)
        }
        else if (tokens[0] === 'gale') {
            for (let i = 0; i <map.length ; i++) {
                 map[i].splice(Number(tokens[1]),1,map[i][tokens[1]]-20)
                map=check(map)

            }
        }
        else if (tokens[0] === 'smog') {
            for (let j = 0; j <map.length ; j++) {
                let r = map[j].map(el => el += Number(tokens[1]))

                map[j] = r
            }

        }

    }
    let res=''
    for (let i = 0; i <map.length ; i++) {
      for (let j = 0; j <map[i].length ; j++) {
        if (map[i][j]>=50){
        res+="["+i+"-"+j+"]"+", "
        }
      }
    }
    if(res.length<1){
console.log('No polluted areas');
    }
    else    console.log('Polluted areas: '+res.substr(0,res.length-2));

    function check(matrix) {
        for (let i = 0; i <matrix.length ; i++) {
          for (let j = 0; j <matrix[i].length ; j++) {
            if (matrix[i][j]<0){
                matrix[i][j]=0
            }
          }
        }
        return matrix
    }
}

// air([
//     "5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24",
// ], ["breeze 1", "gale 2", "smog 25"])

// air([
//         "5 7 3 28 32",
//         "41 12 49 30 33",
//         "3 16 20 42 12",
//         "2 20 10 39 14",
//         "7 34 4 27 24",
//     ],
//     [
//         "smog 11", "gale 3",
//         "breeze 1", "smog 2"
//     ])

air([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"])