const newName = document.querySelector('#newName');
const rnewName = document.querySelector('#rnewName');
const done = document.querySelector('#done');

let Users = JSON.parse(localStorage.getItem('Users'));
let currUser = JSON.parse(localStorage.getItem('currUser'));

function showError(msg) {

    error.textContent = msg;
    done.style.display = 'none';
    error.style.display = 'block';

}

function change() {

    if (newName.value == "")
        showError("Please enter name !!!");

    else if (rnewName.value == "")
        showError("Please re-enter name !!!");

    else if (newName.value != rnewName.value)
        showError("Name don't match !!!");

    else {
        Users.forEach(User => {

            if (User.email == currUser.email) {

                User.name = newName.value;
                localStorage.setItem('Users', JSON.stringify(Users));
            }
        });

        currUser.name = newName.value;
        localStorage.setItem('currUser', JSON.stringify(currUser));

        error.style.display = 'none';
        done.style.display = 'block';

    }
}
