

var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function(){

    $("#quiz").hide();
    
    window.scrollTo(0, 500);

    $("#start-button").on("click", function(){
     
        $("#quiz").show();

        startCountdown();
        return;

    });

    function countdown(){
      
        count--;

        $('#show-number').html(count + " Seconds");

            $("#submit").on("click", function(){

            clearInterval(count)

            });

            if (count === 0){
              
                alert("Time's up! Whomp whomp!3");

                $("#quiz").hide();

            }

    }

    function startCountdown(){

        setInterval(countdown, 1000);

    }

    function timeUp(){

        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
       

        if(Q1 === undefined){
            unansweredCount++;
        }
        else if(Q1 === "#correct-answer"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        if(Q2 == undefined){
            unansweredCount++;
        }
        else if(Q2 == "#correct-answer"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        if(Q3 == undefined){
            unansweredCount++;
        }
        else if(Q3 == "#correct-answer"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        if(Q4 == undefined){
            unansweredCount++;
        }
        else if(Q4 == "#correct-answer"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        if(Q5 == undefined){
            unansweredCount++;
        }
        else if(Q5 == "#correct-answer"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        $('#correct-answers').html(correctCount);
        $('#wrong-answers').html(wrongCount);
        $('#unanswered').html(unansweredCount);
       
       

    }

});





