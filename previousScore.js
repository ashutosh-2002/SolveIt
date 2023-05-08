const table = document.querySelector('#table')
let currUser = JSON.parse(localStorage.getItem('currUser'));

scoreList = JSON.parse(localStorage.getItem('scoreList'));

if (scoreList === null)
    scoreList = [];

scoreList.forEach(score => {

    if (currUser.email == score.email) {

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.textContent = score.email;
        td2.textContent = score.name;
        td3.textContent = score.score;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);

    }

});