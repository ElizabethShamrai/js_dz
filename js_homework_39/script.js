'use strict';
const bodyEl = document.body;
bodyEl.style.backgroundColor = 'plum';

function createTable() {
    let num = 0;
    let value = 100;
    let rowElements = 10;
    let table = document.createElement('table');
    bodyEl.prepend(table);
    table.setAttribute('border', '2px');
    for (let index = 0; index < value / rowElements; index++) {
        let tr = document.createElement('tr');
        table.append(tr);    
        for (let i = 0; i < rowElements; i++) {
            let td = document.createElement('td');
            tr.append(td);
            num ++;
            td.textContent = num;
            if(num === value) break;
        }
    }
}
createTable();