


$(document).ready(function() {
    $("#start-button").click(function() {
	var counter = 60;
    
    setInterval (function() {
    counter--;
      
        if (counter >= 0) {
         span = document.getElementById("show-number");
         span.innerHTML = counter;
        }
        if (counter === 0) {
         alert('Awww bummer, out of time. Whomp whomp.');
         clearInterval(counter);
        }}, 1000);
	
	});
});

var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var myQuestions = document.getElementsByClassNames('questions')



// to do: 
// identify wrong and right answer for each question
// have the timer stop at the end when "submit answers" button is clicked
// have javascript identify all right and wrong answers after submit answers is clicked
// display final score at the end
// the reset button needs to start everything back to the beginning
