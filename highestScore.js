const table = document.querySelector('#table')

highestScore = JSON.parse(localStorage.getItem('highestScore'));

if (highestScore === null)
    highestScore = [];

highestScore.forEach(uscore => {

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.textContent = uscore.email;
    td2.textContent = uscore.name;
    td3.textContent = uscore.score;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

});