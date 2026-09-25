/* SCANNERI exam app — requires questions-data.js first */
const TOTAL_TIME = 70 * 60;
const PER_SUBJECT = 15;

let state = {
  index: 0,
  selected: null,
  answers: [],
  timeLeft: TOTAL_TIME,
  timerId: null
};

const $ = (id) => document.getElementById(id);

function init() {
  $('startBtn').addEventListener('click', startExam);
  $('nextBtn').addEventListener('click', nextQuestion);
  $('restartBtn').addEventListener('click', () => location.reload());
  if ($('showReviewBtn')) {
    $('showReviewBtn').addEventListener('click', toggleReview);
  }
}

function startExam() {
  state = { index: 0, selected: null, answers: [], timeLeft: TOTAL_TIME, timerId: null };
  $('startScreen').classList.add('hidden');
  $('examScreen').classList.remove('hidden');
  $('resultScreen').classList.add('hidden');
  startTimer();
  showQuestion();
}

function showQuestion() {
  const q = QUESTIONS[state.index];
  const subj = SUBJECTS[q.s];
  state.selected = null;

  $('progressText').textContent = `Савол ${state.index + 1} аз ${QUESTIONS.length}`;
  $('subjectBadge').textContent = `${subj.icon} ${subj.name}`;
  $('questionNum').textContent = `Саволи ${state.index + 1}`;
  $('questionText').textContent = q.q;
  $('message').textContent = '';

  const opts = $('options');
  opts.innerHTML = '';
  q.o.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + i)}. ${text}`;
    btn.addEventListener('click', () => selectAnswer(i));
    opts.appendChild(btn);
  });

  $('nextBtn').textContent = state.index === QUESTIONS.length - 1 ? 'Анҷом додани имтиҳон' : 'Саволи навбатӣ →';
  updateSubjectProgress();
}

function selectAnswer(i) {
  state.selected = i;
  document.querySelectorAll('.option-btn').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
  });
  $('message').textContent = '';
}

function nextQuestion() {
  if (state.selected === null) {
    $('message').textContent = 'Аввал як ҷавобро интихоб кунед.';
    return;
  }
  const q = QUESTIONS[state.index];
  state.answers.push({
    qIndex: state.index,
    chosen: state.selected,
    correct: state.selected === q.c,
    subject: q.s
  });

  if (state.index >= QUESTIONS.length - 1) {
    finishExam();
    return;
  }
  state.index++;
  showQuestion();
}

function finishExam() {
  stopTimer();
  $('examScreen').classList.add('hidden');
  $('resultScreen').classList.remove('hidden');

  const totalCorrect = state.answers.filter(a => a.correct).length;
  const percent = Math.round((totalCorrect / QUESTIONS.length) * 100);

  $('totalScore').textContent = `${totalCorrect} / ${QUESTIONS.length}`;
  $('totalPercent').textContent = `${percent}%`;

  const bySubject = SUBJECTS.map((subj, i) => {
    const subAnswers = state.answers.filter(a => a.subject === i);
    const correct = subAnswers.filter(a => a.correct).length;
    return { name: subj.name, icon: subj.icon, correct, total: subAnswers.length };
  });

  $('subjectResults').innerHTML = bySubject.map(s => `
    <div class="subj-result">
      <span class="subj-name">${s.icon} ${s.name}</span>
      <span class="subj-score">${s.correct} / ${s.total}</span>
      <div class="subj-bar"><div class="subj-fill" style="width:${s.total ? (s.correct / s.total * 100) : 0}%"></div></div>
    </div>
  `).join('');

  renderReview();

  try {
    const history = JSON.parse(localStorage.getItem('scanneri_exam_history') || '[]');
    history.unshift({
      date: new Date().toISOString(),
      total: totalCorrect,
      percent,
      bySubject: bySubject.map(s => ({ name: s.name, correct: s.correct, total: s.total })),
      timeUsed: TOTAL_TIME - state.timeLeft
    });
    localStorage.setItem('scanneri_exam_history', JSON.stringify(history.slice(0, 20)));
  } catch (e) {}
}

function renderReview() {
  const box = $('reviewList');
  const wrong = state.answers.filter(a => !a.correct);

  if (wrong.length === 0) {
    box.innerHTML = '<p class="review-empty">Ҳамаи ҷавобҳо дурустанд. Офарин!</p>';
    return;
  }

  box.innerHTML = wrong.map(a => {
    const q = QUESTIONS[a.qIndex];
    const subj = SUBJECTS[q.s];
    const yours = q.o[a.chosen];
    const right = q.o[q.c];
    return `
      <div class="review-item wrong">
        <p class="review-q">${a.qIndex + 1}. ${q.q}</p>
        <div class="review-meta">
          <span class="tag">${subj.icon} ${subj.name}</span>
          <span class="yours">Шумо: ${yours}</span>
          <span class="correct">Дуруст: ${right}</span>
        </div>
        <p class="review-explain">${q.e || ''}</p>
      </div>
    `;
  }).join('');
}

function toggleReview() {
  const section = $('reviewSection');
  const btn = $('showReviewBtn');
  const open = !section.classList.contains('hidden');
  if (open) {
    section.classList.add('hidden');
    btn.textContent = 'Шарҳи хатогиҳо ↓';
  } else {
    section.classList.remove('hidden');
    btn.textContent = 'Пинҳон кардан ↑';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateSubjectProgress() {
  const q = QUESTIONS[state.index];
  const done = state.answers.filter(a => a.subject === q.s).length;
  $('subjectProgress').textContent = `${done + 1} / ${PER_SUBJECT} дар ин фан`;
}

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) finishExam();
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerDisplay() {
  const m = Math.floor(Math.max(0, state.timeLeft) / 60);
  const s = Math.max(0, state.timeLeft) % 60;
  $('timer').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  $('timer').classList.toggle('warning', state.timeLeft <= 300);
}

document.addEventListener('DOMContentLoaded', init);
