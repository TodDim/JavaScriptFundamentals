function uniq(arr) {
    let sets = []
    let first=new Set()
        JSON.parse(arr[0]).forEach(el => first.add(el))
    sets.push(first)
    for (let i = 1; i < arr.length; i++) {
        let set = new Set()
        JSON.parse(arr[i]).forEach(el => set.add(el))

        for (let i = 0; i < sets.length; i++) {
            if (Array.from(sets[i]).sort().toString() === Array.from(set).sort().toString()) {
                break
            }
            sets.push(set)
        }
    }
    sets.sort((a,b)=>a.size-b.size).forEach(s=>console.log((JSON.stringify(Array.from(s).sort((a,b)=>b-a))).split(",").join(", ")))
}

// uniq(['[-3, -2, -1, 0, 1, 2, 3, 4]',
//     '[10, 1, -17, 0, 2, 13]',
//     '[4, -3, 3, -2, 2, -1, 1, 0]'])

uniq(['[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'])