// class Human {
//     name: string
//     id: number
//     readonly salary: 100000 //cant modified it outside of the class
//     constructor(name: string, id: number){  //this is constructor to update the fields/property
//         this.name = name,
//         this.id = id
//     }
// }

// const Ritvik = new Human("Ritvik", 123);
// let s = Ritvik.salary;


//class with access modifires (public and private)
// class City{
//     public state: string    //by default everything will be public
//     private pincode: number 

//     constructor(state: string, pincode: number){
//         this.state = state,
//         this.pincode = pincode
//     }
// }

// const Place = new City("MP", 480449);
// console.log(Place.state);   //it is accessible because it is public
//console.log(Place.pincode); //since it is private, will not allow to access it.

//another way or Professional's way to write same thing

// class City{
//     constructor(
//         public state: string,
//         private pincode: number
//     ){
//     }
// }

// const Place = new City("MP", 123434);


//getter and setter method with class

// class User{
//     private _userScore = 1

//     public userName: string
//     private deleteToken(){  //this is a private method which we can't access directly but can do with some additional logic
//         console.log("Token deleted");   
//     }

//     constructor(userName: string){
//         this.userName = userName
//     }

//     get getUserDetails(): string{   //this is getter methods which we have created by using 'get' keyword   
//         return this.userName;       //also needs mention return type as well
//     }

//     get getUserScore(): number{
//         return this._userScore  //we can also access private variable using getter method
//     }

//     set setUserScore(_userScore){       //this is a setter method which we have created by using 'set' keyword
//         this._userScore = _userScore    //and with settter no need to give any return type or parameter type and
//     }                                   // also it never returns anything    
// }

// const Ritvik = new User("Ritvik");
// console.log(Ritvik.getUserDetails); //to access user detail
// console.log(Ritvik.getUserScore);    //we can not directly access private user score,
// //so we are using getter with object here

// console.log(Ritvik.setUserScore(2));
// console.log(Ritvik.getUserScore);   //accessing private variable using getter outside the class

                  
//parent-child inheritance (using extends keyword) along with protected access specifier

class User{
    //private _userScore = 1; //if this will be private then can't access outside this class
    protected _userScore = 1;  //but if this will protected then it will accessible with in this class and for inherited class as well
    public name:string
    constructor(name:string){
        this.name = name;
    }
}

const user = new User("Ritvik");
user.name;

class SubUser extends User{ //using 'extends keyword, we can inherite the child class from parent class
    isFamily: boolean = true;

    changeUserScore(){
        this._userScore = 4 //this is protected that's why we are able to access it here
    }
}



