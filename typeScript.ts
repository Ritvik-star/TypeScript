// const user = {name: "hitesh", age:"10"}

// console.log("Hitesh");
// console.log(user.name);

// //after run this it will create a Js file 
// //with same code which will go for browser.
// //To run use --> tsc 'fileName.ts' 

// //data types & variables

// //right way to declare variables in typescript

//     let         greetings:   string = "Hello Ritvik";
// //declaration   variableName dataType  value

// let city:string = "Bhopal"; //best practice
// let city1 = "Hyderabad";    //it will also work

// city.concat() //even with this you can use builtin methods of string
// city1.concat() //even with this you can use builtin methods of string

// console.log(greetings); 
// //after this it will provide string built-in methods for our declared variable as well
// //e.g.
// console.log(greetings.toLocaleLowerCase());

// //number

// let userId: number = 33452; //integer value
// let percentage: number = 89.7;  //float value

// //userId and percentage both will be of number typed

// //boolean

// let isCheck: boolean = false;


// //any
// //it's a special type, that you can use whenever you don't want a
// //perticular value to cause typechecking errors.

// //not recommended to use or you usually wanna avoid it because it is not type-checked
// //you can use 'noImplicityAny' to flag any implicit any as an error.

// //'any' is not type-checked. e.g.

// let hero;   //here we didn't define any type so by default it will be 'any'

// function getHero(){
//     return "IronMan";   //now here, it can return anything like string,boolean or number etc.
// }   //since there is no return type and hero variable has no type till now so it can take 
// //any type value, which would be inappropriate in the world of typeScript.

// hero = getHero();   //if you will hover on hero then it will show type as any.




// //functions

// function addTwo(n: number){ //here need to give type for argument otherwise it might take random value while invoking function
//     return n + 2;
// }

// addTwo(2);  //here need to pass same according to the type other will get compile error

// //If you want to fix the return type of function (the type of the value which will be return by function)
// //then
//                             //this is the return type for this function
// function subTwo(n: number): number {
//     return n - 1;
// }
// subTwo(3);

// function getUpper(str: string){
//     return str.toLocaleUpperCase(); //using built-in method to make string in upperCase
// }

// getUpper("ritvik");


// function signUpUser(name: string, age: number, check: boolean): number | boolean | string{
//     return "signed up";
// }

// signUpUser("Ritvik", 24, true);//here need to give same amount of arguments as much parameters mentioned
// //along with same type data otherwise will get compile error.

// let studentAttendance = (name: string, present: Boolean)=>{ //same way for arrow functions as well.
//     return "Present";
// }

// studentAttendance("ritvik", true); 

// //and this is how we take input in functions in ts

// //how to return more than one type 

// function addTwoNum(num: number): number | boolean{
//     if(num){
//         return true;
//     }
//     return num;
// }

// const returnString = (str: string): string =>{
//     return "";      //even if we return empty string then also it will work.
// }

// const gethHello = (s: string ) : string => {
//     return "Hello Everyone";
// }

// // const heros = ["thor", "spiderMan", "ironMan"];
// const heros = [123, 111, 222];

// heros.map((hero) => {
//     return your hero is ${hero};
// })

// // heros.map((hero: string) => {    //if we want to mention return type as well
// //     return hero is ${hero};
// // })


// //those functions which do not return anything
// //so we can void as return type
// //e.g. logging to the console
// function consoleMsg(msg: string): void {
//     console.log(msg);
// }


// //those function who will never return any value
// //e.g. execption handler's

// function fail(msg: string): never {
//     throw new Error(msg);
// }

// let temp: number | string;  //if any variable might have more than one different type of value

// //OBJECT'S

// const User = {
//     name: "Ritvik",
//     isActive: true,
// }

// //returning object from function
//                         //type of function is object
// // function showUser():{name: string, isActive: boolean}{
// //     return {
// //         name: "Ritvik",
// //         isActive: true,
// //     }
// // }
// // showUser();

// //pass object as an argument

// // const newUser = {
// //     name: "Rahul",
// //     valid: true,
// // }

