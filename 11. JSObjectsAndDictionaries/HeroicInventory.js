function heroic(arr) {
    let heroes=[]
    for (let i = 0; i <arr.length ; i++) {
        let tokens=arr[i].split(" / ")
        if (tokens.length>2) {
            heroes.push({name:tokens[0], level:Number(tokens[1]), items: tokens[2].split(", ")})
        }
        else {
            heroes.push({name:tokens[0], level:Number(tokens[1]), items:[]})
        }

    }
    console.log(JSON.stringify(heroes));
}
heroic(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])

// heroic(['Jake / 1000'])