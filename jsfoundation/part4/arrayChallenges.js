let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
//console.log(firstTea);

let cities = ["london", "tokyo", "paris", "new york"];
let favoriteCity = cities[2];
//console.log(favoriteCity);

// change the element
let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[2] = "jasmine tea";
//console.log(teaTypes);

// add the name in the array by using push method
let citiesVisited1 = ["mumbai", "sydney"];
citiesVisited1[2] = "berlin";
//console.log(citiesVisited1);
let citiesVisited2 = ["mumbai", "sydney"];
citiesVisited2[citiesVisited2.length] = "berlin";
//console.log(citiesVisited2);

let citiesVisited3 = ["mumbai", "sydney"];
citiesVisited3.push("berlin");
//console.log(citiesVisited3);

//remove the name in the array by using pop method

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastorder = teaOrders.pop();
//console.log(lastorder);

// soft copy of these array
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCoptTeas = popularTeas;
popularTeas.pop();
/* console.log(softCoptTeas);
 console.log(popularTeas); */

//hard copy of these array
let topcities = ["berlin", "singapore", "new york"];
let hardCopyCities = [...topcities];
//let hardCopyCities=topcities.slice();
topcities.pop();
//console.log(hardCopyCities);

//merge these  two array into new array

let europenCities = ["PARIS", "ROME"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europenCities.concat(asianCities);
//console.log(worldCities);

//find the length of the array

let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];
let menuLength1 = teaMenu.length;
//console.log(menuLength1);

// includes method

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];
let isLondonInList = cityBucketList.includes("london");
console.log(cityBucketList);

console.log(isLondonInList);



