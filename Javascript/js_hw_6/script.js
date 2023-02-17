// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length);*/

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*console.log('hello world'.toUpperCase())
console.log('lorem ipsum'.toUpperCase())
console.log('javascript is cool'.toUpperCase());*/

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSU'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   ';
str = str.replace(' d', 'd');
str = str.replace('g   ', 'g'); /!*:P*!/
console.log(str)*/

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
/*let str = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return str.split(' ')
}
let arr = stringToarray(str)
console.log(arr)*/

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
/*let arr = [10,8,-7,55,987,-1011,0,1050,0];
strArr = arr.map(item => item.toString())
console.log(strArr);*/

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
/*let nums = [11,21,3];
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        console.log(nums.sort((f, s) => f - s));
    } else if (direction === 'descending') {
        console.log(nums.sort((f, s) => s - f));
    } else {console.log('Wrong direction!')}
}
sortNums(nums,'ascending')
sortNums(nums,'descending')*/

// ==========================
// - є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((f, s) => s.monthDuration - f.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let num = 0
let map = coursesAndDurationArray.map(item => {
    return {id : ++num, title:item.title, monthDuration:item.monthDuration}
})
console.log(map);*/


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
/*let cardDeck = [
    {cardSuit: 'spades', value: '6', color: 'black'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
]
// - знайти піковий туз
console.log(cardDeck.find(item => item.cardSuit === 'spades' && item.value === 'ace'));
// - всі шістки
console.log(cardDeck.filter(item => item.value === '6'));
// - всі червоні карти
console.log(cardDeck.filter(item => item.color === 'red'));
// - всі буби
console.log(cardDeck.filter(item => item.cardSuit === 'diamonds'));
// - всі трефи від 9 та більше
console.log(cardDeck.filter(item => item.cardSuit === 'clubs' && +item.value !== 6 && +item.value !== 7 && +item.value !== 8));*/



// =========================
/*let cardDeck = [
    {cardSuit: 'spades', value: '6', color: 'black'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},        // 'spade', 'diamond','heart', 'clubs','6'-'10', 'ace','jack','queen','king','joker','red','black'
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
]*/
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
/*let packedDeck = cardDeck.reduce((result,card) => {
    if (card.cardSuit === 'spades') {result.spades.push(card)}
    if (card.cardSuit === 'clubs') {result.clubs.push(card)}
    if (card.cardSuit === 'hearts') {result.hearts.push(card)}
    if (card.cardSuit === 'diamonds') {result.diamonds.push(card)}
    return result
}, {spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]})
console.log(packedDeck);*/

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
/*
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let modulesSass = coursesArray.filter(item => item.modules.includes('sass'));
console.log(modulesSass);
// --написати пошук всіх об'єктів, в який в modules є docker
let modulesDocker = coursesArray.filter(item => item.modules.includes('docker'));
console.log(modulesDocker);*/
