const email = document.querySelector('#email');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const hidden = document.querySelector('#hidden');


function SignIn() {

    if (email.value == 'admin' && password.value == '12345') {
        location.assign('admin.html');
    }

}