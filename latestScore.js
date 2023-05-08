const table = document.querySelector('#table')

latestScore = JSON.parse(localStorage.getItem('latestScore'));

if (latestScore === null)
    latestScore = [];

latestScore.forEach(score => {

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

});