const array = ['bob', 'Able', 'Zed', 'zed', 'apeble'];

array.sort((a, b) => {
  if(a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
});

console.log(array);

const myObj = [

  {
    name: 'Lilian',
    age: 25,
    hair: 'brown'
  },
  {
    name: 'John',
    age: 46,
    hair: 'brown'
  },
  {
    name: 'Ron',
    age: 60,
    hair: false
  }

]

// myObj.sort((a, b) => {
//   if(a.name.toLowerCase() < b.name.toLowerCase()) {
//     return -1;
//   } else {
//     return 1;
//   }
// })


myObj.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
})
console.log(myObj);

// TERNARYS - 

// return a < b ? 1 : -1; vs

// if(a < b) {
//   return 1;
// }else {
//   return -1;
// }

// return condition1 ? value1
// : condition2 ? value2
// : condition3 ? value3
// : value4;


