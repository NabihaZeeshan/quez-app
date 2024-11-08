const questions = [
    {
        question:"which is largest animal in the world?",
        answer:[
            {text: "shark", correct:false},
            {text: "bhutan", correct:true},
            {text: "napal", correct:false},
            {text: "sirilanka", correct:false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answer:[
            {text: "vatican city", correct:true},
            {text: "blue whale", correct:false},
            {text: "elephant", correct:false},
            {text: "giraffe", correct:false},
        ] 
    },
    {
        question:"which is largest desert in the world?",
        answer:[
            {text: "kalahari", correct:false},
            {text: "gobi", correct:false},
            {text: "sahara", correct:false},
            {text: "antarctica", correct:true},
        ]
    },
    {
        question:"which is the smallest continent in the world?",
        answer:[
            {text: "asia", correct:false},
            {text: "australia", correct:true},
            {text: "arctic", correct:false},
            {text: "africa", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startquiz(){
    currentquestionIndex = 0
    score =0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentquestion.
    question;

    currentquestion.answers.forEach(answer =>{
        const button = document.createElemant("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListner("click, selectAnswer");
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentquestionIndex < question.length){
    handleNextButton();
    }else{
        startQuiz();
    }

})

startquiz();