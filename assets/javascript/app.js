var results = 0;
var possibleCorrect = 6;
//variable to be incremented with each correct answer and varible containing the number of total questions

var answersArr = [];
//array that will contain user's answers to be checked against correctAnswer key:value

var correctAnswersArr = ["B","C","C","A","D","B"];
//array containing the correct answer values as strings

var questionsArr = [
    {
        question: "Who directed the sci-fi classic 'Alien'?",
        answers: {
            a: "James Cameron",
            b: "Ridley Scott",
            c: "Steven Speilberg",
            d: "Wes Craven",
        },
        correctAnswer: "b",
    },
    {
        question: "What movie did Sylvester Stallone win an Oscar for?",
        answers: {
            a: "Judge Dredd",
            b: "Don't Throw Momma From The Train",
            c: "Rocky",
            d: "The Expendables",
        },
        correctAnswer: "c",
    },
    {
        question: "Where was 'Dirty Harry' filmed?",
        answers: {
            a: "Milwaukee",
            b: "Miami",
            c: "San Francisco",
            d: "Los Angeles",
        },
        correctAnswer: "c",
    },
    {
        question: "When was the original 'Scarface' released?",
        answers: {
            a: "1932",
            b: "1983",
            c: "1938",
            d: "1949",
        },
        correctAnswer: "a",
    },
    {
        question: "Which wartime period was depicted in the classic film 'Gone With The Wind'?",
        answers: {
            a: "The American Revolutionary War",
            b: "The Mexican-American War",
            c: "The Cold War",
            d: "The American Civil War",
        },
        correctAnswer: "d",
    },
    {
        question: "Who was the first female director to win an Academy Award?",
        answers: {
            a: "Sofia Coppola",
            b: "Kathryn Bigelow",
            c: "Wanda Sykes",
            d: "J.K. Rowling",
        },
        correctAnswer: "b",

    },
];
//Array of objects containing key: value pairs of: question key with a value containing a string phrased as a cinematic trivia question, answers key with the value of another object containing key:value pairs between a-d with values of answer options, and a third key containing the correct answer value as a string.
var interval;
var timer = 20;
function countDown() {
    timer--;
    if (timer > 0) {
        $("#gameOverMessage").hide();
    } else {
        $("#questions-div").hide();
        $("#gameOverMessage").show();
        clearInterval(interval);
        timesUp();
    }
    var timerDisplay = $("#timer").text(timer);
}
interval = setInterval(countDown, 1000);

//declared a variable containing an integer
//declared a function which decrements timer variable by one, then created a conditional statement that checks if the timer variable is greater than 0, if so setTimeout will execute a decrement after one second. The value of the timer variable will then be displayed on the DOM at the #timer id using JQuery.


$("#questionOne").text(questionsArr[0].question);
//utilizes JQuery to display question to the DOM on associated div utilizing .text
$("#questionOneAnswers").append("<input type='radio' name='question1Answer' value='A'/>" + " " + questionsArr[0].answers.a + "<br>");
//utilizes JQuery to append a radio concatenated with the array index for each question key value
$("#questionOneAnswers").append("<input type='radio' name='question1Answer' value='B'/>" + " " + questionsArr[0].answers.b + "<br>");
$("#questionOneAnswers").append("<input type='radio' name='question1Answer' value='C'/>" + " " + questionsArr[0].answers.c + "<br>");
$("#questionOneAnswers").append("<input type='radio' name='question1Answer' value='D'/>" + " " + questionsArr[0].answers.d + "<br>");

$("#questionTwo").text(questionsArr[1].question);
$("#questionTwoAnswers").append("<input type='radio' name='question2Answer' value='A'/>" + " " + questionsArr[1].answers.a + "<br>");
$("#questionTwoAnswers").append("<input type='radio' name='question2Answer' value='B'/>" + " " + questionsArr[1].answers.b + "<br>");
$("#questionTwoAnswers").append("<input type='radio' name='question2Answer' value='C'/>" + " " + questionsArr[1].answers.c + "<br>");
$("#questionTwoAnswers").append("<input type='radio' name='question2Answer' value='D'/>" + " " + questionsArr[1].answers.d + "<br>");

