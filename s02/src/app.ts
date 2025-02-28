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


//**TYPE ASSERTIONS**/
// let str: unknown = "I'm a string"
// console.log(str.length) //compile error
// console.log((<string>str).length)
// console.log((str as string).length)

// let score: unknown = 350
// console.log(score as number*2);

//**FUNCTIONS**//
// function selamla (mesaj:string, isim:string="User") :string{
// //   if(!isim) isim = " User"
//     return mesaj + " " + isim
// }

// selamla("merhaba", "dünya")
// selamla("merhaba")
// selamla("merhaba", 2024)
// console.log(selamla("merhaba"));
// selamla("merhaba", "dünya", 2024)

//**FUNCTION OVERLOADING**//
// function add (a:string, b:string):string
// function add (a:string, b:number):string
// function add (a:any, b:any):any{
//     return a + b
// }


//**REST PARAMETERS**//
// function add(num:number, ...numbers:number[]):void{
//     let total=num;

//     numbers.forEach(number=>total+=number)
//     console.log(total);
// }

// add(1)
// add(1,2)
// add(1,5,10)
// add(1,30,50,100)

//**INTERFACE**//
// interface Color {
//     color: { r: number, g:number, b:number}
// }

// const red:Color = { color:{r:255, g:0, b:0}}

// interface Shape {
//     area: number
// }

// class Square implements Color, Shape {
//     constructor(public color:{r:number, g:number, b:number}, public area:number){

//     }
// }

// const sq1 = new Square({r:255, g:0, b:0}, 255)
// console.log(sq1);


