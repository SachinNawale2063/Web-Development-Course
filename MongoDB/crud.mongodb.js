use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "my course",
//     price: 0,
//     assignment: 10
// })

// db.courses.insertMany([
//     {
//         "name": "Mathematics",
//         "price": 29.99,
//         "assignment": 10
//     },
//     {
//         "name": "History",
//         "price": 19.99,
//         "assignment": 10
//     },
//     {
//         "name": "Physics",
//         "price": 34.99,
//         "assignment": 10
//     },
//     {
//         "name": "Literature",
//         "price": 24.99,
//         "assignment": 10
//     },
//     {
//         "name": "Biology",
//         "price": 39.99,
//         "assignment": 10
//     },
//     {
//         "name": "Chemistry",
//         "price": 44.99,
//         "assignment": 10
//     },
//     {
//         "name": "Computer Science",
//         "price": 49.99,
//         "assignment": 10
//     },
//     {
//         "name": "Art",
//         "price": 14.99,
//         "assignment": 10
//     },
//     {
//         "name": "Geography",
//         "price": 22.99,
//         "assignment": 10
//     },
//     {
//         "name": "Economics",
//         "price": 29.99,
//         "assignment": 10
//     }
// ]
// )

let a = db.courses.find({price: 0})

// console.log(a.count());
// console.log(a.toArray());

// db.courses.updateOne({price: 0}, {$set:{price:100}})
// db.courses.updateMany({price: 0}, {$set:{price:1000}})

db.courses.deleteMany({price:100})