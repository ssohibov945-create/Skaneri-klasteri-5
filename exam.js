/* SCANNERI · Имтиҳони пурраи ММТ · Кластери 5
   60 савол (15 × 4 фан) · 70 дақиқа · саволҳои сатҳи ММТ */

const SUBJECTS = [
  { id: 'chemistry', name: 'Химия', icon: '⚗' },
  { id: 'biology', name: 'Биология', icon: '♧' },
  { id: 'physics', name: 'Физика', icon: '⌁' },
  { id: 'tajik', name: 'Забони тоҷикӣ', icon: 'А' }
];

const QUESTIONS = [
  /* ========== ХИМИЯ (15) ========== */
  { s: 0, q: 'Массаи молярии H₂SO₄ чанд г/мол аст? (H=1, S=32, O=16)', o: ['49', '82', '98', '116'], c: 2 },
  { s: 0, q: 'Дар реаксияи 2H₂ + O₂ → 2H₂O агар 4 мол H₂ пурра реаксия кунад, чанд мол H₂O ҳосил мешавад?', o: ['2', '4', '6', '8'], c: 1 },
  { s: 0, q: 'Кадом пайвастагӣ электролитҳои қавӣ мебошад?', o: ['C₂H₅OH', 'H₂O', 'NaOH', 'NH₃'], c: 2 },
  { s: 0, q: 'Рақами оксидшавии сулфур дар H₂SO₄ чанд аст?', o: ['+2', '+4', '+6', '−2'], c: 2 },
  { s: 0, q: 'Кадом газ дар реаксияи Zn + 2HCl → ZnCl₂ + ? ҳосил мешавад?', o: ['O₂', 'CO₂', 'H₂', 'Cl₂'], c: 2 },
  { s: 0, q: 'pH-и маҳлули 0,01 М HCl тақрибан чанд аст? (ҳисоби идеалӣ)', o: ['1', '2', '3', '4'], c: 1 },
  { s: 0, q: 'Кадом элемент дар ҷадвали даврии Менделеев дар гурӯҳи VIIA (галогенҳо) ҷойгир аст?', o: ['Na', 'Ca', 'Br', 'Fe'], c: 2 },
  { s: 0, q: 'Формулаи карбонати калсий кадом аст?', o: ['CaO', 'CaCO₃', 'Ca(OH)₂', 'CaCl₂'], c: 1 },
  { s: 0, q: 'Дар реаксияи безараргардонӣ кадом маҳсулот ҳатман ҳосил мешавад?', o: ['газ', 'намак ва об', 'металл', 'оксид'], c: 1 },
  { s: 0, q: 'Массаи 2 мол CO₂ чанд грамм аст? (C=12, O=16)', o: ['22', '44', '88', '176'], c: 2 },
  { s: 0, q: 'Кадом пайвастагӣ кислотаи заиф аст?', o: ['HCl', 'H₂SO₄', 'CH₃COOH', 'HNO₃'], c: 2 },
  { s: 0, q: 'Рақами атомӣ ва шумораи электронҳои атомӣ баробар аст ба:', o: ['шумораи нейтронҳо', 'шумораи протонҳо', 'массаи атомӣ', 'шумораи орбиталҳо'], c: 1 },
  { s: 0, q: 'Дар реаксияи сӯзиши CH₄ + 2O₂ → CO₂ + 2H₂O агар 16 г CH₄ сӯзад, чанд мол CO₂ ҳосил мешавад? (C=12, H=1)', o: ['0,5', '1', '2', '4'], c: 1 },
  { s: 0, q: 'Кадом оксид амфотерӣ аст?', o: ['Na₂O', 'CO₂', 'Al₂O₃', 'SO₃'], c: 2 },
  { s: 0, q: 'Консентратсияи молярии маҳлуле, ки дар 500 мл он 0,1 мол модда ҳал шудааст, чанд М аст?', o: ['0,05', '0,2', '0,5', '1,0'], c: 1 },

  /* ========== БИОЛОГИЯ (15) ========== */
  { s: 1, q: 'Дар митоз аз як ҳуҷайраи диплоидӣ чанд ҳуҷайраи диплоидӣ ҳосил мешавад?', o: ['1', '2', '4', '8'], c: 1 },
  { s: 1, q: 'Кадом органоид «нерӯгоҳи» ҳуҷайра ном дорад ва ATP ҳосил мекунад?', o: ['рибосома', 'митохондрия', 'ядро', 'аппарати Голҷӣ'], c: 1 },
  { s: 1, q: 'Дар фотосинтез маҳсулоти асосии органикӣ кадом аст?', o: ['O₂', 'глюкоза', 'CO₂', 'H₂O'], c: 1 },
  { s: 1, q: 'Шумораи хромосомаҳо дар ҳуҷайраҳои ҷинсии одам (гаметаҳо) чанд аст?', o: ['23', '46', '92', '22'], c: 0 },
  { s: 1, q: 'Кадом витамин барои лахташавии хун зарур аст?', o: ['A', 'C', 'D', 'K'], c: 3 },
  { s: 1, q: 'Мубодилаи газҳо дар шуш асосан дар куҷо мегузарад?', o: ['бронхҳо', 'алвеолаҳо', 'трахея', 'ҳалқ'], c: 1 },
  { s: 1, q: 'Кадом бофта қобилияти ҳаяҷон ва интиқоли импулс дорад?', o: ['эпителӣ', 'пайвасткунанда', 'асабӣ', 'мушакӣ'], c: 2 },
  { s: 1, q: 'ДНК аз кадом мономерҳо иборат аст?', o: ['аминокислотаҳо', 'нуклеотидҳо', 'глюкоза', 'глисерин'], c: 1 },
  { s: 1, q: 'Кадом олим қонунҳои асосии ирсиятро кашф кард?', o: ['Дарвин', 'Мендел', 'Пастер', 'Павлов'], c: 1 },
  { s: 1, q: 'Занҷири ғизоӣ одатан бо кадом гурӯҳ оғоз мешавад?', o: ['истеъмолкунандагон', 'таҷзиякунандагон', 'истеҳсолкунандагон (растаниҳо)', 'паразитҳо'], c: 2 },
  { s: 1, q: 'Вазифаи асосии гемоглобин чист?', o: ['ҳозима', 'интиқоли O₂', 'муҳофизати пӯст', 'ҳосил кардани гормон'], c: 1 },
  { s: 1, q: 'Дар мейоз аз як ҳуҷайраи диплоидӣ чанд ҳуҷайраи гаплоидӣ ҳосил мешавад?', o: ['2', '4', '8', '1'], c: 1 },
  { s: 1, q: 'Кадом узв инсулин ҳосил мекунад?', o: ['ҷигар', 'гурда', 'меъда', 'ғадуди зери меъда'], c: 3 },
  { s: 1, q: 'Вирусҳо барои афзоиш ба чӣ ниёз доранд?', o: ['танҳо об', 'ҳуҷайраи зинда-ҳост', 'нури офтоб', 'хоки ҳосилхез'], c: 1 },
  { s: 1, q: 'Кадом раванд энергияи химиявиро аз ғизо ба ATP табдил медиҳад?', o: ['фотосинтез', 'нафаскашии ҳуҷайравӣ', 'транспиратсия', 'гардолудшавӣ'], c: 1 },

  /* ========== ФИЗИКА (15) ========== */
  { s: 2, q: 'Ҷисм 180 м-ро дар 30 с тай кард. Суръати миёнаи он чанд м/с аст?', o: ['3', '6', '9', '15'], c: 1 },
  { s: 2, q: 'Шитоби ҷисме, ки суръаташ дар 4 с аз 8 то 20 м/с зиёд шуд, чанд м/с² аст?', o: ['2', '3', '4', '5'], c: 1 },
  { s: 2, q: 'Қувваи 12 Н ба массаи 3 кг таъсир мекунад. Шитоб чанд аст? (F = ma)', o: ['2 м/с²', '4 м/с²', '9 м/с²', '36 м/с²'], c: 1 },
  { s: 2, q: 'Кор ҳангоми F = 25 Н ва s = 4 м (қувва ба самти ҳаракат) чанд Ҷоул аст?', o: ['29', '50', '100', '6,25'], c: 2 },
  { s: 2, q: 'Энергияи кинетикии ҷисми 5 кг бо суръати 4 м/с чанд Ҷоул аст? (Ek = mv²/2)', o: ['20', '40', '80', '160'], c: 1 },
  { s: 2, q: 'Фишор ҳангоми F = 200 Н ва S = 0,5 м² чанд Паскал аст?', o: ['100', '400', '200', '40'], c: 1 },
  { s: 2, q: 'Зичии ҷисме, ки массааш 400 г ва ҳаҷмаш 50 см³ аст, чанд г/см³ аст?', o: ['0,125', '2', '8', '20'], c: 2 },
  { s: 2, q: 'Мувофиқи қонуни Ом, агар U = 24 В ва R = 6 Ом бошад, I чанд Ампер аст?', o: ['2', '4', '18', '144'], c: 1 },
  { s: 2, q: 'Қувваи барқи асбобе, ки бо U = 220 В ва I = 0,5 А кор мекунад, чанд Ватт аст?', o: ['110', '220', '440', '11'], c: 0 },
  { s: 2, q: 'Вазни ҷисми 8 кг дар Замин (g ≈ 10 Н/кг) тақрибан чанд Нютон аст?', o: ['0,8', '8', '80', '800'], c: 2 },
  { s: 2, q: 'Агар суръат 3 баробар зиёд шавад, энергияи кинетикӣ чанд баробар зиёд мешавад?', o: ['3', '6', '9', '27'], c: 2 },
  { s: 2, q: 'Дар занҷири пайдарпай кадом бузургӣ барои ҳамаи элементҳо яксон аст?', o: ['шиддат', 'қувваи ҷараён', 'муқовимат', 'қувва'], c: 1 },
  { s: 2, q: 'Садо дар кадом муҳит паҳн шуда наметавонад?', o: ['ҳаво', 'об', 'металл', 'вакуум'], c: 3 },
  { s: 2, q: 'Кунҷи афтиши рӯшноӣ ба кунҷи инъикос чӣ муносибат дорад?', o: ['калонтар аст', 'хурдтар аст', 'баробар аст', 'ҳамеша 90° аст'], c: 2 },
  { s: 2, q: 'Агар қувва бетағйир монад ва масоҳат 2 баробар зиёд шавад, фишор чӣ мешавад?', o: ['2 баробар зиёд', '2 баробар кам', 'тағйир намеёбад', '4 баробар кам'], c: 1 },

  /* ========== ЗАБОНИ ТОҶИКӢ (15) ========== */
  { s: 3, q: 'Кадом ҷумла мувофиқати феъл ва мубтадоро дуруст дорад?', o: ['Донишҷӯён мехонад.', 'Донишҷӯён мехонанд.', 'Донишҷӯён хондам.', 'Донишҷӯён хондан.'], c: 1 },
  { s: 3, q: 'Калимаи «боғайрат» дар «духтари боғайрат» кадом ҳиссаи нутқ аст?', o: ['исм', 'сифат', 'феъл', 'зарф'], c: 1 },
  { s: 3, q: 'Синоними дурусти «тез» кадом аст?', o: ['оҳиста', 'зуд', 'паст', 'вазнин'], c: 1 },
  { s: 3, q: 'Антоними «равшан» кадом аст?', o: ['дурахшон', 'сафед', 'торик', 'гарм'], c: 2 },
  { s: 3, q: 'Навишти дуруст кадом аст?', o: ['муалим', 'муаллим', 'муаллимм', 'муалимм'], c: 1 },
  { s: 3, q: 'Маънои ибораи «чашм ба роҳ будан» чист?', o: ['роҳро дидан', 'интизор шудан', 'сафар кардан', 'тарсидан'], c: 1 },
  { s: 3, q: 'Асосгузори адабиёти классикии форсу тоҷик кист?', o: ['Фирдавсӣ', 'Рӯдакӣ', 'Саъдӣ', 'Айнӣ'], c: 1 },
  { s: 3, q: 'Муаллифи «Шоҳнома» кист?', o: ['Рӯдакӣ', 'Саъдӣ', 'Фирдавсӣ', 'Ҳофиз'], c: 2 },
  { s: 3, q: '«Гулистон» асари кадом адиб аст?', o: ['Саъдӣ', 'Фирдавсӣ', 'Айнӣ', 'Турсунзода'], c: 0 },
  { s: 3, q: 'Поягузори адабиёти муосири тоҷик кист?', o: ['Рӯдакӣ', 'Фирдавсӣ', 'Садриддин Айнӣ', 'Саъдӣ'], c: 2 },
  { s: 3, q: 'Кадом ҷумла мураккаб аст?', o: ['Офтоб баромад.', 'Борон борид ва ҳаво хунук шуд.', 'Кӯдак хурсанд аст.', 'Осмон соф аст.'], c: 1 },
  { s: 3, q: 'Калимаи «ором» дар «ором сухан гуфт» кадом ҳиссаи нутқ аст?', o: ['исм', 'сифат', 'зарф', 'феъл'], c: 2 },
  { s: 3, q: 'Идомаи дурусти мақол: «Дониш чароғи ... аст».', o: ['хона', 'ақл', 'кӯҳ', 'рӯз'], c: 1 },
  { s: 3, q: 'Кадом мақол маънои меҳнатро таъкид мекунад?', o: ['Як даст садо надорад.', 'Ҳар чӣ корӣ, ҳамон даравӣ.', 'Об аз сар гузашт.', 'Дӯст дар рӯзҳои сахт маълум мешавад.'], c: 1 },
  { s: 3, q: 'Навишти дурусти калима кадом аст?', o: ['масала', 'масъала', 'масьала', 'масъалаь'], c: 1 }
];

