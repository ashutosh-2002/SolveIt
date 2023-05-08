const sholder = document.querySelector('#score');

let t = localStorage.getItem('score');
sholder.textContent = localStorage.getItem('score');

class userScore {
    constructor(email, name, score) {
        this.email = email;
        this.name = name;
        this.score = score;
    }
}

let scoreList = JSON.parse(localStorage.getItem('scoreList'));

if (scoreList === null)
    scoreList = [];

let currUser = JSON.parse(localStorage.getItem('currUser'));
let newScore = new userScore(currUser.email, currUser.name, t);
scoreList.push(newScore);

localStorage.setItem('scoreList', JSON.stringify(scoreList));



let latestScore = JSON.parse(localStorage.getItem('latestScore'));

if (latestScore === null)
    latestScore = [];

let f1 = 0;
latestScore.forEach(score => {

    if (score.email == currUser.email) {
        f1 = 1;
        score.score = t;
    }

});

if (f1 == 0) {
    console.log('fff');
    latestScore.push(newScore);
}

localStorage.setItem('latestScore', JSON.stringify(latestScore));




let highestScore = JSON.parse(localStorage.getItem('highestScore'));

if (highestScore === null)
    highestScore = [];

let f2 = 0;
highestScore.forEach(score => {

    if (score.email == currUser.email) {
        f1 = 1;
    
        if (score.score < t)
            score.score = t;
    }

});

if (f2 == 0) {
    highestScore.push(newScore);
}

localStorage.setItem('highestScore', JSON.stringify(highestScore));
