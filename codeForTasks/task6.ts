const fibonacci = (num: number): number => {
    if (num <= 0) return 0;
    if (num === 1) return 1;

    let [first, second] = [0, 1];

    for (let i = 2; i < num + 1; i++) {
        const nextNum = first + second;
        [first, second] = [second, nextNum];
    }

    return second;
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
