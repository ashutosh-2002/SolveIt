const taskInput = document.querySelector("#task");
const time = document.querySelector("#time");

setInterval(fun, 1000);

function fun() {

    let currtime = parseInt(localStorage.getItem('time'));
    let t = Math.floor(currtime / 60) + ' : ';
    if (currtime % 60 < 10)
        t += '0';
    t += currtime % 60;

    time.textContent = "Time Remaining  =>  " + t;

    currtime--;

    if (currtime == 0) {
        location.assign("result.html");
    }
    localStorage.setItem('time', currtime);
}

function addState() {

    if (taskInput.value == "a1") {
        let score = parseInt(localStorage.getItem('score'));
        score += 10;
        localStorage.setItem('score', score);

        location.assign("result.html");
    }
}