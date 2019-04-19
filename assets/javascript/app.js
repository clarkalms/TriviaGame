$(document).ready(function () {

    // Global variables
    var q1 = "Question 1"
    var q2 = "Question 2"
    var q3 = "Question 3"
    var q4 = "Question 4"
    var correct = 0;
    var incorrect = 0;
    var totalScore = "HI";
    var timerRunning = false;
    var intervalId;
    var time = 10;
    var timerDiv = $("#timer");
    var box = $("#info-box");
    timerDiv.text("Time left: 00:" + time);

    // Start game function
    function startGame() {
        $('#info-box').append('<button>');
        var playButton = $('button').attr('id', 'play');
        playButton.text("Play");
        playBtn();
        
    };

    // Play button - calling countdown function and trivia maker function
    function playBtn(){
        $('#play').on("click", function () {
            countdown();
            triviaMaker();
            if ($('#question-1')){
                $('#question-1').text(q1);
            } if ($('#question-2')){
                $('#question-2').text(q2);
            } if ($('#question-3')){
                $('#question-3').text(q3);
            } if ($('#question-4')){
                $('#question-4').text(q4);
            }
        });
    };

    // Create radio buttons/questions function
    function triviaMaker() {
        for (i = 1; i < 5; i++) {
            var paraMaker = $('<p>').attr('id', 'question-' + i);
            paraMaker.text("hello" + i)
            paraMaker.appendTo('#info-box');

            for (j = 1; j < 5; j++) {
                var radioBtn = $('<input>').attr("type", "radio").attr("name", "rbtnCount").attr("id", "answer-" + j);
                radioBtn.appendTo('#info-box');
            }
        };
    };

    // Start Timer
    function countdown() {
        if (!timerRunning) {
        intervalId = setInterval(countdown, 1000);
        timerRunning = true;
        }
        console.log(time);
        timerDiv.text("Time left: 00:" + time);
        time--;
      if (time == -1) {
        userDone();
      };
    };

    // Game finished
    function userDone(){
        clearInterval(intervalId);
        timerRunning = false;
        displayScore();
    };
    // Display score
    function displayScore(){
        timerDiv.text("TIME IS UP!");
        box.empty();
        box.text("Your score: " + totalScore);
        restart();

        
    };
    // Restart Game
    function restart(){
        $('#info-box').append('<button>');
        var restartButton = $('button').attr('id', 'try-again');
        restartButton.text("Try Again!");
        $('#try-again').on('click', function(){
            time = 10;
            timerDiv.text("Time left: 00:" + time);
            box.empty();
            startGame();
        });
    };

    // Run functions
    startGame();

});
