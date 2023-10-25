<<<<<<< HEAD
const reverseString = function(string) {
    
=======
const reverseString = function(words) {
    let splitWords = words.split("");
    let reversedWords = splitWords.reverse();
    let reversedWordsString = reversedWords.join("");
    return reversedWordsString;
>>>>>>> ea97ed1607c34a653b950a1ee5e3953f8a068d9a
};

// Do not edit below this line
module.exports = reverseString;
