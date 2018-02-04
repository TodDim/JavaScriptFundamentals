function squareOfStars(n) {
    function printStar(count) {
        console.log('* '.repeat(count));
    }
    for (let i = 0; i <n ; i++) printStar(n)
}

squareOfStars(2)