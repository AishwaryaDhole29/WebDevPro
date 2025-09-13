const person={
    name :"Aishwarya",

greet(){
    console.log(`hii, i am ${this.name}`);
},
};
person.greet();

const greetFunction =person.greet;
greetFunction();

const boundGreet = person.greet.bind({name:"AISH"});
boundGreet();

//bind ,call and apply