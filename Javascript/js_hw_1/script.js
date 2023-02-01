/* 1
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log   */
let hello = 'hello'; console.log(hello);
let owu = 'owu'; console.log(owu);
let com = 'com'; console.log(com);
let ua = 'ua'; console.log(ua);
let one = 1; console.log(one);
let ten = 10; console.log(ten);
let nines = -999; console.log(nines);
let pass = 123; console.log(pass);
let pi = 3.14; console.log(pi);
let two = 2.7; console.log(two);
let steen = 16; console.log(steen);
let plus = true; console.log(plus);
let no = false; console.log(no);
/* 2
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)  */
let firstName = 'Левчук';
let middleName = 'Андрій';
let lastName = 'Ярославович';
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person)
/* 3
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true; */
let a = 100; console.log(typeof a);
let b = '100'; console.log(typeof b);
let c = true; console.log(typeof c);
/* bonus
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/
let name = prompt("Ім'я")
let surname = +prompt("Прізвище")
let age = prompt("Вік")
console.log(name + ' ' + surname + '.' + ' Вік: ' + age + ' років.')