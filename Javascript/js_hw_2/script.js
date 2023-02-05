// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
/*let myArr = []
myArr[0] = 'Хочу ';  myArr[1] = 'жити '; myArr[2] = 'на '; myArr[3] = 'Мальдівах '; myArr[4] = 'та ';
myArr[5] = 'працювати '; myArr[6] = 'на '; myArr[7] = 'ремоуті '; myArr[8] = 'в '; myArr[9] = 'Okten.';
console.log(myArr[0]); console.log(myArr[1]); console.log(myArr[2]); console.log(myArr[3]); console.log(myArr[4]);
console.log(myArr[5]); console.log(myArr[6]); console.log(myArr[7]); console.log(myArr[8]); console.log(myArr[9]);*/

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
/*let libIt = { title: 'It' , pageCount: 1288, genre: 'horror' };
let lib1984 = { title: '1984' , pageCount: 478, genre: 'antiutopia' };
let libHive = { title: 'Hive' ,pageCount: 675, genre: 'battle fantasy' };*/

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являєтьс
я  масивом. Кожен автор має поля name та age.*/
/*let bookIt = {title: 'It', pageCount: 1288, genre: 'horror', author: [{name:'King'},{age:79}]};
let book1984 = {title: '1984', pageCount: 478, genre: 'antiutopia', author: [{name:'Orwell'}, {age:120}]};
let bookHive = {title: 'Hive', pageCount: 675, genre: 'battle fantasy', author: [{name:'Kamenistiy'}, {age:45}]};*/

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувача
/*let users = [
    {name: 'Hanna', username: 'Jinger',password: 'JingerHanna'},
    {name: 'Jen', username: 'Foxy',password: 'FoxyJen'},
    {name: 'Ana', username: 'Owi',password: 'OwiAna'},
    {name: 'Jack', username: 'Russell',password: 'RussellJack'},
    {name: 'Jeff', username: 'Hooligan',password: 'HooliganJeff'},
    {name: 'Mary', username: 'Bloody',password: 'BloodyMary'},
    {name: 'Ida', username: 'Isis',password: 'IsisIda'},
    {name: 'Rob', username: 'Zombie',password: 'ZombieRob'},
    {name: 'Dylon', username: 'Bob',password: 'BobDylon'},
    {name: 'Amy', username: 'Robin',password: 'RobinAmy'},
];
console.log(users[0]['password']); console.log(users[1]['password']); console.log(users[2]['password']);
console.log(users[3]['password']); console.log(users[4]['password']); console.log(users[5]['password']);
console.log(users[6].password); console.log(users[7].password); console.log(users[8].password);
console.log(users[9].password);*/

// Логічні розгалуження:
/*    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
/*let x = parseInt(prompt('Введіть число'));
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}*/

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
/*let time = parseInt(prompt('Введіть хвилини (від 0 до 59'));
if (time <= 15) {
    console.log('Перша чверть.')
} else if (time <= 30) {
    console.log('Друга чверть.')
} else if (time <= 45) {
    console.log('Третя чверть.')
} else {
    console.log('Четверта чверть.')
};*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
/*let day = parseInt(prompt('Введіть число місяця (від 1 до 31'));
if (day <= 10) {
    console.log('Перша декада.')
} else if (day <= 20) {
    console.log('Друга декада.')
} else {
    console.log('Третя декада.')
};*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
/*let weekDay = parseInt(prompt('Введіть день тижня (від 1 до 7'));
switch (weekDay) {
    case 1 :
        console.log('Monday');
        break;
    case 2 :
        console.log('Tuesday');
        break;
    case 3 :
        console.log('Wednesday');
        break;
    case 4 :
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6 :
        console.log('Saturday');
        break;
    case 7 :
        console.log('Sunday');
        break;
}*/

//     - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
/*let first = parseInt(prompt('Введіть перше число'));
let second = parseInt(prompt('Введіть друге число'));
if (first > second) {
    console.log(`${first} більше.`)
} else if (second > first) {
    console.log(`${second} більше.`)
} else {
    console.log('Числа рівні.')
}*/

// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється false
// (хибноподібні, тобто приводиться до false)
/* Тут я або не зрозумів завдання, або малось на увазі !!, а не ||. Чи треба null || NaN || 0 || -0 || '' || undefined ??*/
/*let x = 666;
if (!!x === false) {
    x = 'default'
}
console.log(x)*/

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
/* let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[1].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[2].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[3].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[4].monthDuration > 5) {console.log('Супер')}
if (coursesAndDurationArray[5].monthDuration > 5) {console.log('Супер')}*/
