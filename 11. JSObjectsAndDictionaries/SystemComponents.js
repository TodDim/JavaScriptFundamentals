function system(arr) {
    let systems = new Map()
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ")
        if (!systems.has(tokens[0])) {
            systems.set(tokens[0],new Map())
            systems.get(tokens[0]).set(tokens[1],[])
        }
        if (!systems.get(tokens[0]).has(tokens[1])){
            systems.get(tokens[0]).set(tokens[1],[])
        }
        systems.get(tokens[0]).get(tokens[1]).push(tokens[2])
    }
    let keys=Array.from(systems.keys()).sort((a,b)=>{
        let res=systems.get(b).size-systems.get(a).size
        if (res==0){
            res=a.toLowerCase().localeCompare(b.toLowerCase())
        }
        return res
    })

    for (let key of keys) {
        console.log(key);
        // console.log(systems.get(key));
        let aar=Array.from(systems.get(key).keys()).sort((a,b)=>systems.get(key).get(b).length-systems.get(key).get(a).length)
        for (let comp of aar) {
            console.log("|||"+comp);
            for (let sub of systems.get(key).get(comp)) {
                console.log("||||||"+sub);
            }
        }
    }
}
system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreB | B26',
    'Lambda | CoreB | B27',
    'Lambda | CoreB | B28',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])