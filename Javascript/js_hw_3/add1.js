/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
/*let arrNum = [5, 77, 13, 43, 7]
console.log(arrNum)
let arrStr = ['Я', ' хочу', ' на', ' море', '!']
console.log(arrStr)
let arrMix = ['Я хочу ', 2, ' пиріжка.', 'Це ', true]
console.log(arrMix)*/

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*let newArr = []
newArr[0] = 14;
newArr[1] = 'Leopard 2';
newArr[2] = 88;
newArr[3] = 'Leopard 1';
console.log(newArr)*/

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrLoop = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
/*let i = 0;
while (i < arrLoop.length) {
    console.log(arrLoop[i])
    i++
}*/
// 2. перебрати його циклом for
/*for (let i = 0; i < arrLoop.length; i++) {
    console.log(arrLoop[i])
}*/
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
/*let i = 0;
while (i < arrLoop.length) {
    if ((i % 2) !== 0) {
        console.log(arrLoop[i])
    }
    i++
}*/
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
/*for (let i = 0; i < arrLoop.length; i++) {
    if ((i % 2) !== 0) {
        console.log(arrLoop[i])
        }
    }*/
// 5. перебрати циклом while та вивести  числа тільки парні  значення
/*let i = 0;
while (i < arrLoop.length) {
    if ((arrLoop[i] % 2) === 0) {
        console.log(arrLoop[i])
    }
    i++
}*/
// 6. перебрати циклом for та вивести  числа тільки парні  значення
/*for (let i = 0; i < arrLoop.length; i++) {
    if ((arrLoop[i] % 2) === 0) {
        console.log(arrLoop[i])
    }
}*/
// 7. замінити кожне число кратне 3 на слово "okten"
/*for (let i = 0; i < arrLoop.length; i++) {
    if ((arrLoop[i] % 3) === 0) {
        arrLoop[i] = 'okten'
    }
}
console.log(arrLoop)*/
// 8. вивести масив в зворотньому порядку.
/*for (let i = arrLoop.length - 1; i >= 0; i--) {
    console.log(arrLoop[i]);
}*/
// 9. всі попередні завдання (окрім 8), але у зворотному циклі (с заду на перед)
//1
/*let i = arrLoop.length - 1;
while (i >= 0) {
    console.log(arrLoop[i])
    i--
}*/
//2 reverse
/*for (let i = arrLoop.length - 1; i >= 0; i--) {
    console.log(arrLoop[i])
}*/
//3 reverse
/*let i = arrLoop.length - 1;
while (i > 0) {
    if ((i % 2) !== 0) {
        console.log(arrLoop[i])
    }
    i--
}*/
//4 reverse
/*for (let i = arrLoop.length - 1; i > 0; i--) {
    if ((i % 2) !== 0) {
        console.log(arrLoop[i])
        }
    }*/
//5 reverse
/*let i = arrLoop.length - 1;
while (i >= 0) {
    if ((arrLoop[i] % 2) === 0) {
        console.log(arrLoop[i])
    }
    i--
}*/
//6 reverse
/*for (let i = arrLoop.length - 1; i >= 0; i--) {
    if ((arrLoop[i] % 2) === 0) {
        console.log(arrLoop[i])
    }
}*/
//7 reverse
/*for (let i = arrLoop.length - 1; i >= 0; i--) {
    if ((arrLoop[i] % 3) === 0) {
        arrLoop[i] = 'okten'
    }
}
console.log(arrLoop)*/


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*let numArr = [3,8,34,2,0,5,23,455,32,67];
for (let number of numArr) {
    console.log(number)
}*/

// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
/*let strArr = ['Я ', 'хочу ', 'на ', 'море', '!', 'Коли ', 'вже ', 'пУЙЛО ', 'здохне', '?!']
for (const str of strArr) {
    console.log(str)
}*/

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let mixArr = ['let', 'the', true, 'chaos', 2, 'b', 'started', 'at', 1, false];
for (const mixArrElement of mixArr) {
    console.log(mixArrElement)
}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let mixArr = ['let', 'the', true, 'chaos', 2, 'b', 'started', 'at', 1, false];
for (const mixArrElement of mixArr) {
    if (typeof mixArrElement === "boolean") {
        console.log(mixArrElement)
    }
}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*let mixArr = ['let', 'the', true, 'chaos', 2, 'b', 'started', 'at', 1, false];
for (const mixArrElement of mixArr) {
    if (typeof mixArrElement === "number") {
        console.log(mixArrElement)
    }
}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*let mixArr = ['let', 'the', true, 'chaos', 2, 'b', 'started', 'by', 1, false];
for (const mixArrElement of mixArr) {
    if (typeof mixArrElement === "string") {
        console.log(mixArrElement)
    }
}*/

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*let emptyArr = [];
emptyArr[0] = 'let'; emptyArr[1] = `the`; emptyArr[2] = true;
emptyArr[3] = 'chaos'; emptyArr[4] = 2; emptyArr[5] = 'b';
emptyArr[6] = 'started'; emptyArr[7] = 'by'; emptyArr[8] = 1; emptyArr[9] = false;
for (const emptyArrElement of emptyArr) {
    console.log(emptyArrElement)
}*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++) {
    console.log(`Крок номер ${i + 1}.`)
    document.write(`<div>Крок номер ${i + 1}.</div>`)
}*/

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i++) {
    console.log(`Крок номер ${i + 1}.`)
    document.write(`<div>Крок номер ${i + 1}.</div>`)
}*/

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 200; i += 2) {
    console.log(`Крок номер ${(i + 2) / 2}.`)
    document.write(`<div>Крок номер ${(i + 2) / 2}.</div>`)
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i++) {
    if (((i + 1) % 2) === 0){
        console.log(`Крок номер ${i + 1}.`);
        document.write(`<div>Крок номер ${i + 1}.</div>`)
    }
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i++) {
    if (((i + 1) % 2) !== 0){
        console.log(`Крок номер ${i + 1}.`);
        document.write(`<div>Крок номер ${i + 1}.</div>`)
    }
}*/

// Створити масив книжок (назва, кількість сторінок, автори , жанри).
let booksArr = [
    {name: 'Storm', pages: 666, authors: ['King', 'Wales'], genres: ['horror','drama']},
    {name: 'Knights of doom', pages: 564, authors: ['Stockley'], genres: ['drama','historical', 'manga']},
    {name: 'Bone house', pages: 845, authors: ['Jeen Gray', 'Marygold'], genres: ['western']},
    {name: 'My Little Pony', pages: 1254, authors: ['King'], genres: ['horror','psycological']},
    {name: 'Who killed Mark?', pages: 356, authors: ['Strugatskie'], genres: ['detective']},
    {name: 'Sensei', pages: 986, authors: ['Myles'], genres: ['adventures','oriental','horror']},
];

// -знайти найбільшу книжку.
/*let big = booksArr[0]["pages"];
let bigBook = booksArr[0]["name"];
for (const book of booksArr) {
    if (big < book['pages']) {
        big = book['pages'];
        bigBook = book.name
    }
}
console.log(big)
console.log(bigBook)*/

// - знайти книжку/ки з найбільшою кількістю жанрів
/*let moreGenres = booksArr[0].genres.length;
let genresBook = booksArr[0]["name"];
for (const book of booksArr) {
    if (moreGenres < book.genres.length) {
        moreGenres = book.genres.length;
        genresBook = book.name
    }
}
genresBooks = []
for (const book of booksArr) {
    if (book.genres.length === moreGenres) {
        genresBooks.push(book.name)
    }
}
console.log(moreGenres)
console.log(genresBooks)*/

// - знайти книжку/ки з найдовшою назвою
/*let bigName = booksArr[0].name.length;
let nameBook = booksArr[0].name;
for (const book of booksArr) {
    if (bigName < book.name.length) {
        bigName = book.name.length;
        nameBook = book.name
    }
}
console.log(bigName)
console.log(nameBook)*/
// - знайти книжку/ки які писали 2 автори
/*let twoAuthors = [];
for (const book of booksArr) {
    if (book.authors.length === 2) {
        twoAuthors.push(book.name)
    }
}
console.log(twoAuthors)*/

// - знайти книжку/ки які писав 1 автор
/*
oneAuthor = [];
for (const book of booksArr) {
    if (book.authors.length === 1) {
        oneAuthor.push(book.name)
    }
}
console.log(oneAuthor)*/
