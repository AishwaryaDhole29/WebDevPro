function Person(name){
    this.name=name;
}
Person.prototype.greet = function(){
    console.log(`Helllo,my name is ${this.name}`);
};
let aishwarya = new Person("aishwarya");
aishwarya.greet();