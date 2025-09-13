function makeTea(typeOfTea){
    return `making ${typeOfTea}`;
    
    
}
let taaOrder= makeTea("lemon tea");
//console.log(taaOrder);

// call function
function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for chai`;
        
    }
    return confirmOrder();
    
}
let orderConfirmation = orderTea("chai");
//console.log(orderConfirmation);

//arrow function
const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(499, 100);
//console.log(totalCost); // Output: 49900

// argument
function makeTea(typeOfTea) {
    return `maketea:${typeOfTea}`
    
}
function processTeaOrder(teaFunction) {
    return teaFunction("earl grey")
    
}
let order =processTeaOrder(makeTea);
//console.log(order);



function createTeaMaker(name) {
    let score =190
    return function(teaType) {
        return `making ${teaType} ${name} ${score}`;
    };  
}
let TeaMaker=createTeaMaker("hitesh");
let result =TeaMaker("green tea");
//console.log(result);


function addTwoNumber(p1,p2) {
    return p1+p2;
    
}
let result1 =addTwoNumber(5,4);
console.log(result1);







