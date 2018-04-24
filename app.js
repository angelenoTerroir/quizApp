// STATE
var state = {
  quiz = [
	    {
	        question: "What year was the Rubik\'s Cube invented?",
	        answers: [
	            '1904',
	            '1974',
	            '1962',
	            '1989'
	        ],
	        correctAnswer: '1'
	    },
	    {
	        question: "What was the original name of the Rubik\'s Cube?",
	        answers: [
	            'Rubik\'s Revenge',
	            'Impossible Cube',
	            'Rubik\'s Puzzle',
	            'Magic Cube'
	        ],
	        correctAnswer: '3'
	    },
	    {
	        question: "What subject did the inventor of the Rubik\'s Cube teach?",
	        answers: [
	            'Geometry',
	       		'Philosophy',
	            'Arcitechture',
	            'Industrial Design'
	        ],
	        correctAnswer: '2'
	    },
	    {
	        question: "How long did it take Rubik to solve his own invention the first time?",
	        answers: [
	            'about Two minutes',
	            'more than one year',
	            'less than one hour',
	            'more than one month'
	        ],
	        correctAnswer: '3'
	    },
	    {
	        question: "How many Rubik\'s Cubes have been sold worldwide?",
	        answers: [
	            '350 million',
	            'over 1 billion',
	            '260,000',
	            '28 million'
	        ],
	        correctAnswer: '0'
	    },
	    {
	        question: "What year were the first International Rubik\'s Championships?",
	        answers: [
	            '1989',
	            '1982',
	            '1997',
	            '2002'
	        ],
	        correctAnswer: '1'
	    },
	    {
	        question: "How many possible configurations does a Rubik\'s Cube have?",
	        answers: [
	            '43,252,003,274,489,856,000',
	            '234,500',
	            '8,964,983,000',
	            '390'
	        ],
	        correctAnswer: '0'
	    },
	    {
	        question: "What is the world record for the fastest Rubik\'s Cube solve time by a human?",
	        answers: [
	            '22.65 seconds',
	            '12.98 seconds',
	            '4.59 seconds',
	            '7.32 seconds'
	        ],
	        correctAnswer: '2'
	    },
	        {
	        question: "How many moves does it take to solve a Rubik\'s Cube?",
	        answers: [
	            '140',
	            'about 60',
	            '45',
	            'less than 20'
	        ],
	        correctAnswer: '3'
	    },
	    {
	        question: "What book about solving Rubik's Cubes sold 1.5 million copies?",
	        answers: [
	            'How to Solve a Rubik\'s Cube',
	            'Rubik\'s Cube Revealed',
	            'You Can Do the Cube', 
	            'The Magic Cube: Algorithms and the White Cross Method'
	        ],
	        correctAnswer: '2'
	    },
	],
	winner : [
	    "You got it right! Are you a genius or something?",
	    "You answered correctly! Give yourself a pat on the back.",
	    "Correct! That was super impressive.",
	    "Nice! That was a lucky guess!",
	    "Your answer is correct!  Don't toot your own horn too loud, your neighbors might hear.",
	    "Solid answer. You should do this professionally.",
	    "Is it smokey in here? Because you're on fire!",
	    "Seriously. Great job.",
	    "You didn't cheat on that question did you?  Becaues oyu got it right!",
	    "That's right. Nice job."
	    "Congratulations, you know a useless fact."
	    "I'm pretty sure you guessed on that one, but you got it correct, so..."
	    "Amazing! 10 points to Gryffindor!"
	    "Outstanding answer. Way to go!"
	    "Believe it or not, that's true!"

	],
	loser : [
	    "You got it wrong.  What a shame.",
	    "Wrong. Can't you do anything right?",
	    "Incorrect. This is pretty disappointing.",
	    "That's not right. That's wrong. Very wrong.",
	    "Sorry. This question obviously had you stumped.",
	    "I'd be lying if I told you your answer was correct. Sorry.",
	    "Nope. Sorry.",
	    "That's incorrect. Today is not your day.",
	    "Are you even trying?",
	    "What kind of answer was that?",
	    "That's not right. This is just embarassing.",
	    "Not even close. What were you thinking?",
	    "Better luck next time.",
	    "Not a great choice.",
	    "Try harder next time.",
	    'In the words of Dwight Schrute... "False."',
	    "That's not right."
	],

	score: 0,
	currentQuestionIndex: 0,
	//route: 'start',
	lastAnswerCorrect: false,
	feedbackRandom: 0
}


// STATE MODIFICATION

