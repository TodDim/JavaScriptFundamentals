function insideVolume(arr) {
    let start=0;
    while (start<arr.length-1) {
      if (arr[start]>=10&&arr[start]<=50&&arr[start+1]>=20&&arr[start+1]<=80&&arr[start+2]>=15&&arr[start+2]<=60){
          console.log('inside');
      }
      else
          console.log('outside');
      start+=3;
    }

}
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43])