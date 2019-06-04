var results = 0;
var possibleCorrect = 12;
//variable to be incremented with each correct answer and varible containing the number of total questions

var answersArr = [];
//array that will contain user's answers to be checked against correctAnswer key:value

var correctAnswersArr = ["B","C","C","A","D","B","D","A","C","B","A","D"];
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
    },
    {
        question: "What movie did Sylvester Stallone win an Oscar for?",
        answers: {
            a: "Judge Dredd",
            b: "Don't Throw Momma From The Train",
            c: "Rocky",
            d: "The Expendables",
        },
    },
    {
        question: "Where was 'Dirty Harry' filmed?",
        answers: {
            a: "Milwaukee",
            b: "Miami",
            c: "San Francisco",
            d: "Los Angeles",
        },
    },
    {
        question: "When was the original 'Scarface' released?",
        answers: {
            a: "1932",
            b: "1983",
            c: "1938",
            d: "1949",
        },
    },
    {
        question: "Which wartime period was depicted in the classic film 'Gone With The Wind'?",
        answers: {
            a: "The American Revolutionary War",
            b: "The Mexican-American War",
            c: "The Cold War",
            d: "The American Civil War",
        },
    },
    {
        question: "Who was the first female director to win an Academy Award?",
        answers: {
            a: "Sofia Coppola",
            b: "Kathryn Bigelow",
            c: "Wanda Sykes",
            d: "J.K. Rowling",
        },
    },
    {
        question: "What was Arnold Schwarzenegger's highest grossing film?",
        answers: {
            a: "Hercules In New York",
            b: "True Lies",
            c: "Total Recall",
            d: "Terminator 2: Judgement Day",
        },
    },
    {
        question: "Which film won the Academy Award for Best Picture in 1973?",
        answers: {
            a: "The Godfather",
            b: "Dog Day Afternoon",
            c: "Caligula",
            d: "Boogie Nights",
        },
    },
    {
        question: "In this 1980's cerebral thriller James Woods makes love to a television set.",
        answers: {
            a: "Once Upon A Time In America",
            b: "San Salvador",
            c: "Videodrome",
            d: "My Girl",
        },
    },
    {
        question: "Which actor is famous for the line, 'Greed, for lack of a better word, is good.'?",
        answers: {
            a: "Donald J. Trump",
            b: "Michael Douglas",
            c: "Michael Caine",
            d: "Anthony Hopkins",
        },
    },
    {
        question: "What year was Forrest Gump released?",
        answers: {
            a: "1994",
            b: "1991",
            c: "1989",
            d: "1999",
        },
    },
    {
        question: "What is the highest-grossing film of all time?",
        answers: {
            a: "Star Wars: The Force Awakens",
            b: "Avengers: Endgame",
            c: "Titanic",
            d: "Avatar",
        },
    },
];
//Array of objects containing key: value pairs of: question key with a value containing a string phrased as a cinematic trivia question, answers key with the value of another object containing key:value pairs between a-d with values of answer options, and a third key containing the correct answer value as a string.
var interval;
//empty variable which will contain interval
var timer = 91;
//variable containing timer value which will decrement using setInterval
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
    //variable using JQuery to display decrementing timer
}
//

$("#questions-div").hide();
$("#gameOverMessage").hide();

function startGame() {
    interval = setInterval(countDown, 1000);
    //sets interval to count down from timer by one second at a time
    countDown();
    $("#questions-div").show();
    //displays questions
    $("#instructions").hide();
    //hides instructions jumbotron
}

$("#start").on("click", function() {
    startGame();
});
//on click the startGame function will be called



//declared a variable containing an integer
//declared a function which decrements timer variable by one, then created a conditional statement that checks if the timer variable is greater than 0, if so setTimeout will execute a decrement after one second. The value of the timer variable will then be displayed on the DOM at the #timer id using JQuery.

