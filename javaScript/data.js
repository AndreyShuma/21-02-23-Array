
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then( result => {
//     // console.log(result);
//     return result.json()
// })
// .then( res => console.log(res))
// .catch(er => console.log(er));

// const testPromise = new Promise( (resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/20')
//     .then( result =>result.json())
//     .then( res => resolve(res))
//     .catch(er => reject(er));
// })
// .then(result => console.log(result))
// .catch(negativ => console.log(negativ));

// const asyncFun =async () => {return "Я получил промис и его результат!!!"};
// console.log(asyncFun()  .then( value => console.log(value)));

const asyncFunError =async () => { throw new Error('Привет я ошибка') };
console.log(asyncFunError()  
.then( value1 => console.log(value1))
.catch( value => console.log(value.message)));

