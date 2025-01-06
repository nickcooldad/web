function filterByShape(arr, parameter) {
    return arr.filter(el => Object.keys(parameter).every(item => el[item] === parameter[item]))
   }

   const arr = [
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 1, c: 1 },
    { a: 1, b: 2, c: 1 },
    { a: 1, b: 1, c: 2 },
    { a: 1, b: 2, c: 2 },
    { a: 2, b: 1, c: 2 },
    { a: 2, b: 2, c: 2 },
  ];
  
  console.log(filterByShape(arr, {a: 1}));
  // [
  //   { a: 1, b: 1, c: 1 },
  //   { a: 1, b: 2, c: 1 },
  //   { a: 1, b: 1, c: 2 },
  //   { a: 1, b: 2, c: 2 },
  // ]
  
  console.log(filterByShape(arr, { a: 1, b: 2 }));
  // [
  //   { a: 1, b: 2, c: 1 },
  //   { a: 1, b: 2, c: 2 },
  // ]
  