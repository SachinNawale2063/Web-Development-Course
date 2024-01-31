// fetching data in API using async await

// https://jsonplaceholder.typicode.com/guide/

async function getData() {
    // simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    // let data1 = await x.text()
    // console.log(data)
    return data
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

// settle means resolve or reject 

// resolve means promis has settled successfully 

// reject means promise has not settled