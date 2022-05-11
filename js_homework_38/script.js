'use strict';
let arr = [1,2, [1.1,1.2,1.3] ,3];
let arr1 = [1,2, [1.1,1.2,1.3] ,3, 1, 2, [1.1,1.2,1.3] ,3];

function generateList (array) {
    return array.reduce((ul, item) => {
      let li = document.createElement('li');
      if (!Array.isArray(item)) {
        li.innerText = item;
      } else {
        let newUl = generateList(item);
        li.append(newUl);
      }
      ul.append(li);
      return ul;
    }, document.createElement('ul'));
  }
document.body.prepend(generateList(arr1));

