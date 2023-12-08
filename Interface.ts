//interface is sounds like type but it is not, it can contain multiple types and methods as well
//it does not care about how method works and but as we defined the method in interface like
//how much parameteres and return type these details should be full fil for methods.

//e.g.

// interface User {
//     readonly id: number,
//     userName?: string,      //this is optional (? = optional op.)
//     getUser: (name: string) => string,
//     getDetails: (name: string, id: number) => boolean,
// }

// const Person: User = {
//     id: 123,
//     userName: "Ritvik",
//     getUser(name) {
//         return name
//     },
//     getDetails(name: string, id: number){
//         return true;
//     }
// }

//e.g. 
//your Operating system works like an interface like it does not care about how things are working in
//backend but it respond you as per your request.

//interface with types

//we can not define another type with same name using type
//but same thing we can do in interface
//and this we call it re-opening the interface

interface User {
    price: number
    color: string
}

//we can also perfome inheritance using interface

interface Car extends User {
    carNumber: number,
    model: "ev" | "petrol" | "disel",   //likewise we can add literal value
    avg: number
}


const carOwner: Car = {
    price: 10000000,
    color: "mat black",
    carNumber: 123456,
    model: "ev",
    avg: 5
}

//likewise we can extend and use interface as type with methods or object


//Interface with classes (using implements keyword)

interface person1{
    name: string,
    id: number
}

class Boy implements person1{   //by using 'implements' keyword we can implement interface with class
    constructor(
        public name:string,
        public id:number
    ){
    }
}

interface work{ 
    showWord(): void
}

class Girl implements person1, work{    //likewise we can implement multiple interfaces with class
    constructor(
        public name:string,
        public id:number,
        public age:number
    ){
    }

    showWord(): void{
        console.log("showing work.")
    }

}