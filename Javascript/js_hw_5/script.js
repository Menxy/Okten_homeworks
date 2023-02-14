
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*let square = (a, b) => a * b;
console.log(square(30, 50));*/
// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*let round = r => 3.14 * r * r;
console.log(round(50));*/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*let areaCyl  = (h, r) => ((r * r * 3.14 * 2) + (h * 2 * 3.14 * r));
console.log(areaCyl(30, 10))*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/*let arrPrint = arr => {for (const item of arr) {console.log(item)}};
arrPrint([1, 2, true, 43, 'hi'])*/
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*let paragraph = text => document.write(`<p> ${text} </p>`);
paragraph('Хочу банан!')*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*let dooLi = text => document.write(`<ul><li> ${text} </li><li> ${text} </li><li> ${text} </li></ul>`);
dooLi('хУТІН Пуйло!')*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*let dooLis = (text, loop) => {
    document.write(`<ul>`);
    for (let i = 0; i < loop; i++) {
        document.write(`<li> ${text} </li>`)};
    document.write(`</ul>`)}
dooLis('хУТІН Пуйло!', 10)*/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let arrList = arr => {
    document.write(`<ul>`)
    for (const element of arr) {
        document.write(`<li> ${element} </li>`)
    }
    document.write(`</ul>`)}
arrList([11,23,true,43,'hi','I\'m back'])*/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*let objList = arr => {
    for (const element of arr) {
        document.write(`<div> id: ${element['id']}<br>name: ${element['name']}<br>age: ${element['age']}</div><br>`)
    }
}
myArr = [
    {id:121313, name:'Diusha', age: 39},
    {id:534343, name:'Lena', age: 32},
    {id:563442, name:'Oleg', age: 15},
    {id:908987, name:'Gabriel', age: 25},
]
objList(myArr)*/
// - створити функцію яка повертає найменьше число з масиву
/*let lessArr = arr => {
    let less = arr[0];
    for (const element of arr) {
        if (element < less) {
            less = element }
    }
    return less
}
console.log(lessArr([2, 65, 3, 78, 65, 4, 1, -788, 43, 45, -1]));*/
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
/*let sumArr = arr => {
    let sum = 0;
    for (const element of arr) {
        sum += element}
    return sum
}
console.log(sumArr([2, 65, 78, 65, 4, 1, 788, 43, 45, -1]));*/
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
/*let swap = (arr,index1,index2) => {
    let lot = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = lot;
    return arr
}
console.log(swap([1, 2, 3, 4], 0, 3));*/
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const el of currencyValues) {
        if (el.currency === exchangeCurrency) {
            return sumUAH / el.value
        }
    }
}
console.log(exchange(40000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));