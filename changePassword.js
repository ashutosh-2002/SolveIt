const newPass = document.querySelector('#newPass');
const done = document.querySelector('#done');

let Users = JSON.parse(localStorage.getItem('Users'));
let currUser = JSON.parse(localStorage.getItem('currUser'));

function change() {
    Users.forEach(User => {

        if (User.email == currUser.email) {

            User.password = newPass.value;
            localStorage.setItem('Users', JSON.stringify(Users));
        }
    });

    done.style.display = 'block';
}