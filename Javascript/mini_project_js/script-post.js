/*
    На странице post-details.html:
    - Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
    - Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
    - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)*/
let postRepack = new URL(location.href);
let postNum = JSON.parse(postRepack.searchParams.get('postContainer'))
postUrl = new URL(`https://jsonplaceholder.typicode.com/posts/${postNum}`)
commentsUrl = new URL(`https://jsonplaceholder.typicode.com/posts/${postNum}/comments`)
fetch(postUrl)
    .then(post => post.json())
    .then(post => {
        let header = document.createElement('h1');
        header.classList.add('header');
        header.innerText = `Post ID ${post.id}`;
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (key in post) {
            let item = document.createElement('div');
            item.classList.add('user-item');
            item.innerText = `${key}: ${post[key]}.`
            wrap.appendChild(item)
        }
        document.body.append(header, wrap)
        fetch(commentsUrl)
            .then(comments => comments.json())
            .then(comments => {
                let comHeader = document.createElement('h3');
                comHeader.classList.add('header');
                comHeader.innerText = `Post ${postNum} comments`;
                let commentsList = document.createElement('div');
                commentsList.classList.add('posts-list');
                for (const comment of comments) {
                    let commentPost = document.createElement('div');
                    commentPost.classList.add('post-li')
                    for (const commentKey in comment) {
                        let commentLine = document.createElement('div');
                        commentLine.innerText = `${commentKey}: ${comment[commentKey]}`
                        commentPost.appendChild(commentLine)
                    }
                    commentsList.appendChild(commentPost)
                }
                document.body.append(comHeader, commentsList)
            })
    })



