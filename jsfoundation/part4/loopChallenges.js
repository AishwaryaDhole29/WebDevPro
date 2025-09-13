// sum of the number

let sum=0
let i=1
while (i<=5){
    sum+=i//sum=sum+i
    i++;
}
//console.log(sum);

//counts down fron 5 to 1 and store the no in  an array name countdown

let countdown=[]
let j = 5
while (j>0) {
    countdown.push(j);
    j--;
    
}
//console.log(countdown);

//

/* let teaCollection =[];
let tea;
do {
    tea=prompt(`enter your favourite tea(type "stop" to finish)`);
    if(tea=="stop"){
        teaCollection.push(tea);
    }
    
} while (tea!=="stop"); */
//console.log(teaCollection);

let total=0;
let k=1;
do {
    total+=k;
    k++;

    
} while (k<=3);
//console.log(total);

let multipliedNumbers=[];
let number=[2,4,6]
//for(initphase;condition,incre/decre){}
for (let l = 0; l < number.length; l++) {
    /* takeNumber=number[l]*2;
    multipliedNumbers.push(takeNumber);
     */
    multipliedNumbers.push(number[l]*2);
}
//console.log(multipliedNumbers);



