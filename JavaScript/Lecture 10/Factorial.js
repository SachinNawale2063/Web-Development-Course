const fact = (number) => {
    let ans = 1;
    for(let i=1; i<=number; i++){
        ans = ans * i;
    }
    return ans;
}

let factorial_of_5 = fact(5);
console.log(factorial_of_5);