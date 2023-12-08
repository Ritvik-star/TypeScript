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
var User = /** @class */ (function () {
    function User(userName) {
        this._userScore = 1;
        this.userName = userName;
    }
    Object.defineProperty(User.prototype, "getUserDetails", {
        get: function () {
            return this.userName; //also needs mention return type as well
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getUserScore", {
        get: function () {
            return this._userScore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setUserScore", {
        set: function (_userScore) {
            this._userScore = _userScore; //and with settter no need to give any return type or parameter type and
        } // also it never returns anything    
        ,
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Ritvik = new User("Ritvik");
console.log(Ritvik.getUserDetails); //to access user detail
console.log(Ritvik.getUserScore); //we can not directly access private user score,
//so we are using getter with object here
console.log(Ritvik.setUserScore);
console.log(Ritvik.getUserScore);
