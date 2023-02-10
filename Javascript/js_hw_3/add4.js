// 1. Створити пустий масив та :
let suffer = []
//     a. заповнити його 50 парними числами за допомоги циклу.
/*let count = 0;
for (let i = 1; i <= 100; i ++) {
    if (i % 2 === 0) {
        suffer[count] = i
        count++
    }

}
console.log(suffer);*/

//     b. заповнити його 50 непарними числами за допомоги циклу.
/*let count = 0;
for (let i = 1; i <= 100; i ++) {
    if (i % 2 !== 0) {
        suffer[count] = i
        count++
    }

}
console.log(suffer);*/

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    suffer[i] = Math.floor(Math.random() * 100);
}*/

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*for (let i = 0; i < 20; i++) {
    suffer[i] = Math.floor(Math.random() * (732 - 8) + 8);
}*/

// 2. Вивести за допомогою console.log кожен третій елемен
/*for (let i = 2; i < suffer.length; i += 3) {
    console.log(suffer[i]);
}*/

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*for (let i = 2; i < suffer.length; i += 3) {
    if (suffer[i] % 2 === 0) {
        console.log(suffer[i]);
    }
}*/

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*let newArr = [];
for (let i = 2; i < suffer.length; i += 3) {
    if (suffer[i] % 2 === 0) {
        console.log(suffer[i]);
        newArr.push(suffer[i])
    }
}*/

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
/*let someArr = [ 1, 2, 3, 5, 7, 9, 88, 43, 12, 56, 8, 67 ];
for (let i = 0; i < someArr.length; i++) {
    if (someArr[i+1] % 2 === 0) {
        console.log(someArr[i]);
    }
}*/

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
/*let buysArr = [100,250,50,168,120,345,188];
total = 0;
for (const buy of buysArr) {
    total += buy
}
total = total / buysArr.length
console.log(Math.floor(total));*/

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*let randomArr = [];
for (let i = 0; i < 50; i++) {
    randomArr[i] = Math.floor(Math.random() * 100);
}
let fiveArr = [];
for (let i = 0; i < randomArr.length; i++) {
   fiveArr[i] = randomArr[i] * 5;
   delete randomArr[i]
}
console.log(randomArr);
console.log(fiveArr);*/

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
/*let arrMix = [34, 'foo', 345, true, 'dead', false, 222, true, 'megan', 23]
let arrAdd = []
for (const elem of arrMix) {
    if (typeof elem === 'number') {
        arrAdd.push(elem)
    }
}
console.log(arrAdd);*/


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
/*let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let commonArr = []
for (let i = 0; i < usersWithId.length; i++ ) {
    for (let city of citiesWithId) {
        if (usersWithId[i]['id'] === city['user_id']) {
            commonArr.push(usersWithId[i]);
            commonArr[i]['address'] = city
        }
    }
}
console.log(commonArr);*/

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*let someArr = [100,250,51,168,120,345,188,56,222,45];
for (const number of someArr) {
    if (number % 2 === 0){
        console.log(number);
    }
}*/

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/*let someArr = [100,250,51,168,120,345,188,56,222,45];
let anyArr = [];
for (const some of someArr) {
    anyArr.push(some)
}
console.log(anyArr);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let letArr = [ 'a', 'b', 'c'];
let word = '';
for (const letter of letArr) {
    word += letter
}
console.log(word);*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let letArr = [ 'a', 'b', 'c'];
let word = '';
while (word.length < letArr.length) {
    word += letArr[word.length]
}
console.log(word);*/
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*let letArr = [ 'a', 'b', 'c'];
let word = '';
for (const letter of letArr) {
    word += letter
}
console.log(word);*/
