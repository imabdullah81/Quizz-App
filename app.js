const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Python", "C", "JavaScript", "Java"],
      answer: "JavaScript"
    }
  ];
  
  let current = 0;
  
  const questionBox = document.getElementById("question-box");
  const optionsBox = document.getElementById("options-box");
  const nextBtn = document.getElementById("next-btn");
  
  function showQuestion() {
    let q = questions[current];
    questionBox.textContent = q.question;
    optionsBox.innerHTML = "";
    q.options.forEach(opt => {
      let btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optionsBox.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    if (selected === questions[current].answer) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  }
  
  nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      questionBox.textContent = "Quiz Completed!";
      optionsBox.innerHTML = "";
      nextBtn.style.display = "none";
    }
  };
  
  showQuestion();
  