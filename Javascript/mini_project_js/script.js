/*
    В index.html
    - отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users */
let url = new URL('https://jsonplaceholder.typicode.com/users');

/*
    - Вивести id, name всіх user в index.html. Окремий блок для кожного user.
    - Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід
    на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули*/
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let box = document.createElement('div');
            box.classList.add('box');
            let code = document.createElement('div');
            code.classList.add('item');
            code.innerText = `${user.id}. ${user.name}`;
            let button = document.createElement('a');
            button.href = 'user-details.html?container=' + JSON.stringify(user);
            button.target = '_blanc';
            button.classList.add('button');
            button.innerText = 'Details'
            box.append(code, button);
            document.body.appendChild(box)
        }
    })


/* Стилизація проєкта
    - index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією
    про user.

    - user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє,
    на 90% ширини сторінки, по центру.

    - блоки з короткою інфою про post - в ряд по 5 .

    - post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
    Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб
    було видно що це блоки (дати фон. марджини і тд)*/
