function cookingNumbers(arr) {
    let res=Number(arr[0])
    for (let i = 1; i <arr.length ; i++) {

      switch (arr[i]){
          case 'chop': res/=2; break;
          case 'dice': res=Math.sqrt(res); break;
          case 'spice': res+=1; break;
          case 'bake': res*=3; break;
          case 'fillet': res-=0.2*res; break;
          default: break;
      }
      console.log(res);
    }
}
cookingNumbers([32,chop,chop,chop,chop,chop])