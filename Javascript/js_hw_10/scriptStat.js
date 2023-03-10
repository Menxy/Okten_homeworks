let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
for (const session of sessions) {
    let wrap = document.createElement('div')
    wrap.innerText = session;
    wrap.classList.add('wrap');
    document.body.appendChild(wrap);
}
