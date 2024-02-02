let a = prompt("Enter a first number")  //Gives a string
let b = prompt("Enter a second number") //Gives a string

let sum = parseInt(a) + parseInt(b)   //converting into an integar

// if (isNaN(a) || isNaN(b) || isNaN(sum)) {
//     throw SyntaxError("Sorry this is not allowed")
// }

// try {
//     alert("the sum is "+ sum*x) //error ayega
// } catch (error) {
//     console.log(error.name);
//     // console.log(error.type);
//     console.log('Error aa gaya bhai!!!');
// }
// finally{
//     console.log('Files are being closed and db connection being closed');
// }

const main = () => {
    try {
        alert("the sum is "+ sum*x) //error ayega
        return true;
    } catch (error) {
        console.log(error.name);
        // console.log(error.type);
        console.log('Error aa gaya bhai!!!');
        return false
    }
    finally{
        console.log('Files are being closed and db connection being closed');
    }
    // console.log('Files are being closed and db connection being closed');
}

let c = main()
console.log(c);