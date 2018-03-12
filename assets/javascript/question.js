  var panel = $("#quiz-area");

	var questions = [{
            question: "Where was Friends recorded?",
            answers: ["New York", "Ohio", "Chicago", "California"],
            correctAnswer: "New York"
        }, {
            question: "Which of these two characters dated?",
            answers: ["Rachel and Ross", "Joey and Phoebe", "Rachel and Chandler", "Ross and Monica"],
            correctAnswer: "Rachel and Ross"
        }, {
            question: "Which character said, 'WE WERE ON A BREAK!'?",
            answers: ["Chandler", "Joey", "Ross", "Rachel"],
            correctAnswer: "Ross"
        }, {
            question: "Which character got stung by a jellyfish?",
            answers: ["Rachel", "Joey",  "Monica", "Chandler"],
            correctAnswer: "Monica"
        }, {
            question: "Which character wrote the song Smelly Cat?",
            answers: ["Monica", "Ross", "Chandler", "Phoebe",],
            correctAnswer: "Phoebe"
         }];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});
	 
