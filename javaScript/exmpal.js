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


const o = (arr, tame) => {
    for ( let key in arr) {
        for ( let item of arr[key]) { 
            if( item.name === tame) {
                return item}
        }
    }
}
// console.log( o(purchase, 'Laptop'));




// const find = (items, name) => {
//     for ( let key in items) {
//         for( let item of items[key]) {
//             if (item.name === name) return item
//         }
//     }   
// };

// console.log(find(purchase, 'Laptop')); 

let arrTest = ['Andrey', 'Vova', 'Marina'];

function Kol(name, index) {
    this.name = name,
    this.index = "Hello"
}

let htmlTest = (arr) => {
    let result = [];
    for ( let key of arr) {
        let a = new Kol(key);
        result.push(a);
    }
    return result;
}
// console.log(htmlTest(arrTest ));
// function SetObject(name) {
//     this.name = name;
//     this.say = function() {return console.log('Hello!!')}
// }

// let h = new SetObject(arrTest[0]);
// let g = new SetObject(arrTest[1]);
// console.log(h, g.say());
let ao = 89;
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const prop = keys[i];
//   console.log(prop); // выведет a, b, c
//   console.log(obj[prop]); // выведет 1, 2, 3
}
let arrTest2 = ['Andrey', 'Vova', 'Marina'];

// console.log(arrTest2[5] = 'hyyhyj');
// console.log(arrTest2);
// console.log(obj['ao'] = ao);
// console.log(obj['a'] = obj['a']);
// console.log(obj);

// const array = [{color:'white', id:2}, {color: 'black', id: 3}];
// // let output ={};
// // console.log(array[0].color);

// // output = {
// //     'white' : {
// //         '2' : { color: 'white', id: 2},
// //     },
// //     'black' : {
// //         '3' : { color: 'black', id: 3},
// //     }
// // }
// const arrFunction = (arr) => {
//     let output = {};
//     for ( let i = 0; i < arr.length; i++) {
//         const color = arr[i]['color'];
//         const id = arr[i].id;
//         const item =  arr[i];
//         output[color] = {} ; 
//         output[color][id] = item;

//     }
//     return output;
// }
// console.log( arrFunction(array) ); 
// const arr =[3, 5, 2, 2, 5, 7]; ///   [2, 3, 5, 7]
const people = {
    name: 'Andrey',
    lastName: 'Shumeiko',
    age :39,
    job: 'freelanser'
};
people.prototype=obj;
// console.log(people);
let y = Object.keys(people).length;
// console.log(y);

const arrObj = [];
// console.log(arrObj); /// [ [], [], [] ]
const funcObj = ( objFunc) => {
    const arrObj = [];
    for ( let key in objFunc) {
        const a =[];
        a.push(key, objFunc[key])
        arrObj.push(a);
    }
    return arrObj;
}
let t = funcObj(people);

let d = Object.entries(people);
// console.log(d);
// console.log(Object.fromEntries(t));
Object.prototype.sayHello999 = function() { console.log('Hello!!!')};
Object.__proto__.sayHello12_proto = function() { console.log('Hello!!!1232231')};
Array.prototype.sayYES = function() { console.log('YES!!!')};
Array.__proto__.sayYES_proto = function() { console.log('YES!!!_proto')};
const num = [10, 25, 70, -50, 2, 0, 12];

const f1 = (arr) => {
    console.log(arr);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log( max, min);
    
    const indexMax = arr.indexOf(max);
    let indexMin = null;
    if (min >= 0) { 
            indexMin = arr.indexOf(min);
            console.log(indexMin);
        } else {
            indexMin = -1*arr.indexOf(min); 
            console.log(indexMin);
        }

    const arrMax = arr.splice(indexMax,1);
    const arrMin = arr.splice(indexMin-1,1);

    let m = 0;
    const result = arr.reduce((ac, item, index, array) => {
        ac += item;
        if( index == array.length-1) {
            m = ac/array.length;
            // console.log(m);
            return  m }
        // console.log(ac);
        return ac;
        });
    return m;
    }    

// console.log(f1(num));
const foo = {
    name: 'Andrey',
    age: 40,
    growth: 185,
    no:() =>{console.log("Non STOP!!!");}
};
// console.log(foo);
const f2 =(obj) => {
    const result =[];
    for ( let key in obj) {
        result.push([key, obj[key]])
    }
    return result;
}
// console.log(f2(foo));
const ask = Object.entries(foo);
const ask2 =Object.fromEntries(ask);
const keyFoo = Object.keys(foo);
const valuesFoo = Object.values(foo);
// console.log(valuesFoo);
// console.log(keyFoo);
// let doom = ask.map(([itemArr, itemValue]) => console.log(itemArr, itemValue));

const testMe = [{color:'white', id:2}, {color: 'black', id: 3}];
const ups = (arr) => {
    result = {};
    for ( let i =0; i < arr.length; i++) {
        let color = arr[i]['color'];
        let id = arr[i]['id'];
        // console.log(color, id);
        result[color] ={};
        result[color][id] = arr[i];
    }
    return result;
}
// console.log(ups(testMe));
class Comment {
    constructor(text) {
        this.text = text,
        this.upComment = 0
    }
    upComment() {
        this.upComment += 1
    } 
    static mergeComment (first, second ) {
        return `${first} ${second}`
    }
}
const LoveComment = new Comment('Я люблю коментарии!!!');
Comment.prototype.Bla_Bla_Bla = 'Текст про бла-бла-бла!!! )))';
Comment.__proto__.Bla_Bla_Bla__proto__ = 'Текст __proto__ )))';
foo.__proto__.scoole = 10;
// console.log(LoveComment);
// foo.prototype.scoole = 20;
// console.log(foo.prototype);
// console.log(foo.__proto__);
var xz = 0;
function callback(err, result) {
    if(err) {
        xz--;
        return
    }
    xz++;
}
// setTimeout(callback, 10, 'Error');
// console.log(xz);
// callback();
// console.log(xz);
