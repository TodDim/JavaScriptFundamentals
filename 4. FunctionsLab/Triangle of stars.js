function triangleOfStars(n) {
    function printStars(count) {
        console.log('*'.repeat(count));
    }
    for (let j = 1; j <=n ; j++)  printStars(j)
    for (let j = n-1; j >=0 ; j--)  printStars(j)
}
triangleOfStars(4)