const TOTAL_TIME = 70 * 60;
const PER_SUBJECT = 15;

let state = {
  index: 0,
  selected: null,
  answers: [],
  timeLeft: TOTAL_TIME,
  timerId: null,
  started: false
};

const $ = (id) => document.getElementById(id);

function init() {
  $('startBtn').addEventListener('click', startExam);
  $('nextBtn').addEventListener('click', nextQuestion);
  $('restartBtn').addEventListener('click', () => location.reload());
}

function startExam() {
  state = {
    index: 0,
    selected: null,
    answers: [],
    timeLeft: TOTAL_TIME,
    timerId: null,
    started: true
  };
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
  $('subjectBadge').dataset.subject = q.s;
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

  const list = $('subjectResults');
  list.innerHTML = bySubject.map(s => `
    <div class="subj-result">
      <span class="subj-name">${s.icon} ${s.name}</span>
      <span class="subj-score">${s.correct} / ${s.total}</span>
      <div class="subj-bar"><div class="subj-fill" style="width:${s.total ? (s.correct / s.total * 100) : 0}%"></div></div>
    </div>
  `).join('');

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

function updateSubjectProgress() {
  const q = QUESTIONS[state.index];
  const doneInSubject = state.answers.filter(a => a.subject === q.s).length;
  $('subjectProgress').textContent = `${doneInSubject + 1} / ${PER_SUBJECT} дар ин фан`;
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
