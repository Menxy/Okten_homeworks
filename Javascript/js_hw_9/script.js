// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

/*let firstDiv = document.createElement('div');
firstDiv.innerHTML = '<h1>Hello Okten!</h1>';
firstDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
firstDiv.style.background = 'pink';
firstDiv.style.color = 'yellow';
firstDiv.style.fontSize = '2em';

document.body.appendChild(firstDiv)
document.body.appendChild(firstDiv.cloneNode(true))*/

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

/*let menu = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul')

for (const item of menu) {
    let menuItem = document.createElement('li');
    menuItem.innerHTML = `<h2> ${item} </h2>`
    ul.appendChild(menuItem)
}
document.body.appendChild(ul)*/


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let courseDiv = document.createElement('div');
    courseDiv.innerHTML = `<b> ${course.title}</b> кількість місяців: ${course.monthDuration}`;
    document.body.appendChild(courseDiv)
}*/

// =========================
//     - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
/*for (const course of coursesAndDurationArray){
    let element = document.createElement('div');
    element.classList.add('item');
    let header = document.createElement('h1');
    header.classList.add('heading');
    header.innerText = `Курс ${course.title}`;
    let para = document.createElement('p');
    para.classList.add('description')
    para.innerText = `Тривалість курсу: ${course.monthDuration}`
    element.append(header, para)
    document.body.appendChild(element)
}*/
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
/*for (const simpson of simpsons) {
    let block = document.createElement('div');
    let header = document.createElement('h3');
    header.innerText = `${simpson.name} ${simpson.surname}`;
    let age = document.createElement('p');
    age.innerText = `Вік: ${simpson.age} років(рік).`;
    let info = document.createElement('p');
    info.innerText = `${simpson.info}`;
    let photo = document.createElement('img');
    photo.setAttribute('src', `${simpson.photo}`);
    photo.setAttribute('width', '300px');
    block.append(header, age, info, photo)
    document.body.appendChild(block)
}*/


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей, для властивості modules зробити список з
// елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
/*for (const course of coursesArray) {
    let wrap = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = `Назва курсу: ${course.title}`;
    let duration = document.createElement('p');
    duration.innerHTML = `<b>${course.monthDuration}</b> місяців (<i>${course.hourDuration}</i> годин).`;
    let modules = document.createElement('ul');
    for (const module of course.modules) {
        let mod = document.createElement('li');
        mod.innerText = module;
        modules.appendChild(mod)
    }
    wrap.append(title, duration, modules);
    document.body.appendChild(wrap)
}*/

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

/*let textElement = document.createElement('p');
textElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam at culpa delectus dignissimos doloremque, ea eum expedita ipsam, magnam mollitia officia pariatur ratione reiciendis rem sapiente veritatis! Consequuntur, possimus.'
textElement.setAttribute('id', 'text')
let buttOn = document.createElement('div');
buttOn.style.width = '100px';
buttOn.style.height = '50px';
buttOn.style.background = 'pink';
buttOn.innerText = 'Hide!';
buttOn.style.boxSizing = 'border-box'
buttOn.style.padding = '15px 35px';
buttOn.addEventListener('click', function (eo){
    textElement.classList.toggle('hide')
})
document.body.append(textElement, buttOn)*/

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
//     на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

/*let ageForm = document.forms[0];
ageForm.onsubmit = function (eo) {
    eo.preventDefault();
    if (+ageForm.age.value < 18) {
        alert('Вам менше 18 років!')
    }
}*/

