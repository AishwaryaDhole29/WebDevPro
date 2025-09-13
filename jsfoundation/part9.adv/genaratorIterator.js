// it does'nt execute all things at a once

// next()---ITERATOR
// function* numberGenerator(){
//     yield 1
//     yield 2
//     yield 3
// }----Generator

function* numberGenerator(){
    yield 1
    yield 2
    yield 3


}
let gen = numberGenerator();
let genTwo = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);