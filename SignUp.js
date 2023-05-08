const email = document.querySelector('#email');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const error = document.querySelector('#error');
const hidden = document.querySelector('#hidden');

class USER {

    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

}

class CURRUSER {

    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

}

function showError(msg) {

    error.textContent = msg;
    error.style.display = 'block';

}

function SignUp() {
    if (email.value == "")
        showError("Please enter Email Id !!!");

    else if (name.value == "")
        showError("Please enter Name !!!");

    else if (password.value == "")
        showError("Please enter Password !!!");

    else {
        let user = new USER(email.value, name.value, password.value);

        let Users;

        if (localStorage.getItem('Users') === null)
            Users = [];
        else
            Users = JSON.parse(localStorage.getItem('Users'));

        let flag = 0;
        Users.forEach(User => {

            if (User.email == email.value) {
                flag = 1;
                hidden.style.display = 'block';
            }
        });

        if (flag == 0) {
            Users.push(user);
            let currUser = new CURRUSER(user.email, user.name);

            localStorage.setItem('Users', JSON.stringify(Users));
            localStorage.setItem('currUser', JSON.stringify(currUser));
            location.assign('starttest.html');
        }
    }

}