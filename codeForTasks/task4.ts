const isNumberASquareOfSomething = (numToCheck: number): boolean => {
    if (numToCheck < 0) return false;

    for (let currentNum = 0; currentNum < numToCheck; currentNum++) {
        if (currentNum * currentNum > numToCheck) break;

        if (currentNum * currentNum === numToCheck) {
            return true;
        }
    }

    return false;
};

console.log(isNumberASquareOfSomething(4));
console.log(isNumberASquareOfSomething(16));
console.log(isNumberASquareOfSomething(24));
console.log(isNumberASquareOfSomething(144));
console.log(isNumberASquareOfSomething(1));
