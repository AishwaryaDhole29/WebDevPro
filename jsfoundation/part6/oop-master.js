let car ={
    make:"toyota",
    model:"camry",
    year:2030,
    start:function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
//console.log(car.start());

function Person(name,age){
    this.name =name;
    this.age=age;
}
let john= new Person("Aish Dhole",20);
//console.log(john.name);

//prototype and prototypal change

function Animal(type){
    this.type = type;
}
Animal.prototype.speak =function(){
    return `${this.type} makes a sound`
}
Array.prototype.aish=function(){
    return `custom method ${this}`
}
let myArray= [1,2,3]
//console.log(myArray.aish());
let myNewArray = [1, 2, 3,4,5,6];
//console.log(myNewArray.aish());

class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make}:This is an inheritance example`;
    }
        
    }
let myCar =new Car("toyota","corolla");
/* console.log(myCar.start());
console.log(myCar.drive()); */
let vehOne =new Vehicle("Toyota","corolla");
//console.log(vehOne.make);

//Encapsulation
//# is used for hiding the values to user

class BankAccount {
    #balance =0;
    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;

    }
}
let account = new BankAccount();
//console.log(account.getBalance());

//Abstractions- its hide the complex implemention details 

class CoffeMachine{
    start(){
        //call DB
       //filter value
       return `starting the machine...`; 

    }
    brewCoffee(){
        //complex calculation
        return `Brewing coffee`;


    }
    pressStartButton(){
         let msgOne=this.start();
        let msgTwo=this.brewCoffee();
        return `${msgOne}+${msgTwo}`;

    }
}
let myMachine =new CoffeMachine();
/* console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
 */
//Polymorphism - display in more than one form
class Bird {
    fly(){
        return `flying...`;
    }

}
class Penguin extends Bird{
    fly(){
        return `PENGUIN CAN'T FLY`;
    }
}
let bird = new Bird();
let penguin= new Penguin();
/* console.log(bird.fly());
console.log(penguin.fly()); */

//STATIC METHODS
class Calculator {
     static add(a,b){
        return a+b;
    }
   
}

/* let miniClac = new Calculator();
console.log(miniClac.add(2,3));
 */
//console.log(Calculator.add(2,3));

// getter and setter methods

class Employeee{
    #salary;
    constructor (name,salary){
        if (salary < 0) {
            throw new Error("salary can not be in negative");
        }
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return `you are not allowed to see salary`;
    }
    set salary(value){
        if(value < 0){
            console.log("invalid salary");
            
        }else{
            this._salary=value;
        }

        
    }
}
let emp = new Employeee("Aish",-1000000);
console.log(emp._salary);
emp.salary=60000;


















