let computer ={cpu:12};
let lenvo ={screen:"HD"};
let tomHardware ={};
//console.log(computer);
/* console.log(`computer`,computer.__proto__);
console.log(`lenvo`, lenvo.__proto__);
console.log(`tomHardware`, tomHardware.__proto__); */

let computer1 = { cpu: 12 };
let lenvo1 = { 
    screen: "HD",
    __proto__:computer1,
 };
let tomHardware1 = {};
//console.log(`lenvo1`, lenvo1.__proto__);
let genericCar ={tyre:4};
let tesla={
    driver:"AI",
}
Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla`,Object.getPrototypeOf(tesla));
