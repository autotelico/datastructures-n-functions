function isAnagram(str1, str2) {
    const arr1 = [];
    const arr2 = [];
    for (const char1 of str1) {
        arr1.push(char1)
    }
    for (const char2 of str2) {
        arr2.push(char2)
    }
    
    arr1.sort()
    result1 = arr1.join('')
    arr2.sort()
    result2 = arr2.join('')
    return result1 === result2
}

let r = isAnagram('angel', 'glean')
console.log(r);