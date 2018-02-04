function store(arr) {
    let products=[]
    for (let i = 0; i <arr.length ; i++) {
        let tokens=arr[i].split(" : ")
      products.push({name:tokens[0],price:Number(tokens[1])})
    }
    products.sort((a,b)=>a.name.localeCompare(b.name))
    let l=products[0].name[0]
    console.log(l);
    for (let i = 0; i <products.length ; i++) {
        if(products[i].name[0]==l){
            console.log(products[i].name+": "+products[i].price);
        }
        else{
            l=products[i].name[0]
            console.log(l);
            console.log(products[i].name+": "+products[i].price);
        }
    }
}
store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])