function validityChecker(arr){
    let firstDistFromWCS=Math.sqrt(arr[0]*arr[0]+arr[1]*arr[1]);
    let secondDistFromWCS=Math.sqrt(arr[2]*arr[2]+arr[3]*arr[3]);
    let distBetw=Math.sqrt(Math.pow(arr[0]-arr[2],2)+Math.pow(arr[1]-arr[3],2));
    // console.log(firstDistFromWCS);
    //console.log(firstDistFromWCS.toFixed(0));
    if(firstDistFromWCS.toFixed(0)==firstDistFromWCS){
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`);
    }
    if(secondDistFromWCS.toFixed(0)==secondDistFromWCS){
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`);
    }
    if(distBetw.toFixed(0)==distBetw){
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
    }
    else{
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
    }
}