let a = [10, 0, 5, 15, -8, 25];

// console.log(a.slice(2, 4));
// console.log(a);


let sum = (arr, item) => {
    let index = arr.indexOf(item);

    console.log(arr.splice(index, 1));
    return arr
};

// function sum(arr, elem) {
//     const index = arr.indexOf(elem);
//     if (index !== -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }

// console.log(sum(a, 5));

const purchase = {
    Electronics: [
        { name: 'Laptop', price: 1500 },
        { name: 'Keybord', price: 100 },
    ],
    Textile: [
        { name: 'Bag', price: 50 },
    ]
};

const find = (items, name) => {
    for ( let key in items) {
        for( let item of items[key]) {
            if (item.name === name) return item
        }
    }   
};

// console.log(find(purchase, 'Laptop')); 

let arrTest = ['Andrey', 'Vova', 'Marina'];

// function SetObject(name) {
//     this.name = name;
//     this.say = function() {return console.log('Hello!!')}
// }

// let h = new SetObject(arrTest[0]);
// let g = new SetObject(arrTest[1]);
// console.log(h, g.say());