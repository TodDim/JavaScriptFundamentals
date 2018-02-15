function game(arr, mat) {
    let kingdoms = new Map()
    let gens = []

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i]
        if (!kingdoms.has(obj.kingdom)) {
            kingdoms.set(obj.kingdom, new Map())
        }
        if (!kingdoms.get(obj.kingdom).has(obj.general)) {
            kingdoms.get(obj.kingdom).set(obj.general, obj.army)
            gens.push({name: obj.general, wins: 0, defeats: 0})
            // gens[obj.general]['wins']=0
            // gens[obj.general]['defeats']=0
        }
        else {
            kingdoms.get(obj.kingdom).set(obj.general, kingdoms.get(obj.kingdom).get(obj.general) + obj.army)
        }
    }
   outer: for (let i = 0; i < mat.length; i++) {
        let tokens = mat[i]
        let attackKingdom = tokens[0]
        let attackgeneral = tokens[1]
        let defendingKingdom = tokens[2]
        let defendingGeneral = tokens[3]
        for (let k of kingdoms) {
            if(k[1].has(attackgeneral)&&k[1].has(defendingGeneral)){
                continue outer

            }
        }
        let res = kingdoms.get(attackKingdom).get(attackgeneral) - kingdoms.get(defendingKingdom).get(defendingGeneral)
        if (res > 0) {
            kingdoms.get(attackKingdom).set(attackgeneral, (kingdoms.get(attackKingdom).get(attackgeneral)*1.1).toFixed(0))
            kingdoms.get(defendingKingdom).set(defendingGeneral, (kingdoms.get(defendingKingdom).get(defendingGeneral)*0.9).toFixed(0))
            gens.filter(g => g.name === attackgeneral).wins++
            gens.filter(g => g.name === defendingGeneral).defeats++
        }
        else if (res < 0) {
            kingdoms.get(attackKingdom).set(attackgeneral, (kingdoms.get(attackKingdom).get(attackgeneral)*0.9).toFixed(0))
            kingdoms.get(defendingKingdom).set(defendingGeneral, (kingdoms.get(defendingKingdom).get(defendingGeneral)*1.1).toFixed(0))
            gens.filter(g => g.name === attackgeneral)[0].defeats++
            gens.filter(g => g.name === defendingGeneral)[0].wins++

        }

    }
    gens.sort((g1, g2) => {
        let res = g2.wins - g1.wins
        if (res == 0) {
            res = g1.defeats - g2.defeats
        }
        if (res == 0) {
            res = g1.name.localeCompare(g2.name)
        }
        return res
    })
    let r = [...kingdoms]
    let winKingdom = [...kingdoms].filter(k => k[1].has(gens[0].name))

    let wgens = winKingdom[0][1]
    let www=winKingdom[0].toString()
    console.log(`Winner: `+www.substr(0,www.length-13));
    let podreden = Array.from(wgens.keys()).sort((a, b) => wgens.get(b) - wgens.get(a))
    for (let g of podreden) {
        console.log("/\\general: " + g);
        console.log("---army: "+winKingdom[0][1].get(g));
        console.log("---wins: " + gens.filter(g => g.name = g)[0].wins);
        console.log("---losses: " + gens.filter(g => g.name = g)[0].defeats);

    }


}

game([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]])