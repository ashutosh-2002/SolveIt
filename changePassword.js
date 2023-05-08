const newPass = document.querySelector('#newPass');
const rnewPass = document.querySelector('#rnewPass');
const done = document.querySelector('#done');

let Users = JSON.parse(localStorage.getItem('Users'));
let currUser = JSON.parse(localStorage.getItem('currUser'));

function showError(msg) {

    error.textContent = msg;
    done.style.display = 'none';
    error.style.display = 'block';

}

function change() {

    if (newPass.value == "")
        showError("Please enter password !!!");

    else if (rnewPass.value == "")
        showError("Please re-enter password !!!");

    else if (newPass.value != rnewPass.value)
        showError("Password don't match !!!");

    else {
        Users.forEach(User => {

            if (User.email == currUser.email) {

                User.password = newPass.value;
                localStorage.setItem('Users', JSON.stringify(Users));
            }
        });

        error.style.display = 'none';
        done.style.display = 'block';
    }
}
