let teas = ["green tea", "black tea", "chai", "oolang tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
    if (teas[i] ==="chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
//console.log(selectedTeas);

let cities=["london","new york","paris","berlin"];
let visitedCities=[];
for (let c = 0; c < cities.length; c++) {
    if (cities[c]=="paris") {
       continue;

        
    }
    visitedCities.push(cities[c]);
    
}
//console.log(visitedCities);

let number=[1,2,3,4,5];
let smallNumbers = [];
for (const num of number) {
    if (num==4) {
        break;

        
    }
    smallNumbers.push(num);
    
}
//console.log(smallNumbers);

 
let tea=["chai","green tea","herbal tea","black tea"];
let preferredTeas=[];
for (const thing of tea) {
    if (thing=="herbal tea") {
       continue;
        
    }
    preferredTeas.push(thing);
    
}
//console.log(preferredTeas);

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};
let cityNewPopulations={};
for (const city in citiesPopulation) {
    if (city == "Berlin") {
        break;
        
    }

    cityNewPopulations[city]=citiesPopulation[city];
    
        
    }
    //console.log(cityNewPopulations);
let worldCities = {
    "sydney": 5000000,
    "tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
};
let largeCities={};

    for (const citys in worldCities) {
      if (worldCities[citys] < 3000000) {
        continue;
      }

      largeCities[citys] = worldCities[citys];
    }
    //console.log(largeCities);

    let tea1=["earl grey","green tea","chai","oolong tea"];
    let availableTeas=[];
tea1.forEach(function(tea){
    if (tea === 'chai') {
        return;
        
    }
    availableTeas.push(tea);
});
//console.log(availableTeas);



let myworldCities = ["berlin", "tokyo", "sydney", "paris"];
    let travelCities=[];
myworldCities.forEach( function(city) {
    if (city === "sydney") {
      return;
    }
    travelCities.push(city);
});
//console.log(travelCities);

 let number1=[2,5,7,9];
 let doubledNumbers=[];
 number1.forEach(num => {
    if (num== 7) {
        return;

        
        
    }
    doubledNumbers.push(num*2);
    
 });
 //console.log(doubledNumbers);

 let Mynumbers = [2, 5, 7, 9];
 let doubleNumbers = [];

 for (let i = 0; i < Mynumbers.length; i++) {
   if (Mynumbers[i] === 7) {
     continue;
   }
   doubleNumbers.push(Mynumbers[i] * 2);
 }

 //console.log(doubleNumbers);


 let Teas=["chai","green tea","black tea","jasmine tea","herbal tea"];
 let shortTeas=[];
 for (const tea2 of Teas) {
    if (tea2.length >10){
        break;
        
    }
    shortTeas.push(tea2);
    
 }
 console.log(shortTeas);
 

 
 
 





