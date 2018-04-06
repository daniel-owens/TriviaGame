var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
//prevent game from starting twice
var gamedidnotstart = false;
//prevent user from trolling and pushing submit multiple times.
var gameEnded = false;
var keeptrackoftimer;

$(document).ready(function () {
    $("#quiz").hide();
    window.scrollTo(0, 500);
    $("#start-button").on("click", function () {
        if (!gamedidnotstart) {
            $("#quiz").show();
            startCountdown();
            gamedidnotstart = true;
        }
        return;
    });

    $("#submit").on("click", function () {
        if (!gameEnded) {
            gameEnded = true
            clearInterval(keeptrackoftimer)
            timeUp()
        }
    });
});

function countdown() {
    count--;

    $('#show-number').html(count + " Seconds");
    if (count <= 0) {
        clearInterval(keeptrackoftimer)
        alert("Time's up! Whomp whomp!3");
        timeUp()
    }
}

function timeUp() {
    clearInterval(keeptrackoftimer)
    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();

    if (Q1 === undefined) {
        unansweredCount++;
    }
    //Me setting 'Q1' is super bad practice, but I had to do it since the answers did not have unique ID.
    else if (Q1 === 'b') {
        correctCount++;
    }
    else {
        wrongCount++;
    }

    if (Q2 == undefined) {
        unansweredCount++;
    }
    else if (Q2 == 'c') {
        correctCount++;
    }
    else {
        wrongCount++;
    }

    if (Q3 == undefined) {
        unansweredCount++;
    }
    else if (Q3 == 'd') {
        correctCount++;
    }
    else {
        wrongCount++;
    }

    if (Q4 == undefined) {
        unansweredCount++;
    }
    else if (Q4 == 'd') {
        correctCount++;
    }
    else {
        wrongCount++;
    }

    if (Q5 == undefined) {
        unansweredCount++;
    }
    else if (Q5 == 'a') {
        correctCount++;
    }
    else {
        wrongCount++;
    }

    $('#correct-answers').html(correctCount);
    $('#wrong-answers').html(wrongCount);
    $('#unanswered').html(unansweredCount);

}

function startCountdown() {
    clearInterval(keeptrackoftimer)
    keeptrackoftimer = setInterval(countdown, 1000);
}