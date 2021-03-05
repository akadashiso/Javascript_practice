// Async code example

console.log('Start');

// setTimeout(() => {
//   console.log("We are in the timeout");
// },5000);

const items = [1,2,3,4,5];

items.forEach((item) => {
  console.log(item);
});

console.log('End');

// // Sync code example
// function otherFunct(){
//   console.log('we are in another funct');
//   console.log('do some stuff');
// }


// console.log('Start');

// otherFunct();

// console.log('End');