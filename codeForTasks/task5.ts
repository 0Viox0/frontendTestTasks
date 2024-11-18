const palindrome = (word: string): boolean => {
    let leftPointer = 0;
    let rightPointer = word.length - 1;

    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

    while (leftPointer <= rightPointer) {
        if (
            cleanedWord[leftPointer++].toLowerCase() !==
            cleanedWord[rightPointer--].toLowerCase()
        )
            return false;
    }

    return true;
};

const palindromeBetter = (word: string): boolean => {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleanedWord === cleanedWord.split("").reverse().join("");
};

console.log(palindromeBetter("racecar"));
console.log(palindromeBetter("Table"));
console.log(palindromeBetter("Anna"));
console.log(palindromeBetter("John"));
console.log(palindromeBetter("rotator"));
console.log(palindromeBetter("i"));
