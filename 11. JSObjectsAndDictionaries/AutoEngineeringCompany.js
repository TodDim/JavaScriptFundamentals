function auto(arr) {
    let cars = new Map()
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ")
        if (!cars.has(tokens[0])) {
            cars.set(tokens[0], new Map())
        }
        let producedars = Number(tokens[2])
        let oldProducedars=Number(cars.get(tokens[0]).get(tokens[1]))
        if (oldProducedars){
            producedars+=oldProducedars
        }
        cars.get(tokens[0]).set(tokens[1],Number(producedars))
    }
    for (let [key,value] of cars) {
        console.log(key);
        for (let [keyy,valuey] of cars.get(key)) {
            console.log("###"+keyy+" -> "+valuey);
        }
    }
}
auto(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])