// // function show({name:string, valid:boolean}){}{
// //     console.log({})
// // }

// // show(newUser);

// //TYPE ALIASES

// // type User = {
// //     name: string,
// //     authorized: boolean,
// // }

// //by using this way we can define many types for object and can directly use this type as parameter type or return type  for methods
// //or anywhere else there object is needed.
// //benefits -> no need to define so many types in methods declaration

// // function show(user: User): User{
// //     return user;
// // }

// // show({name:"ritvik", authorized:true});

// //readOnly

// type Student = {
//     readonly id: number,    //here, we are using readonly because we dont want to give access to change the value of id
//     subject: string,
//     pass: boolean,
// }

// const myStudent: Student = {
//     id: 123,
//     subject: "Maths",
//     pass: true,
// }

// //myStudent.id = 345; //here it will show the error like id is readonly so we cant change it.

// //combine the types

// type carNumber = {
//     carnum: number,
//     price: number,
// }

// type carName = {
//     name: string,
//     color: string,
// }

// type carDetails = carNumber & carName & {   //combining the types using '&'
//     carAvg: number, 
// }

// const car: carDetails = {   //this is the complete object using combined type 'carDetails'
//     carnum: 12335,
//     price: 1000000,
//     name: "Buggatti",
//     color: "black",
//     carAvg: 3,
// }


//ARRAYS

// const arr1: string[] = [];  //we can use any datatype here, like number, string or boolean etc.
// arr1.push("Ritvik");        //this is one way to define array

// const arr2: Array<number> = [];     //another way to define array, most recommanded
// arr2.push(23, 34, 99);
// console.log(arr1+" "+arr2);

// //if want to store multiple datatype values in array
// //then create a different type and then use it

// type User = {
//     name: string,
//     age: number,
//     valid:boolean
// }

// const arr3: Array<User> = [];

// arr3.push({
//     name: "Ritvik",
//     age: 24,
//     valid: true
// });

// console.log(arr3);

//in case of multiple/double array 

// const TwoDArray: number[][] = [
//     [12, 34, 124]
// ]


//Union type
//basically, when we give or create multiple types for some specific purpose 
//then we call it union types, by using pipe symbol '|'

// let score: number | string = 33;

// score = 44;

// score = "five";

// type buyer = {
//     name: string;
//     value: number;
// }

// type seller = {
//     product: string;
//     rate: number;
// }

// let person: buyer | seller = {name: "Ritvik", product: "milk", rate: 50};

// const getDetails = (id: string | number) =>{    //this is how we can use union type for parameter in function
//     if(typeof id === "string"){
//         console.log(`your id is ${id}`);
//     }else{
//         console.log(id + 2)
//     }
// }

//union type with array

// const data1: number[] = [1, 2, 3];

// const data2: string[] = ["1", "2", "3"];

// const data3: (string | number | boolean)[] = ["one", 1, true];  //this is how we can create an array with multiple type
//                                                                 //using union types


//Tuples

//we use tuples to specify the precise order or amount of types of elements of array
//e.g.

// let tUser: [string, number, boolean];

// tUser = ["ritvik", 25, true];   //as we defined above, we can only assign elements as we defined using tuples

// const rgx: [number, number, number] = [2323, 323423, 234.34]; //here we can have same types elments but amount should be same as defined


// //good point about tuples

// type newUser = [string, number];    //here we have defined only two types so 

// let arr: newUser = ["ritvik", 123]  //as mentioned, it will accept only two elements

// //but if we use array methods like POP(), Push() etc. then it will more elements

// arr.push(1234.4);   //here it will not give any errors


//ENUMS

//Whenever we have to use any constant or any variable value directly then we can use/defined ENUMS
//just to make our code better or strict so that no stranger user can directly see those values

//for example

//1).

// const enum Users  {
//     name = "Ritvik",
//     id = 1
// }

// console.log(Users.name, Users.id);  //that's how we can use enums instead of direactly using values 

// //2).

// const enum digits {
//     one = 1,
//     two,
//     three,
//     four
// }    //in this case automataclly, numbers will get assigns to enums in increasing order

export {} //just to avoid errors