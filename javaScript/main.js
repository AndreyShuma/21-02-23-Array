'use strict';
import otmazka from './otmazka.js';

const render = document.querySelector('.render');
const input = document.querySelector('input[name="enterInput"]');
const btnPush = document.querySelector('.btnPush');
const btnClear = document.querySelector('.btnClear');
const choice = document.querySelector('select[name="choice"]');
const foto = document.querySelector('.foto');

let result =[];
const elDiv =  document.createElement('div');
elDiv.classList.add("block");
// console.log(elDiv);
render.insertAdjacentElement('beforeend', elDiv);

const arrPush = () => {
    let a = input.value;
    let html = `<div>${a}</div>`;
    result.push(html);
    input.value = '';
    return render.innerHTML = result.join('');
}

const arrClear = () => {
    result = [];
    input.value = '';
    foto.innerHTML = '';
    choice.value = null;
    return render.innerHTML = result;
}

btnPush.addEventListener('click', arrPush );
btnClear.addEventListener('click', arrClear );
choice.addEventListener('change', () => {
    let c = `Hello ${choice.value}`
    console.log(c);
    // render.innerHTML = element;
    if( choice.value === 'man') {
        foto.innerHTML = '<img src="./img/Man.jpg" width="80px">';
    } else if (choice.value === 'woman') {
        foto.innerHTML = '<img src="./img/Woman.jpg" width="80px">';
    } else {foto.innerHTML = '' }
});
// console.dir(input);


// console.log(otmazka('бывает'));

// const pop = {
//     "name": 'Ivan',
//     "age": 30
// };

// let {name, age} = pop;
// console.log(pop['name']);
// const ytt = {
//     ...pop,
//     road : 'big',
// };
