// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let repack = new URL(location.href);
let user = JSON.parse(repack.searchParams.get('container'));
let header = document.createElement('h1');
header.classList.add('header');
header.innerText = user.username;
let wrap = document.createElement('div');
wrap.classList.add('wrap');

for (key in user) {
    let item = document.createElement('div');
    item.classList.add('user-item');
    item.innerText = `${key}: `;
    if (typeof user[key] === "object"){
        let ulList = document.createElement('ul');
        for (value in user[key]) {
            let liList = document.createElement('li')
            liList.innerText = `${value}: ${user[key][value]};`
            ulList.appendChild(liList)
        }
        item.appendChild(ulList)
    } else {
        item.innerText = `${key}: ${user[key]}: `
    }
    wrap.appendChild(item)
}

document.body.appendChild(wrap)
document.body.appendChild(header)
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів
// поточного юзера
// (для получения постов используйте эндпоинт
// https://jsonplaceholder.typicode.com/users/USER_ID/posts)
let postBtn = document.createElement('a');
postBtn.href = '#';
postBtn.classList.add('button', 'post-button');
postBtn.innerText = 'posts of current user'
document.body.appendChild(postBtn)

postBtn.addEventListener('click', function () {
    let remover = document.getElementById('posts-list');
    if (remover) {document.body.removeChild(remover)}
    let postsUrl = new URL(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
    fetch(postsUrl)
        .then(posts => posts.json())
        .then(posts => {
            let postsList = document.createElement('ul');
            postsList.classList.add('posts-list');
            postsList.id = 'posts-list';
            for (const post of posts) {
                let postLi = document.createElement('li');
                postLi.classList.add('post-li')
                postLi.innerText = `${post.title}`;
                postsList.appendChild(postLi)
            }
            document.body.appendChild(postsList)
        })
})


//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на
//     сторінку post-details.html, котра має детальну інфу про поточний пост.
//