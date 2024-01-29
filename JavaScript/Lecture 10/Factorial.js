const fact = (number) => {
    let ans = 1;
    for (let i = 1; i <= number; i++) {
        ans = ans * i;
    }
    return ans;
}

const factorial = (number) => {
    let arrays = Array.from(Array(number + 1).keys())

    // console.log(arrays);
    arrays = arrays.slice(1,)
    // console.log(arrays);
    let ans = arrays.reduce((a, b) => {
        return a * b
    })
    return ans;
}

let factorial_of_5 = fact(5);
console.log(factorial_of_5);
console.log(factorial(5));