function questionDisplay() {
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

    $("#questionSeven").text(questionsArr[6].question);
    $("#questionSevenAnswers").append("<input type='radio' name='question7Answer' value='A'/>" + " " + questionsArr[6].answers.a + "<br>");
    $("#questionSevenAnswers").append("<input type='radio' name='question7Answer' value='B'/>" + " " + questionsArr[6].answers.b + "<br>");
    $("#questionSevenAnswers").append("<input type='radio' name='question7Answer' value='C'/>" + " " + questionsArr[6].answers.c + "<br>");
    $("#questionSevenAnswers").append("<input type='radio' name='question7Answer' value='D'/>" + " " + questionsArr[6].answers.d + "<br>");

    $("#questionEight").text(questionsArr[7].question);
    $("#questionEightAnswers").append("<input type='radio' name='question8Answer' value='A'/>" + " " + questionsArr[7].answers.a + "<br>");
    $("#questionEightAnswers").append("<input type='radio' name='question8Answer' value='B'/>" + " " + questionsArr[7].answers.b + "<br>");
    $("#questionEightAnswers").append("<input type='radio' name='question8Answer' value='C'/>" + " " + questionsArr[7].answers.c + "<br>");
    $("#questionEightAnswers").append("<input type='radio' name='question8Answer' value='D'/>" + " " + questionsArr[7].answers.d + "<br>");

    $("#questionNine").text(questionsArr[8].question);
    $("#questionNineAnswers").append("<input type='radio' name='question9Answer' value='A'/>" + " " + questionsArr[8].answers.a + "<br>");
    $("#questionNineAnswers").append("<input type='radio' name='question9Answer' value='B'/>" + " " + questionsArr[8].answers.b + "<br>");
    $("#questionNineAnswers").append("<input type='radio' name='question9Answer' value='C'/>" + " " + questionsArr[8].answers.c + "<br>");
    $("#questionNineAnswers").append("<input type='radio' name='question9Answer' value='D'/>" + " " + questionsArr[8].answers.d + "<br>");

    $("#questionTen").text(questionsArr[9].question);
    $("#questionTenAnswers").append("<input type='radio' name='question10Answer' value='A'/>" + " " + questionsArr[9].answers.a + "<br>");
    $("#questionTenAnswers").append("<input type='radio' name='question10Answer' value='B'/>" + " " + questionsArr[9].answers.b + "<br>");
    $("#questionTenAnswers").append("<input type='radio' name='question10Answer' value='C'/>" + " " + questionsArr[9].answers.c + "<br>");
    $("#questionTenAnswers").append("<input type='radio' name='question10Answer' value='D'/>" + " " + questionsArr[9].answers.d + "<br>");

    $("#questionEleven").text(questionsArr[10].question);
    $("#questionElevenAnswers").append("<input type='radio' name='question11Answer' value='A'/>" + " " + questionsArr[10].answers.a + "<br>");
    $("#questionElevenAnswers").append("<input type='radio' name='question11Answer' value='B'/>" + " " + questionsArr[10].answers.b + "<br>");
    $("#questionElevenAnswers").append("<input type='radio' name='question11Answer' value='C'/>" + " " + questionsArr[10].answers.c + "<br>");
    $("#questionElevenAnswers").append("<input type='radio' name='question11Answer' value='D'/>" + " " + questionsArr[10].answers.d + "<br>");

    $("#questionTwelve").text(questionsArr[11].question);
    $("#questionTwelveAnswers").append("<input type='radio' name='question12Answer' value='A'/>" + " " + questionsArr[11].answers.a + "<br>");
    $("#questionTwelveAnswers").append("<input type='radio' name='question12Answer' value='B'/>" + " " + questionsArr[11].answers.b + "<br>");
    $("#questionTwelveAnswers").append("<input type='radio' name='question12Answer' value='C'/>" + " " + questionsArr[11].answers.c + "<br>");
    $("#questionTwelveAnswers").append("<input type='radio' name='question12Answer' value='D'/>" + " " + questionsArr[11].answers.d + "<br>");
};
questionDisplay();
//function call that displays question text to card deck/DOM


$("#submit").on("click", function() {
    var qOne = $('input[name=question1Answer]:checked').val(); 
    //on-click listener that assigns the value of each radio to a variable
    var qTwo = $('input[name=question2Answer]:checked').val(); 
    var qThree = $('input[name=question3Answer]:checked').val(); 
    var qFour = $('input[name=question4Answer]:checked').val(); 
    var qFive = $('input[name=question5Answer]:checked').val(); 
    var qSix = $('input[name=question6Answer]:checked').val(); 
    var qSeven = $('input[name=question7Answer]:checked').val();
    var qEight = $('input[name=question8Answer]:checked').val();
    var qNine = $('input[name=question9Answer]:checked').val();
    var qTen = $('input[name=question10Answer]:checked').val();
    var qEleven = $('input[name=question11Answer]:checked').val();
    var qTwelve = $('input[name=question12Answer]:checked').val();
    clearInterval(interval);
    $("#questions-div").hide();
    $("#gameOverMessage").show();
    //submit button clears the interval
    answersArr = [qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen,qEleven,qTwelve];
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
    var qSeven = $('input[name=question7Answer]:checked').val();
    var qEight = $('input[name=question8Answer]:checked').val();
    var qNine = $('input[name=question9Answer]:checked').val();
    var qTen = $('input[name=question10Answer]:checked').val();
    var qEleven = $('input[name=question11Answer]:checked').val();
    var qTwelve = $('input[name=question12Answer]:checked').val();
    //assigns variables containing radio value
    answersArr = [qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen,qEleven,qTwelve];
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


$("#restart").on("click", function() {
//on click listener attached to restart button div
    var qOne = $('input[name=question1Answer]').prop('checked',false);
    var qTwo = $('input[name=question2Answer]').prop('checked',false);
    var qThree = $('input[name=question3Answer]').prop('checked',false);
    var qFour = $('input[name=question4Answer]').prop('checked',false);
    var qFive = $('input[name=question5Answer]').prop('checked',false);
    var qSix = $('input[name=question6Answer]').prop('checked',false);
    var qSeven = $('input[name=question7Answer]').prop('checked',false);
    var qEight = $('input[name=question8Answer]').prop('checked',false);
    var qNine = $('input[name=question9Answer]').prop('checked',false);
    var qTen = $('input[name=question10Answer]').prop('checked',false);
    var qEleven = $('input[name=question11Answer]').prop('checked',false);
    var qTwelve = $('input[name=question12Answer]').prop('checked',false);
    //series of variable reassignments that removes checks from radios when game is restarted
    $("#gameOverMessage").hide();
    $("#results").empty();
    $("#questions-div").show();
    timer = 91;
    //resets game clock to original value
    results = 0;
    //resets results variable to original value
    countDown();
    //restarts countdown
    interval = setInterval(countDown, 1000);
    //decrements timer variable at intervals of one second
}); 
    
