let a = [10, 25, 0, 2, 8, 7, 1, 0];

const sum = (arr, item) => {
    let b = arr.indexOf(item);
    console.log(b);
    console.log(arr.splice(b, 1));
    return arr
};


// function sum(arr, elem) {
//     const index = arr.indexOf(elem);
//     if (index !== -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }

console.log(sum(a, 0));