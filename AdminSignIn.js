const email = document.querySelector('#email');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const hidden = document.querySelector('#hidden');
const error = document.querySelector('#error');

function showError(msg) {

    error.textContent = msg;
    error.style.display = 'block';

}

function SignIn() {

    if (email.value == "")
        showError("Please enter Email Id !!!");

    else if (password.value == "")
        showError("Please enter Password !!!");

    else if (email.value == 'admin@gmail.com' && password.value == '12345') {
        location.assign('admin.html');
    }

    else
        showError("Incorrect Email Id or Password !!!");

}
