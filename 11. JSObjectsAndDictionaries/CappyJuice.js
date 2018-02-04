function cappy(arr) {
    let bottles=new Map()
    let juiceAndQuantity=[]
    for (let i = 0; i <arr.length ; i++) {
      let tokens=arr[i].split(" => ")
      if(!juiceAndQuantity.some(j=>j.name===tokens[0])) {
          juiceAndQuantity.push({name: tokens[0],quantity:Number(tokens[1])})
      }
      else {
          juiceAndQuantity.find(el=>el.name===tokens[0]).quantity+=Number(tokens[1])
      }

      if(juiceAndQuantity.find(j=>j.name===tokens[0]).quantity>=1000){

          if(!bottles.has(tokens[0])){
              bottles.set(tokens[0],0)
          }
          bottles.set(tokens[0],bottles.get(tokens[0])+Math.floor((juiceAndQuantity.find(j=>j.name===tokens[0]).quantity)/1000))
          let times=Math.floor(juiceAndQuantity.find(j=>j.name===tokens[0]).quantity/1000)
          juiceAndQuantity.find(j=>j.name===tokens[0]).quantity-=times*1000
      }
    }
    for (let [key, value] of bottles) {
        console.log(key+" => "+value)
    }
}
// cappy(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'])

cappy(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])