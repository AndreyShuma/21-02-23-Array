'use strict';

const render = document.querySelector('.render');
const input = document.querySelector('input[name="enterInput"]');
const btnPush = document.querySelector('.btnPush');
const btnClear = document.querySelector('.btnClear');
const choice = document.querySelector('select[name="choice"]');
// const optionMy = document.querySelector('option[value="man"]');
// console.log(document.forms);
// console.log(choice);
// console.log(optionMy);

let result =[];

const arrPush = () => {
    let a = input.value;
    let html = `<div>${a}</div>`;
    result.push(html);
    input.value = '';
    // a = '';
    return render.innerHTML = result.join('');
}

const arrClear = () => {
    result = [];
    input.value = '';
    return render.innerHTML = result;
}


btnPush.addEventListener('click', arrPush );
btnClear.addEventListener('click', arrClear );
choice.addEventListener('change', () => {
    let c = `Hello ${choice.value}`
    console.log(c);
});
// console.dir(input);