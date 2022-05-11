'use strict';
let elements = document.querySelectorAll('ul > li');
let arr = [];
for (let elem of elements) {
    arr.push(elem.innerHTML);
}
console.log(arr);
console.log('кол-во элементов ' + elements.length);
