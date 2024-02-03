async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}

(async function main (){
    // let a = await sleep()
    // console.log("I am in IIFE")
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    //let x, y = [1, 5] //undefined [1,5]
    // let [x, y] = [1, 5] // 4, 5
    // console.log(x, y);

    // let [a, b, ...rest] = [1,2,3,4,5,6,7]
    // console.log(a, b, rest);  // 1 2 [3,4,5,6,7]

    // let obj = {
    //     a: 1, 
    //     b: 2, 
    //     c: 3
    // }
    // let {a, b} = obj
    // console.log(a, b);

    // ... ==> spread operator

    function sum(a,b,c){
        return a+b+c
    }
    let arr = [1,4,6]
    // console.log(sum(arr[0],arr[1],arr[2]));
    console.log(...arr);
    let ans = sum(...arr)
    console.log(ans);


})()
