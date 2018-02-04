function isPalindrome(w) {
    return w===w.split("").reverse().join("")
}

console.log(isPalindrome('haha'));