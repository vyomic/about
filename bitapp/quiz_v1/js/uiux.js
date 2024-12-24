function loadQuizData() {
    document.getElementById('fileInput').style.display = 'none';
    document.getElementById('fileInputbox').style.display = 'none';
    // Hide the file input
    document.getElementById('loadJsonButton1').style.display = 'none'; // Hide the load button
    document.getElementById('loadJsonButton2').style.display = 'none'; // Hide the load button
    document.getElementById('header').style.display = 'none'; // Hide the header
    document.getElementById('questionCount').textContent = `Total Questions: ${questionsData.length}`;
    document.getElementById('questionCount').style.display = 'block'; // Show question count
    document.getElementById('util').style.display = 'block'; // Show score board
    startTimer(); // Start the timer
    displayQuestion(currentQuestionIndex);
  }


  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      document.getElementById('timerspn').textContent = `Time: ${minutes}m ${seconds}s`;
      document.getElementById('timer').style.display = 'block'; // Show timer
    }, 1000);
  }


  function displayQuestion(index) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ''; // Clear previous content


    const item = questionsData[index];


    const questionsBox = document.createElement('div');
    questionsBox.className = 'questionsBox';


    const questionNumber = document.createElement('span');
    questionNumber.className = 'questionNumber';
    questionNumber.textContent = 'Question ' + item.QuestionNumber;


    const questionText = document.createElement('span');
    questionText.className = 'question';
    questionText.textContent = item.Question;


    questionsBox.appendChild(questionNumber);
    questionsBox.appendChild(questionText);


    const optionBox = document.createElement('div');
    optionBox.className = 'optionBox';


    for (let key in item.Options) {
      const optionButton = document.createElement('button');
      optionButton.textContent = `${key}: ${item.Options[key]}`;


      optionButton.addEventListener('click', function () {
        Array.from(optionBox.children).forEach(button => button.disabled = true);
        Array.from(optionBox.children).forEach(button => {
          button.style.backgroundColor = 'transparent';
          button.style.color = '#0d64d6'; // Reset text color
        });


        if (key === item.Answer) {
          optionButton.style.backgroundColor = '#7affa9'; // Correct answer color
          optionButton.style.color = 'black'; // Change text color for visibility
          correctAnswers++;
        } else {
          optionButton.style.backgroundColor = 'red'; // Incorrect answer color
          optionButton.style.color = 'white'; // Change text color for visibility
          incorrectAnswers++;
        }


        document.getElementById('correctCount').textContent = `Correct Answers: ${correctAnswers}`;
        document.getElementById('incorrectCount').textContent = `Incorrect Answers: ${incorrectAnswers}`;


        showCorrectAnswer(correctAnswerBox, item.Answer);
      });


      optionBox.appendChild(optionButton);
    }


    const correctAnswerBox = document.createElement('div');
    correctAnswerBox.className = 'correctAnswer';
    correctAnswerBox.textContent = 'Correct Answer: ' + item.Answer;


    quizContainer.appendChild(questionsBox);
    quizContainer.appendChild(optionBox);
    quizContainer.appendChild(correctAnswerBox);


    document.getElementById('prevButton').style.display = index > 0 ? 'inline-block' : 'none';
    document.getElementById('nextButton').style.display = index < questionsData.length - 1 ? 'inline-block' : 'none';
  }


  function showCorrectAnswer(answerBox, correctAnswer) {
    answerBox.style.display = 'block';
  }


  document.getElementById('prevButton').addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(currentQuestionIndex);
    }
  });


  document.getElementById('nextButton').addEventListener('click', function () {
    if (currentQuestionIndex < questionsData.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    }
  });


  document.getElementById('jumpButton').addEventListener('click', () => {
    const jumpTo = parseInt(document.getElementById('jumpTo').value) - 1;
    document.getElementById('jumpTo').value = '';


    if (jumpTo >= 0 && jumpTo < questionsData.length) {
      currentQuestionIndex = jumpTo;
      displayQuestion(currentQuestionIndex);
    } else {
      alert('Invalid question number');
    }
  });
  // theme toggle
  document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('toggleButton');
const slider = document.getElementsByClassName('slider')[0];
const questionsBox = document.getElementsByClassName('questionsBox'); // Get the questionsBox element

// Check localStorage for the saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  // Apply the dark theme if saved preference is 'dark'
  document.body.style.backgroundColor = '#000';
  document.querySelectorAll('h2').forEach(h2 => {
    h2.style.color = '#ffedb3';
  });
  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.color = '#ffedb3';
  });
  slider.classList.add('day-glow');
  toggleButton.checked = true; // Keep the toggle in the 'on' state
} else {
  // Apply light theme if no saved preference or 'light' preference is saved
  document.body.style.backgroundColor = '';
  slider.classList.remove('day-glow');
  document.querySelectorAll('h2').forEach(h2 => {
    h2.style.color = '#000000';
  });
  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.color = '#000000';
  });
  toggleButton.checked = false; // Keep the toggle in the 'off' state
}

// Event listener to toggle the theme and save it to localStorage
toggleButton.addEventListener('change', () => {
  if (toggleButton.checked) {
    document.body.style.backgroundColor = '#000';
    document.querySelectorAll('h2').forEach(h2 => {
      h2.style.color = '#ffedb3';
    });
    document.querySelectorAll('h3').forEach(h3 => {
      h3.style.color = '#ffedb3';
    });
    slider.classList.add('day-glow');

    // Save the dark theme preference to localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.style.backgroundColor = '';
    slider.classList.remove('day-glow');
    document.querySelectorAll('h2').forEach(h2 => {
      h2.style.color = '#000000';
    });
    document.querySelectorAll('h3').forEach(h3 => {
      h3.style.color = '#000000';
    });

    // Save the light theme preference to localStorage
    localStorage.setItem('theme', 'light');
  }
});
});