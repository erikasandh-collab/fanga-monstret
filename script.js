const monster = document.getElementById("monster");
const scoreElement = document.getElementById("score");
const gameArea = document.getElementById("gameArea");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
let timeLeft = 15;  //hur många sekunder
let timerId;
let isPlaying = false;
let score = 0;
monster.addEventListener("click", () => {

    if (!isPlaying) {   //gör att man inte kan få poäng innan man startat /true
        return;
    }

    score++;  //öka 1 poäng
    scoreElement.textContent = score;  //uppdatera html element

    const maxX = Math.max(0, gameArea.clientWidth - monster.offsetWidth);  //spelrutansbredd i pixlar
    const maxY = Math.max(0, gameArea.clientHeight - monster.offsetHeight);  //monstret bredd i px

    const randomX = Math.random() * maxX;  //slumpmässiga decimaltal mellan 0-1.   1 ingår inte
    const randomY = Math.random() * maxY;

    monster.style.left = randomX + "px";  //flytta monster sidan
    monster.style.top = randomY + "px";   //flytta monster höjd

});


startBtn.addEventListener("click", () => {

    if (isPlaying) {   //kotrollerar att funktionen bara körs en gång
        return;
    }

    score = 0;
    timeLeft = 15;
    isPlaying = true;

    scoreElement.textContent = score;   //uppdatera html element
    timerElement.textContent = timeLeft;  //uppdatera html element

    timerId = setInterval(() => {

        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerId);   //stoppa tiden
            isPlaying = false;

            alert("Tiden är slut! Du fångade monstret " + score + " gånger!");   //visa ruta på sidan resultat
        }

    }, 1000);

});
