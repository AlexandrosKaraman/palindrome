function isPalindrome(x) {
    const str = x.toString()
    const digits = str.split("")
    const reversed = digits.reverse()
    const reversedStr = reversed.join("")
    if (str == reversedStr) {
        return true
    } else {
        return false
    }
}

