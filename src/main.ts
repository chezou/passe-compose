interface Question {
  verb: string;
  sentence: string;
  answer: "être" | "avoir";
  translation: string;
  hint: string;
}

const questions: Question[] = [
  { verb: "manger", sentence: "J'___ mangé une pomme.", answer: "avoir", translation: "to eat", hint: "Regular verb → avoir" },
  { verb: "aller", sentence: "Elle ___ allée au cinéma.", answer: "être", translation: "to go", hint: "Movement verb → être" },
  { verb: "venir", sentence: "Ils ___ venus hier.", answer: "être", translation: "to come", hint: "Movement verb → être" },
  { verb: "faire", sentence: "Nous ___ fait nos devoirs.", answer: "avoir", translation: "to do/make", hint: "Regular verb → avoir" },
  { verb: "partir", sentence: "Tu ___ parti(e) tôt.", answer: "être", translation: "to leave", hint: "Movement verb → être" },
  { verb: "voir", sentence: "J'___ vu un film.", answer: "avoir", translation: "to see", hint: "Regular verb → avoir" },
  { verb: "arriver", sentence: "Marie ___ arrivée en retard.", answer: "être", translation: "to arrive", hint: "Movement verb → être" },
  { verb: "prendre", sentence: "Il ___ pris le bus.", answer: "avoir", translation: "to take", hint: "Regular verb → avoir" },
  { verb: "naître", sentence: "Je ___ né(e) en 1990.", answer: "être", translation: "to be born", hint: "State change verb → être" },
  { verb: "lire", sentence: "Elle ___ lu ce livre.", answer: "avoir", translation: "to read", hint: "Regular verb → avoir" },
  { verb: "descendre", sentence: "Nous ___ descendus.", answer: "être", translation: "to go down", hint: "Movement verb → être" },
  { verb: "écrire", sentence: "Tu ___ écrit une lettre.", answer: "avoir", translation: "to write", hint: "Regular verb → avoir" },
  { verb: "mourir", sentence: "Il ___ mort en 1900.", answer: "être", translation: "to die", hint: "State change verb → être" },
  { verb: "dormir", sentence: "J'___ dormi 8 heures.", answer: "avoir", translation: "to sleep", hint: "Regular verb → avoir" },
  { verb: "tomber", sentence: "Elle ___ tombée.", answer: "être", translation: "to fall", hint: "Movement verb → être" },
  { verb: "boire", sentence: "Nous ___ bu du café.", answer: "avoir", translation: "to drink", hint: "Regular verb → avoir" },
  { verb: "rester", sentence: "Ils ___ restés à la maison.", answer: "être", translation: "to stay", hint: "State verb → être" },
  { verb: "devenir", sentence: "Elle ___ devenue médecin.", answer: "être", translation: "to become", hint: "State change verb → être" },
  { verb: "parler", sentence: "J'___ parlé français.", answer: "avoir", translation: "to speak", hint: "Regular verb → avoir" },
  { verb: "monter", sentence: "Tu ___ monté(e) les escaliers.", answer: "être", translation: "to go up", hint: "Movement verb → être" },
];

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