function nextScreen(){
	var removeCurrent = document.getElementsByClass('start-game');
	var containerCurrent = removeCurrent.parentnode;
	containerCurrent.removeParent(removeCurrent);
}
/*

$('.start-game').click(startGame(start));






/*
function setRoute(state, route) {
  state.route = route;
};

function resetGame(state) {
  state.score = 0;
  state.currentQuestionIndex = 0;
  setRoute(state, 'start');
};

function answerQuestion(state, answer) {
  var currentQuestion = state.quiz[state.currentQuestionIndex];
  state.lastAnswerCorrect = currentQuestion.correctAnswer === answer;
  if (state.lastAnswerCorrect) {
    state.score++;
  }
  selectFeedback(state);
  setRoute(state, 'answer-feedback');
};

function selectFeedback(state) {
  state.feedbackRandom = Math.random();
};

function advance(state) {
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex === state.quiz.length) {
    setRoute(state, 'final-feedback');
  }
  else {
    setRoute(state, 'question');
  }
};




// RENDERING

function renderApp(state, elements) {

  Object.keys(elements).forEach(function(route) {
    elements[route].hide();
  });
  elements[state.route].show();

  if (state.route === 'start') {
      renderStartPage(state, elements[state.route]);
  }
  else if (state.route === 'question') {
      renderQuestionPage(state, elements[state.route]);
  }
  else if (state.route === 'answer-feedback') {
    renderAnswerFeedbackPage(state, elements[state.route]);
  }
  else if (state.route === 'final-feedback') {
    renderFinalFeedbackPage(state, elements[state.route]);
  }
};

function renderStartPage(state, element) {
};

function renderQuestionPage(state, element) {
  renderQuestionCount(state, element.find('.question-count'));
  renderQuestionText(state, element.find('.question-text'));
  renderChoices(state, element.find('.answers'));
};

function renderAnswerFeedbackPage(state, element) {
  renderAnswerFeedbackHeader(state, element.find(".feedback-title"));
  renderAnswerFeedbackText(state, element.find(".feedback-text"));
  renderNextButtonText(state, element.find(".next"));
};

function renderFinalFeedbackPage(state, element) {
  renderFinalFeedbackText(state, element.find('.final-score'));
};

function renderQuestionCount(state, element) {
  var question = (state.currentQuestionIndex + 1) + "/" + state.quiz.length;
  element.text(question);
};

function renderQuestionText(state, element) {
  var currentQuestion = state.quiz[state.currentQuestionIndex];
  element.text(currentQuestion.text);
};

function renderChoices(state, element) {
  var currentQuestion = state.quiz[state.currentQuestionIndex];
  var answers = currentQuestion.answers.map(function(choice, index) {
    return (
      '<li>' +
        '<input type="radio" name="user-answer" value="' + index + '" required>' +
        '<label>' + choice + '</label>' +
      '</li>'
    );
  });
  element.html(answers);
};

function renderAnswerFeedbackHeader(state, element) {
  var html = state.lastAnswerCorrect ?
      "<h2 class='right-answer'>Correct!</h2>" :
      "<h2 class='wrong-answer'>Wrong!</>";

  element.html(html);
};

function renderAnswerFeedbackText(state, element) {
  var answers = state.lastAnswerCorrect ? state.winner : state.loser;
  var question = answers[Math.floor(state.feedbackRandom * answers.length)];
  element.text(question);
};

function renderNextButtonText(state, element) {
    var question = state.currentQuestionIndex < state.quiz.length - 1 ?
      "Next" : "Final Score";
  element.text(question);
};

function renderFinalFeedbackText(state, element) {
  var question = "You got " + state.score + " out of " +
    state.quiz.length + " questions right.";
  element.text(question);
};




// EVENT LISTENERS

var PAGE_ELEMENTS = {
  'start': $('landing-page'),
  'question': $('quiz-page'),
  'answer-feedback': $('answer-page'),
  'feedback': $('results-page')
};

$("form[name='begin']").submit(function(event) {
  event.preventDefault();
  setRoute(state, 'question');
  renderApp(state, PAGE_ELEMENTS);
});

$(".restart").click(function(event){
  event.preventDefault();
  resetGame(state);
  renderApp(state, PAGE_ELEMENTS);
});

$("form[name='current-question']").submit(function(event) {
  event.preventDefault();
  var answer = $("input[name='user-answer']:checked").val();
  answer = parseInt(answer, 10);
  answerQuestion(state, answer);
  renderApp(state, PAGE_ELEMENTS);
});

$(".next").click(function(event) {
  advance(state);
  renderApp(state, PAGE_ELEMENTS);
});

$(function() { renderApp(state, PAGE_ELEMENTS); });