// console.log("S02");

// let a : string | number = 0.3

// a= "Hello"
// a=false //compiler error

// //**Type Narrowing**/

// function checkNumber (n:(string | number)):void{
//     n.
//  if (typeof n==="number"){
//     n.
//  }else{
//     n.
//  }
// }

//**Type Aliases**/

// type Esma = string | number
// let c:Esma = "Selam"
// c=2
// c=true //compiler

//**String Literals**//

// type Car = "BMW" | "Audi" | "Mercedes" | 2024
// let car1: Car = "BMW"
// let car2: Car = "Audi"
// let car3: Car = "Fiat"
// let car4: Car = 2024

//OBJECT
// const car: {
//     type: string,
//     model: string,
//     readonly year: number
// } = {
//     type: "Honda",
//     model:  "CRV",
//     year: 2024
// }
//  car.year=2023 //compiler error

//**intersection**//
// type Book = {
//     book_id: number,
//     book_name: string
// }

// type Author = {
//     author_id: number,
//     author_name: string
// }

// type Sales = Book & Author
// let sale1: Sales ={
//     author_id: 123,
//     book_id: 456,
//     author_name: "Tolkien",
//     book_name: "Retırn of the King"
// }
