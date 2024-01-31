console.log('This is promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("no random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log('Yes I am done');
            resolve("my setTimeout function succesfully run");
        }, 3000);
    }
})

prom1.then((a)=>{
    console.log(a);  
    //resolve hoga to .then run hoga 

    // agr promise resolve hoga to idhar sachin print hoga

    //mostly apn ye use krte hai jab apn koi network request marte hai tab

    //we can attach multiple .then to a single promise this we can use to run different functions and stuff
});

prom1.catch((err)=>{
    console.log(err);
    //reject hoga to .catch run hoga 
    //error catch krte hai basically
})

// prom1.finally(()=>{
//     console.log('Successfully run promise');
// })



let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("no random number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log('Yes I am done 2');
            resolve("my setTimeout function succesfully run 2");
        }, 1000);
    }
})

let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
// let p3 = Promise.all([prom1, prom2]);
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1},${val2},${val3})`
// }
// setInterval(()=>{
//     document.body.style.backgroundColor = getRandomColor();
// }, 1000)