import { type Question, questions } from "./questions.js";

let currentQuestions: Question[] = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element not found: ${id}`);
  return el as T;
}

function startQuiz(): void {
  currentQuestions = shuffle(questions).slice(0, 10);
  currentIndex = 0;
  correctCount = 0;
  getElement("result-card").classList.add("hidden");
  getElement("quiz-area").classList.remove("hidden");
  showQuestion();
}

function showQuestion(): void {
  answered = false;
  const q = currentQuestions[currentIndex];

  getElement("question-text").textContent = q.sentence;
  getElement("verb-info").textContent = `${q.verb} (${q.translation})`;
  getElement("score").textContent = `Question ${currentIndex + 1} / ${currentQuestions.length}`;
  getElement("progress-bar").style.width = `${(currentIndex / currentQuestions.length) * 100}%`;

  getElement("feedback").style.display = "none";
  getElement("next-btn").style.display = "none";

  getElement("answer-buttons").querySelectorAll("button").forEach((btn) => {
    (btn as HTMLButtonElement).disabled = false;
    (btn as HTMLElement).style.opacity = "1";
  });
}

function checkAnswer(selected: "être" | "avoir"): void {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const isCorrect = selected === q.answer;

  if (isCorrect) correctCount++;

  const feedback = getElement("feedback");
  const feedbackText = getElement("feedback-text");
  const explanation = getElement("explanation");

  feedback.className = "feedback " + (isCorrect ? "correct" : "wrong");
  feedbackText.textContent = isCorrect ? "Correct!" : `Wrong! The answer is "${q.answer}"`;
  explanation.textContent = q.hint;
  feedback.style.display = "block";

  getElement("answer-buttons").querySelectorAll("button").forEach((btn) => {
    (btn as HTMLButtonElement).disabled = true;
    (btn as HTMLElement).style.opacity = "0.6";
  });

  getElement("next-btn").style.display = "block";
}

function nextQuestion(): void {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult(): void {
  getElement("quiz-area").classList.add("hidden");
  getElement("result-card").classList.remove("hidden");

  const percent = Math.round((correctCount / currentQuestions.length) * 100);
  getElement("final-text").textContent = `${correctCount} / ${currentQuestions.length}`;

  let message = "";
  if (percent === 100) message = "Perfect! Excellent work!";
  else if (percent >= 80) message = "Great job! Keep practicing!";
  else if (percent >= 60) message = "Good effort! Review the tip and try again.";
  else message = "Keep learning! Check the tip above and practice more.";

  getElement("final-message").textContent = message;
}

function restartQuiz(): void {
  startQuiz();
}

// Expose functions to window for onclick handlers
(window as any).checkAnswer = checkAnswer;
(window as any).nextQuestion = nextQuestion;
(window as any).restartQuiz = restartQuiz;

// Start on load
document.addEventListener("DOMContentLoaded", startQuiz);
