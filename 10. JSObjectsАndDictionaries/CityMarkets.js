function cityMarkets(sales) {
    let towns = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!towns.has(town)){
            towns.set(town, new Map());
        }
        let income = quantity * price;
        let oldIncome = towns.get(town).get(product);

        if (oldIncome) {
            income += oldIncome;
        }
        towns.get(town).set(product, income);
    }
    for (let [key ,value] of towns) {
        console.log('Town - '+key);
        for (let [item,sum] of towns.get(key)) {
            console.log('$$$'+item+' : '+sum);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])