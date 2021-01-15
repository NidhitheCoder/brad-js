const names = ["John", "Paul", "George", "Ringo", "John", "Ringo", "Ringo"];
let unique = [...new Set(names)];
let result = [];
unique.map(name => {
  let val = names.filter(item => item === name);
  result = [...result, { name: name, count: val.length }];
});

console.log(result);
