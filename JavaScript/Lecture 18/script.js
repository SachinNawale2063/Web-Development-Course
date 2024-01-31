async function getData() {
    // simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45555)
        }, 3500);
    })
}

async function main() {
    console.log('Loading Modules');

    console.log('Do something else');

    console.log('Load data');

    //2nd method
    let data = await getData()

    console.log(data);
    console.log('process data');
    console.log('task2');
}

main()

// 1st method
// data.then((v) => {
//     console.log(v);
//     console.log(data);
//     console.log('process data');
//     console.log('task2');
// })

// await ko async function ke andar hi use krte hai


