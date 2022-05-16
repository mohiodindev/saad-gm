// methods of array

const array = [1, 2, 3, 4, 5];
array.forEach(function (item, index, array) {
  console.log(item);
});

const item = array.map(function (item, index, array) {
  return item * 2;
});

console.log(item);
