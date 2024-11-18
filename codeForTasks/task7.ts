const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7];

nums.forEach((num) => {
    setTimeout(() => {
        console.log(num);
    }, num);
});
