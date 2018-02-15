function bit(arr){
    arr=arr.map(s=>Number(s))
    let money=0;
    let bitcoin=0
    let day
    for (let i = 1; i <=arr.length ; i++) {
        if(i%3===0){
            money+=(arr[i-1]*0.7)*67.51
        }
        else{
            money+=arr[i-1]*67.51
        }

        if(money>=11949.16){
            let boughBitcoin=Math.floor(money/11949.16)
        bitcoin+=boughBitcoin
            money-=boughBitcoin*11949.16
            if (day===undefined) day=i
        }
    }

console.log(`Bought bitcoins: ${bitcoin}`);
    if(day===undefined){
    }
    else{
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }

console.log(`Left money: ${money.toFixed(2)} lv.`);
}
// bit(['100', '200', '300'])
// bit(['50', '100'])
bit(['3124.15', '504.212', '2511.124'])