$("#questionThree").text(questionsArr[2].question);
$("#questionThreeAnswers").append("<input type='radio' name='question3Answer' value='A'/>" + " " + questionsArr[2].answers.a + "<br>");
$("#questionThreeAnswers").append("<input type='radio' name='question3Answer' value='B'/>" + " " + questionsArr[2].answers.b + "<br>");
$("#questionThreeAnswers").append("<input type='radio' name='question3Answer' value='C'/>" + " " + questionsArr[2].answers.c + "<br>");
$("#questionThreeAnswers").append("<input type='radio' name='question3Answer' value='D'/>" + " " + questionsArr[2].answers.d + "<br>");

$("#questionFour").text(questionsArr[3].question);
$("#questionFourAnswers").append("<input type='radio' name='question4Answer' value='A'/>" + " " + questionsArr[3].answers.a + "<br>");
$("#questionFourAnswers").append("<input type='radio' name='question4Answer' value='B'/>" + " " + questionsArr[3].answers.b + "<br>");
$("#questionFourAnswers").append("<input type='radio' name='question4Answer' value='C'/>" + " " + questionsArr[3].answers.c + "<br>");
$("#questionFourAnswers").append("<input type='radio' name='question4Answer' value='D'/>" + " " + questionsArr[3].answers.d + "<br>");

$("#questionFive").text(questionsArr[4].question);
$("#questionFiveAnswers").append("<input type='radio' name='question5Answer' value='A'/>" + " " + questionsArr[4].answers.a + "<br>");
$("#questionFiveAnswers").append("<input type='radio' name='question5Answer' value='B'/>" + " " + questionsArr[4].answers.b + "<br>");
$("#questionFiveAnswers").append("<input type='radio' name='question5Answer' value='C'/>" + " " + questionsArr[4].answers.c + "<br>");
$("#questionFiveAnswers").append("<input type='radio' name='question5Answer' value='D'/>" + " " + questionsArr[4].answers.d + "<br>");

$("#questionSix").text(questionsArr[5].question);
$("#questionSixAnswers").append("<input type='radio' name='question6Answer' value='A'/>" + " " + questionsArr[5].answers.a + "<br>");
$("#questionSixAnswers").append("<input type='radio' name='question6Answer' value='B'/>" + " " + questionsArr[5].answers.b + "<br>");
$("#questionSixAnswers").append("<input type='radio' name='question6Answer' value='C'/>" + " " + questionsArr[5].answers.c + "<br>");
$("#questionSixAnswers").append("<input type='radio' name='question6Answer' value='D'/>" + " " + questionsArr[5].answers.d + "<br>");


$("#submit").on("click", function() {
    var qOne = $('input[name=question1Answer]:checked').val(); 
    //on-click listener that assigns the value of each radio to a variable
    var qTwo = $('input[name=question2Answer]:checked').val(); 
    var qThree = $('input[name=question3Answer]:checked').val(); 
    var qFour = $('input[name=question4Answer]:checked').val(); 
    var qFive = $('input[name=question5Answer]:checked').val(); 
    var qSix = $('input[name=question6Answer]:checked').val(); 
    clearInterval(interval);
    //submit button clears the interval
    answersArr = [qOne,qTwo,qThree,qFour,qFive,qSix];
    //radio answers are saved to answersArr
    for (var i = 0; i < answersArr.length; i++) {
        //iterates through answersArr and checks radio value variables against correctAnswersArr at index i
        if (answersArr[i] === correctAnswersArr[i]) {
            results++;
            //increments results variable for each correct answer 
        }
    }
    $("#results").text("You got " + results + " correct out of " + possibleCorrect);
    //displays text in results div
});

function timesUp() {
    //function that takes values of radio selections using JQuery
    var qOne = $('input[name=question1Answer]:checked').val(); 
    var qTwo = $('input[name=question2Answer]:checked').val(); 
    var qThree = $('input[name=question3Answer]:checked').val(); 
    var qFour = $('input[name=question4Answer]:checked').val(); 
    var qFive = $('input[name=question5Answer]:checked').val(); 
    var qSix = $('input[name=question6Answer]:checked').val();
    //assigns variables containing radio value
    answersArr = [qOne,qTwo,qThree,qFour,qFive,qSix];
    //assigns variables to answersArr
    for (var i = 0; i < answersArr.length; i++) {
        //iterates through answersArr and compares responses to correctAnswersArr
        if (answersArr[i] === correctAnswersArr[i]) {
            results++;
            //increments results variable for each correct answer
        }
    }
    $("#results").text("You got " + results + " correct out of " + possibleCorrect);
    //displays total correct out of possible correct to results div
};