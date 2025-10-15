const words = [
  { hiragana: "_ぬ", correct: "い", meaning: "dog (inu)" },
  { hiragana: "_まい", correct: "う", meaning: "tasty (umai)" },
  { hiragana: "_ん", correct: "え", meaning: "yen (en)" },
  { hiragana: "_さぎ", correct: "う", meaning: "rabbit (usagi)" },
  { hiragana: "_とな", correct: "お", meaning: "adult (otona)" },
  { hiragana: "あか_", correct: "い", meaning: "red (akai)" },
  { hiragana: "か_が_", correct: "い", meaning: "abroad (kaigai)" },
  { hiragana: "_るさい", correct: "う", meaning: "noisy (urusai)" },
  { hiragana: "_かね", correct: "お", meaning: "money (okane)" },
  { hiragana: "____き", correct: "お", meaning: "big (ooki)" },
  { hiragana: "_み", correct: "う", meaning: "sea (umi)" },
  { hiragana: "つく_", correct: "え", meaning: "table (tsukue)" },
];

const quizContainer = document.getElementById("quiz");
const options = document.querySelectorAll("#options button");
const resultText = document.getElementById("result");

let currentWordIndex = 0;

function showWord() {
  quizContainer.innerHTML = `
    <div class="word">
      <span>${words[currentWordIndex].hiragana}</span>
      <span>(${words[currentWordIndex].meaning})</span>
    </div>
  `;
  resultText.textContent = "";
}

options.forEach(btn => {
  btn.addEventListener("click", () => {
    const chosen = btn.textContent;
    const correct = words[currentWordIndex].correct;

    if (correct === chosen) {
      btn.classList.add("correct");
      resultText.textContent = "✅ Correct!";
      setTimeout(nextWord, 1000);
    } else {
      btn.classList.add("wrong");
      resultText.textContent = "❌ Try again!";
      setTimeout(() => btn.classList.remove("wrong"), 800);
    }
  });
});

function nextWord() {
  options.forEach(b => b.classList.remove("correct"));
  currentWordIndex++;
  if (currentWordIndex < words.length) {
    showWord();
  } else {
    quizContainer.innerHTML = "<h2>🎉 Great job! You've finished!</h2>";
    document.getElementById("options").style.display = "none";
    resultText.textContent = "";
  }
}

showWord();
