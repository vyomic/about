let currentQuestionIndex = 0;
    let questionsData = [];
    let startTime;
    let timerInterval;
    let correctAnswers = 0;
    let incorrectAnswers = 0;


    // Event listener for manual file upload
    document.getElementById('fileInput').addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          questionsData = JSON.parse(e.target.result);
          loadQuizData();
        };
        reader.readAsText(file);
      }
    });