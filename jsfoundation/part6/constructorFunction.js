function Car(make,model) {
    this.make =make;
    this.model=model;
    
}
/* let myCar = new Car("toyata","camry");
console.log(myCar); */
let myNewCar = new Car("tata", "safari");
//console.log(myNewCar);

function tea(type){
    this.type=type;
    this.describe = function(){
        return `this is a cup of ${this.type};`
    };
}
let lemontea = new tea("lemon tea");
//console.log(lemontea.describe());

//ERRORS

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
        
    }
    this.name = name;
}
let tea3 = new Drink("tea3");
let coffee = Drink("coffee");



