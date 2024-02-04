const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "kolkata"],
    correctAnswer: "Delhi",
  },
  {
    question: "What is the capital of USA?",
    options: ["Chicago", "Los Angeles", "Washington D.C", "New York"],
    correctAnswer: "Washington D.C",
  },
  {
    question: "What is the capital of England?",
    options: ["Manchester", "London", "Yorkshire", "Dublin"],
    correctAnswer: "London",
  },
  {
    question: "What is the capital of Oman?",
    options: ["Muscat", "Tehran", "Islambad", "Riyadh"],
    correctAnswer: "Muscat",
  },
  {
    question: "What is the capital of  Indonesia?",
    options: ["Budapest", "Kingston", "Jakarta", "Tokyo"],
    correctAnswer: "Jakarta",
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: ["Coimbatore", "Kanchipuram", "Chennai", "Maduri"],
    correctAnswer: "Chennai",
  },
  {
    question: "What is the capital of Uttaranchal?",
    options: ["Dehradun", "Haridwar", "Chandigarh", "Meerut"],
    correctAnswer: "Dehradun",
  },
  {
    question: "What is the capital of Rajastan?",
    options: ["Ajmer", "Rajsamand", "Jaipur", "Jodhpur"],
    correctAnswer: "Jaipur",
  },
  {
    question: "What is the capital of  Gujrat?",
    options: ["Prbandar", "Surat", "Gandhinagar", "Vododara"],
    correctAnswer: "Gandhinagar",
  },
];

let currentQuestion = 0;
let userAnswers = [];


const userScores = document.querySelector('.user-score');

function calculateScore(answers) {
  let score = 0;

  for (let i = 0; i < quizData.length; i++) {
    if (answers[i] === quizData[i].correctAnswer) {
      score++;
    }
  }

  return score;
}

const updateScore = () => {
  let userScore = calculateScore(userAnswers);
  userScores.innerText = `Your Score: ${userScore}/ ${quizData.length}`;
}


function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  questionElement.innerText = quizData[currentQuestion].question;

  optionsContainer.innerHTML = "";
  quizData[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(answer) {
  userAnswers[currentQuestion] = answer;
}

function submitAnswer() {
  const selectedAnswer = userAnswers[currentQuestion];
  const correctAnswer = quizData[currentQuestion].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    alert(`Answer is Correct!!`);
  } else {
    alert(`Incorrect! The correct answer is ${correctAnswer}`);
  }

  currentQuestion++;
  updateScore();
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
}




loadQuestion();

