const reverseString = function(words) {
    let splitWords = words.split("");
    let reversedWords = splitWords.reverse();
    let reversedWordsString = reversedWords.join();
    return reversedWords;
};

// Do not edit below this line
module.exports = reverseString;
