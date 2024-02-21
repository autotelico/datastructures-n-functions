function isPalindrome(str) {
    let result = str.split('')
    result = result.reverse()
    result = result.join('')
    return result === str
}

let r = isPalindrome('racecar')
console.log(r);