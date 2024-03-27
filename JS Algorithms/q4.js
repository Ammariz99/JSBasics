function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const targetElement = 4;
const index = linearSearch(array, targetElement);
console.log("Index: ", index);
