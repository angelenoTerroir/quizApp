 var myQuestions = [
    {
        question: "What year was the Rubik\'s Cube invented?",
        answers: {
            a: '1904',
            b: '1974',
            c: '1962',
            d: '1989'
        },
        correctAnswer: 'b'
    },
    {
        question: "What was the original name of the Rubik\'s Cube?",
        answers: {
            a: 'Rubik\'s Revenge',
            b: 'Impossible Cube',
            c: 'Rubik\'s Puzzle',
            d: 'Magic Cube'
        },
        correctAnswer: 'd'
    },
    {
        question: "What subject did the inventor of the Rubik\'s Cube teach?",
        answers: {
            a: 'Geometry',
            b: 'Philosophy',
            c: 'Arcitechture',
            d: 'Industrial Design'
        },
        correctAnswer: 'c'
    },
    {
        question: "How long did it take Rubik to solve his own invention the first time?",
        answers: {
            a: 'about Two minutes',
            b: 'more than one year',
            c: 'less than one hour',
            d: 'more than one month'
        },
        correctAnswer: 'd'
    },
    {
        question: "How many Rubik\'s Cubes have been sold Worldwide?",
        answers: {
            a: '350 million',
            b: 'over 1 billion',
            c: '260,000',
            d: '28 million'
        },
        correctAnswer: 'a'
    },
    {
        question: "What year were the first International Rubik\'s Championships?",
        answers: {
            a: '1989',
            b: '1982',
            c: '1997',
            d: '2002'
        },
        correctAnswer: 'b'
    },
    {
        question: "How many possible configurations does a Rubik\'s Cube have?",
        answers: {
            a: '43,252,003,274,489,856,000',
            b: '234,500',
            c: '8,964,983,000',
            d: '390'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the world record for the fastest Rubik\'s Cube solve time by a human?",
        answers: {
            a: '22.65 seconds',
            b: '12.98 seconds',
            c: '4.59 seconds',
            d: '7.32 seconds'
        },
        correctAnswer: 'c'
    },
        {
        question: "How many moves does it take to solve a Rubik\'s Cube?",
        answers: {
            a: '140',
            b: 'about 60',
            c: '45',
            d: 'less than 20'
        },
        correctAnswer: 'd'
    },
    {
        question: "What book about solving Rubik's Cubes sold 1.5 million copies?",
        answers: {
            a: 'How to Solve a Rubik\'s Cube',
            b: 'Rubik\'s Cube Revealed',
            c: 'You Can Do the Cube', 
            d: 'The Magic Cube: Algorithms and the White Cross Method'
        },
        correctAnswer: 'c'
    },





];

var startButton = document.getElementById('start-message')
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'

                    	//how do I add space?
                    	+ "	"
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}