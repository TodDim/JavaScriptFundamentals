function pyramid(base, increment) {
    let stone=0;
    let marble=0;
    let lapis=0;
    let gold=0;
    let height=0;
    let layer=1;
    for (let i = base; i >0 ; i-=2) {
        if(i===2||i===1){
            gold+=i*i*increment

            break
        }
      stone+=((i-2)*(i-2))*increment
        if(layer%5===0){
          lapis+=(4*i-4)*increment
            layer++;
            continue
        }
        marble+=(4*i-4)*increment
        layer++;
    }
console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
// console.log(`Final pyramid height: ${Math.floor(base/2)*increment}`);
console.log(`Final pyramid height: ${Math.floor(layer*increment)}`);
}

// pyramid(11,1)
// pyramid(11,0.75)
pyramid(23,0.5)