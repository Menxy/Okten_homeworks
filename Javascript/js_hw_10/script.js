// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку
// зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму,
// натиснули кнопку, під формою з'явився блок з вашим об'єктом
/*let statForm = document.forms[0];
statForm.addEventListener("submit", function (eo) {
    eo.preventDefault();
    let paragraph = document.createElement('div');
    paragraph.innerText = `${statForm.name.value} ${statForm.surname.value}, ${statForm.age.value} рочків.`;
    paragraph.style.border = '5px solid gold';
    paragraph.style.background = 'grey';
    paragraph.style.color = 'white';
    paragraph.style.padding = '30px'
    paragraph.style.border = '2px solid gold';
    document.body.appendChild(paragraph)
})*/
// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1
/*let slot = +JSON.parse(localStorage.getItem('slot')) || 1;
let numElement = document.getElementsByClassName('number')[0];
numElement.innerText = slot;
localStorage.setItem('slot', slot + 1)*/
// ==========================

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив
// sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка
// sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру
// під кожну сессію
/*let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
let date1 = new Date();
console.log(sessions);
sessions.push(date1)
localStorage.setItem('sessions', JSON.stringify(sessions))*/
/*stat.html*/

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
/*let hundred = [67, 1, 31, 37, 44, 85, 72, 10, 22, 71, 86, 26, 36, 57, 45, 56, 93, 39, 14, 22, 18, 74, 65, 77, 95, 1, 88, 37, 89, 87, 55, 14, 14, 60, 35, 76, 64, 97, 16, 22, 84, 50, 77, 77, 93, 42, 25, 13, 97, 14, 69, 12, 47, 69, 44, 58, 25, 73, 35, 88, 54, 35, 20, 9, 26, 72, 17, 3, 24, 72, 42, 40, 16, 28, 61, 25, 37, 84, 2, 17, 97, 84, 38, 50, 44, 90, 58, 43, 23, 2, 74, 93, 93, 87, 15, 70, 15, 83, 60, 80];
let first = 0;

function ten(first) {
    let remover = document.getElementById('hundred-box');
    if (remover) {
        document.body.removeChild(remover)
    }
    hundredBox = document.createElement('div')
    hundredBox.classList.add('switch');
    hundredBox.id = 'hundred-box';
    for (let i = first; i < first + 10; i++) {
        let item = document.createElement('div');
        item.classList.add('hundred-item');
        item.innerHTML = hundred[i];
        hundredBox.appendChild(item)
    }
    document.body.appendChild(hundredBox)
}

ten(first);
let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];
prev.addEventListener('click', function () {
    if (first > 0) {
        first -= 10;
        ten(first)
    }
})
next.addEventListener('click', function () {
    if (first < hundred.length - 10) {
        first += 10;
        ten(first)
    }
})*/

// =========================
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним
//     вмістом.
//--> table.html
/*
let tableForm = document.forms[0];
let table = document.getElementById('table');
if (table) {
    document.removeChild(table)
}

tableForm.addEventListener("submit", function (eo) {
    eo.preventDefault();
    let remover = document.getElementById('table');
    console.log(remover);
    if (remover) {
        document.body.removeChild(remover)
    }
    let table = document.createElement('div');
    table.id = 'table';
    for (let i = 0; i < tableForm.rows.value; i++){
        let currentRow = document.createElement('div');
        currentRow.classList.add('row')
        for (let j = 0; j < tableForm.columns.value; j++) {
            let tableItem = document.createElement('div');
            tableItem.classList.add('table-item');
            tableItem.innerText = tableForm.stuff.value;
            currentRow.appendChild(tableItem)
        }
        table.appendChild(currentRow)
    }
    document.body.appendChild(table)
})
*/
