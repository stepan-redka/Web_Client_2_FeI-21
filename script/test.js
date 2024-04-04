const testData = {
  "testName": "Тест про туризм в гори",
  "questions": [
    {
      "question": "Як називається найвища гора у світі?",
      "answers": [
        {
          "answer": "Еверест",
          "isCorrect": true
        },
        {
          "answer": "К2",
          "isCorrect": false
        },
        {
          "answer": "Канченджанга",
          "isCorrect": false
        },
        {
          "answer": "Макалу",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Де знаходиться гора Кіліманджаро?",
      "answers": [
        {
          "answer": "Танзанія",
          "isCorrect": true
        },
        {
          "answer": "Кенія",
          "isCorrect": false
        },
        {
          "answer": "Індонезія",
          "isCorrect": false
        },
        {
          "answer": "Непал",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Яка гора є найвищою в Європі?",
      "answers": [
        {
          "answer": "Монблан",
          "isCorrect": false
        },
        {
          "answer": "Ельбрус",
          "isCorrect": true
        },
        {
          "answer": "Дом",
          "isCorrect": false
        },
        {
          "answer": "Гросглокнер",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Яка гора вважається пам'ятником природи?",
      "answers": [
        {
          "answer": "Еверест",
          "isCorrect": false
        },
        {
          "answer": "Ай-Петрі",
          "isCorrect": false
        },
        {
          "answer": "Ай-Петрі",
          "isCorrect": true
        },
        {
          "answer": "Кіліманджаро",
          "isCorrect": false
        }
      ]
    },
    {
      "question": "Що таке альпінізм?",
      "answers": [
        {
          "answer": "Спорт на воді",
          "isCorrect": false
        },
        {
          "answer": "Верховий туризм",
          "isCorrect": false
        },
        {
          "answer": "Спортивне велосипедіння",
          "isCorrect": false
        },
        {
          "answer": "Верховий спорт",
          "isCorrect": true
        }
      ]
    }
  ]
};

const questionsContainer = document.getElementById('questions-container');
const submitButton = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// Відображення питань та відповідей
function displayQuestions() {
  testData.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<h3>Питання ${index + 1}: ${question.question}</h3>`;
      
      question.answers.forEach((answer, answerIndex) => {
          const answerDiv = document.createElement('div');
          answerDiv.classList.add('answer');
          answerDiv.innerHTML = `
              <input type="radio" id="answer-${index}-${answerIndex}" name="answer-${index}" value="${answerIndex}">
              <label for="answer-${index}-${answerIndex}">${answer.answer}</label>
          `;
          questionDiv.appendChild(answerDiv);
      });
      
      questionsContainer.appendChild(questionDiv);
  });
}

// Перевірка правильності відповідей та виведення результату
function checkAnswers() {
  let correctAnswers = 0;
  testData.questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="answer-${index}"]:checked`);
      if (selectedAnswer) {
          const selectedAnswerIndex = selectedAnswer.value;
          const selectedAnswerElement = document.getElementById(`answer-${index}-${selectedAnswerIndex}`);
          if (question.answers[selectedAnswerIndex].isCorrect) {
              correctAnswers++;
              selectedAnswerElement.nextElementSibling.style.color = 'green';
          } else {
              selectedAnswerElement.nextElementSibling.style.color = 'red';
          }
      }
      // Відображення правильних відповідей
      question.answers.forEach((answer, answerIndex) => {
          const answerElement = document.getElementById(`answer-${index}-${answerIndex}`);
          if (answer.isCorrect) {
              answerElement.nextElementSibling.style.color = 'green';
          }
          // Відключення радіо-кнопок
          answerElement.disabled = true;
      });
  });
  const totalQuestions = testData.questions.length;
  const score = (correctAnswers / totalQuestions) * 100;
  resultDiv.textContent = `Ви відповіли правильно на ${correctAnswers} з ${totalQuestions} питань. Ваш результат: ${score}%`;
}

// Відображення питань при завантаженні сторінки
window.onload = () => {
  displayQuestions();
};

// Обробник події кнопки "Завершити тест"
submitButton.addEventListener('click', () => {
  checkAnswers();
});
