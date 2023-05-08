const email = document.querySelector('#email');
const password = document.querySelector('#password');
const error = document.querySelector('#error');
const hidden = document.querySelector('#hidden');

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

function SignIn() {

    if (email.value == "")
        showError("Please enter Email Id !!!");

    else if (password.value == "")
        showError("Please enter Password !!!");

    else {
        let Users;

        if (localStorage.getItem('Users') === null)
            Users = [];
        else
            Users = JSON.parse(localStorage.getItem('Users'));

        let flag = 0;
        Users.forEach(User => {

            if (User.email == email.value) {

                if (password.value == User.password) {
                    flag = 1;
                    let user = new CURRUSER(User.email, User.name);
                    localStorage.setItem('currUser', JSON.stringify(user));
                    location.assign('starttest.html');
                }
                else {
                    flag = 1;
                    showError("Incorrect Password !!!");
                }
            }
        });

        if (flag == 0) {

            hidden.style.display = 'block';

        }
    }
}