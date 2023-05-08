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

function submit() {

    if (taskInput.value == "720") {
        let score = parseInt(localStorage.getItem('score'));
        let currtime = parseInt(localStorage.getItem('time'));
        score += 20;
        score += Math.floor(currtime / 60);
        score += (currtime % 60) / 100;

        localStorage.setItem('score', score);

        location.assign("question5.html");
    }
    else {
        let score = parseInt(localStorage.getItem('score'));
        score -= 5;
        localStorage.setItem('score', score);
        error.style.display = 'block';
    }
}

function skip() {
    location.assign("question5.html");
}
