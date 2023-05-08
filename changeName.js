const newName = document.querySelector('#newName');
const done = document.querySelector('#done');

let Users = JSON.parse(localStorage.getItem('Users'));
let currUser = JSON.parse(localStorage.getItem('currUser'));

function change() {
    Users.forEach(User => {

        if (User.email == currUser.email) {

            User.name = newName.value;
            localStorage.setItem('Users', JSON.stringify(Users));
        }
    });

    currUser.name = newName.value;
    localStorage.setItem('currUser', JSON.stringify(currUser));

    done.style.display = 'block';
}