const startButton = document.getElementById('Start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement =  document.getElementById('question-container')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions  = questions.sort(() => Math.random() - .5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}


function setNextQuestion(){
    resetstate()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer=>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct  = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetstate(){
    clearstatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setstatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setstatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')        
    }else{
        startButton.innerText='Restart';
        startButton.classList.remove('hide');
    }
}
function setstatusClass(element, correct) {
    clearstatusClass(element)
    if (correct) {
        element.classList.add('correct');        
    } else{
        element.classList.add('wrong');
    }
}
function clearstatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question:'what is 2 + 2   ?',
        answers:[
            {text:'4',correct: true},
            {text:'22',correct: false},
        ]
    },
    {
        question:'what is 4 * 2   ?',
        answers:[
            {text:'6',correct: false},
            {text:'8',correct: true},
        ]
    },
    {
        question:'who is the best Avenger   ?',
        answers:[
            {text:'Thor',correct: true},
            {text:'Iron man',correct: false},
            {text:'Captain America',correct: false},
            {text:'Doctor Strange',correct: false},
        ]
    },
    {
        question:'who is the Richest person on Earth   ?',
        answers:[
            {text:'Jeff Bezos',correct: false},
            {text:'Elon Mask',correct: true},
            {text:'Bill Gates',correct: false},
            {text:'Mark Zuckerberg',correct: false},
        ]
    },
    {
        question:'who is the Richest Youtuber   ?',
        answers:[
            {text:'Mr Beast',correct: false},
            {text:'Furious Fade',correct: false},
            {text:'Will Smith',correct: false},
            {text:'Jeffery Star',correct: true},
        ]
    },
    {
        question:'what is the Most  Subscribed Youtube Channel   ?',
        answers:[
            {text:'Mr Beast',correct: true},
            {text:'Cocomelon',correct: false},
            {text:'T-series',correct: false},
            {text:'Afrimax Tv',correct: false},
        ]
    },
    {
        question:'which NBA player has the Most Rings   ?',
        answers:[
            {text:'Lebron James',correct: false},
            {text:'Steph Curry',correct: false},
            {text:'Michael Jordan',correct: false},
            {text:'Scottie Pippen',correct: true},
        ]
    },


]