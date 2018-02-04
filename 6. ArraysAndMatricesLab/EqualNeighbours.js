function equalNumbers(arr) {
    let counter=0;
    for (let row = 0; row <arr.length-1 ; row++) {
        for (let col = 0; col <arr[row].length ; col++) {
            if (arr[row][col]===arr[row+1][col]){
                counter++;
            }
        }
    }
    for (let row = 0; row <arr.length ; row++) {
        for (let col = 0; col <arr[row].length-1 ; col++) {
            if (arr[row][col]===arr[row][col+1]){
                counter++;
            }
        }
    }
    console.log(counter);
}