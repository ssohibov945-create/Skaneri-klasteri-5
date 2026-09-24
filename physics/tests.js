const questions = [
  { q: "Ҷисм 120 метрро дар 20 сония тай кард. Суръати он чанд аст?", o: ["6 м/с", "24 м/с", "140 м/с", "0,16 м/с"], c: 0 },
  { q: "Формулаи суръат кадом аст?", o: ["v = t/s", "v = s/t", "v = st", "v = s + t"], c: 1 },
  { q: "Дар 5 сония суръати ҷисм аз 10 то 20 м/с шуд. Шитоб чанд аст?", o: ["2 м/с²", "5 м/с²", "10 м/с²", "50 м/с²"], c: 0 },
  { q: "Воҳиди СИ барои шитоб кадом аст?", o: ["м", "с", "м/с", "м/с²"], c: 3 },
  { q: "Қувваи 3 Н ба массаи 2 кг таъсир мекунад. Шитоб чанд аст?", o: ["1,5 м/с²", "5 м/с²", "6 м/с²", "0,67 м/с²"], c: 0 },
  { q: "Қонуни дуюми Нютон чӣ гуна навишта мешавад?", o: ["F = ma", "F = m/a", "F = a/m", "F = m + a"], c: 0 },
  { q: "Воҳиди қувва дар СИ кадом аст?", o: ["Паскал", "Ҷоул", "Ньютон", "Ватт"], c: 2 },
  { q: "Вазни ҷисми 4 кг тақрибан чанд аст? (g = 10 Н/кг)", o: ["0,4 Н", "4 Н", "40 Н", "400 Н"], c: 2 },
  { q: "Агар қувва ба самти ҷойивазкунӣ бошад, кор бо кадом формула ҳисоб мешавад?", o: ["A = F/s", "A = Fs", "A = F + s", "A = s/F"], c: 1 },
  { q: "Қувваи 20 Н ҷисмро 3 м ҷойиваз кард. Кор чанд аст?", o: ["6 Ҷ", "17 Ҷ", "23 Ҷ", "60 Ҷ"], c: 3 },
  { q: "Воҳиди кори механикӣ кадом аст?", o: ["Ҷоул", "Ньютон", "Ватт", "Паскал"], c: 0 },
  { q: "Энергияи кинетикӣ ба чӣ вобаста аст?", o: ["Танҳо ба ҳаҷм", "Ба масса ва квадрати суръат", "Танҳо ба ҳарорат", "Танҳо ба вақт"], c: 1 },
  { q: "Энергияи кинетикии массаи 2 кг бо суръати 4 м/с чанд аст?", o: ["4 Ҷ", "8 Ҷ", "16 Ҷ", "32 Ҷ"], c: 2 },
  { q: "Фишор бо кадом формула ҳисоб мешавад?", o: ["p = FS", "p = F/S", "p = S/F", "p = F + S"], c: 1 },
  { q: "Қувваи 100 Н ба масоҳати 2 м² таъсир мекунад. Фишор чанд аст?", o: ["50 Па", "98 Па", "102 Па", "200 Па"], c: 0 },
  { q: "Воҳиди фишор дар СИ кадом аст?", o: ["Ньютон", "Паскал", "Ҷоул", "Кулон"], c: 1 },
  { q: "Формулаи зичӣ кадом аст?", o: ["ρ = V/m", "ρ = mV", "ρ = m/V", "ρ = m + V"], c: 2 },
  { q: "Массаи ҷисм 600 г, ҳаҷмаш 200 см³ аст. Зичӣ чанд аст?", o: ["0,3 г/см³", "3 г/см³", "300 г/см³", "120000 г/см³"], c: 1 },
  { q: "Ҳангоми гарм кардани ҷисм одатан чӣ тағйир меёбад?", o: ["Энергияи дохилӣ зиёд мешавад", "Масса ҳатман ду баробар мешавад", "Вақт қатъ мешавад", "Зичӣ ҳамеша сифр мешавад"], c: 0 },
  { q: "Воҳиди температура дар СИ кадом аст?", o: ["Келвин", "Ҷоул", "Ампер", "Вольт"], c: 0 },
  { q: "Ҷараёни барқ чист?", o: ["Ҳаракати бетартиби молекулаҳо", "Ҳаракати тартибдори зарядҳо", "Нури офтоб", "Фишори газ"], c: 1 },
  { q: "Қувваи ҷараёни 2 А дар 5 сония чӣ қадар заряд мегузаронад?", o: ["0,4 Кл", "2,5 Кл", "7 Кл", "10 Кл"], c: 3 },
  { q: "Воҳиди қувваи ҷараён кадом аст?", o: ["Ампер", "Вольт", "Ом", "Ватт"], c: 0 },
  { q: "Қонуни Ом барои қисми занҷир кадом аст?", o: ["I = UR", "I = U/R", "I = R/U", "I = U + R"], c: 1 },
  { q: "Шиддат 12 В ва муқовимат 4 Ом аст. Ҷараён чанд аст?", o: ["3 А", "8 А", "16 А", "48 А"], c: 0 },
  { q: "Агар I = 3 А ва R = 5 Ом бошад, U чанд аст?", o: ["1,67 В", "2 В", "8 В", "15 В"], c: 3 },
  { q: "Муқовимати ноқил ҳангоми U = 10 В ва I = 2 А чанд аст?", o: ["0,2 Ом", "5 Ом", "12 Ом", "20 Ом"], c: 1 },
  { q: "Қувваи барқ бо кадом формула ҳисоб мешавад?", o: ["P = UI", "P = U/I", "P = I/U", "P = U + I"], c: 0 },
  { q: "Асбоб бо шиддати 10 В ва ҷараёни 2 А кор мекунад. Қуввааш чанд аст?", o: ["5 Вт", "12 Вт", "20 Вт", "100 Вт"], c: 2 },
  { q: "Воҳиди қувваи барқ кадом аст?", o: ["Ватт", "Вольт", "Ампер", "Ом"], c: 0 },
  { q: "Дар занҷири пайдарпай кадом бузургӣ барои ҳамаи истеъмолкунандагон яксон аст?", o: ["Шиддат", "Қувваи ҷараён", "Муқовимат", "Қувва"], c: 1 },
  { q: "Рӯшноӣ ҳангоми бархӯрд бо оина чӣ мекунад?", o: ["Нобуд мешавад", "Инъикос мешавад", "Ба садо табдил меёбад", "Ҳамеша меистад"], c: 1 },
  { q: "Қонуни инъикоси рӯшноӣ чӣ мегӯяд?", o: ["Кунҷи афтиш ба кунҷи инъикос баробар аст", "Рӯшноӣ танҳо мешиканад", "Кунҷҳо ҳамеша сифранд", "Оина рӯшноиро фурӯ мебарад"], c: 0 },
  { q: "Садо дар кадом муҳит паҳн шуда наметавонад?", o: ["Ҳаво", "Об", "Металл", "Вакуум"], c: 3 },
  { q: "Баландии оҳанги садо бештар ба кадом бузургӣ вобаста аст?", o: ["Басомад", "Масса", "Фишор", "Зичии ҷисм"], c: 0 },
  { q: "1 километр ба чанд метр баробар аст?", o: ["10 м", "100 м", "1000 м", "10000 м"], c: 2 },
  { q: "Воҳиди вақт дар СИ кадом аст?", o: ["Соат", "Дақиқа", "Сония", "Рӯз"], c: 2 },
  { q: "Кадом бузургӣ векторӣ аст?", o: ["Масса", "Ҳарорат", "Вақт", "Қувва"], c: 3 },
  { q: "Дар ҳолати оромии ҷисм қувваи натиҷавӣ чанд аст?", o: ["0 Н", "1 Н", "9,8 Н", "Ба масса баробар"], c: 0 },
  { q: "Ҳангоми афзоиши масоҳат, агар қувва бетағйир монад, фишор чӣ мешавад?", o: ["Зиёд мешавад", "Кам мешавад", "Тағйир намеёбад", "Ба сифр баробар мешавад"], c: 1 },
  { q: "Кадом асбоб қувваи ҷараёнро чен мекунад?", o: ["Вольтметр", "Амперметр", "Динамометр", "Термометр"], c: 1 },
  { q: "Кадом асбоб шиддатро чен мекунад?", o: ["Амперметр", "Барометр", "Вольтметр", "Секундомер"], c: 2 },
  { q: "Агар суръат ду баробар зиёд шавад, энергияи кинетикӣ чанд баробар тағйир меёбад?", o: ["2 баробар", "3 баробар", "4 баробар", "Тағйир намеёбад"], c: 2 },
  { q: "Дар кадом ҳолат кор иҷро намешавад?", o: ["Қувва ҷойивазкунӣ дорад", "Ҷисм ҷойиваз намешавад", "Қувва ва ҷойивазкунӣ як самтанд", "Ҷисм ҳаракат мекунад"], c: 1 }
];

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let timeLeft = 22 * 60;
let timerId = null;

const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const options = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const testMessage = document.getElementById('testMessage');
const testArea = document.getElementById('testArea');
const resultPanel = document.getElementById('resultPanel');

function startTest() {
  currentQuestion = 0;
  selectedAnswer = null;
  score = 0;
  timeLeft = 22 * 60;
  resultPanel.classList.add('hidden');
  testArea.classList.remove('hidden');
  startTimer();
  showQuestion(0);
}

function showQuestion(index) {
  const question = questions[index];
  selectedAnswer = null;
  progress.textContent = `Савол ${index + 1} аз ${questions.length}`;
  questionNumber.textContent = `Саволи ${index + 1}`;
  questionText.textContent = question.q;
  options.innerHTML = '';
  question.o.forEach((answer, answerIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-button';
    button.textContent = `${String.fromCharCode(65 + answerIndex)}. ${answer}`;
    button.addEventListener('click', () => selectAnswer(answerIndex));
    options.appendChild(button);
  });
  testMessage.textContent = '';
  nextButton.textContent = index === questions.length - 1 ? 'Анҷом додан' : 'Саволи навбатӣ';
}

function selectAnswer(index) {
  selectedAnswer = index;
  [...options.children].forEach((button, buttonIndex) => button.classList.toggle('selected', buttonIndex === index));
  testMessage.textContent = '';
}

function nextQuestion() {
  if (selectedAnswer === null) {
    testMessage.textContent = 'Аввал як ҷавобро интихоб кунед.';
    return;
  }
  if (selectedAnswer === questions[currentQuestion].c) score++;
  currentQuestion++;
  if (currentQuestion >= questions.length) finishTest();
  else showQuestion(currentQuestion);
}

function finishTest() {
  stopTimer();
  testArea.classList.add('hidden');
  resultPanel.classList.remove('hidden');
  const percent = Math.round((score / questions.length) * 100);
  document.getElementById('resultScore').textContent = `${percent}%`;
  document.getElementById('resultDetail').textContent = `Ҷавобҳои дуруст: ${score} аз ${questions.length}`;
}

function restartTest() { startTest(); }

function startTimer() {
  stopTimer();
  updateTimer();
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) finishTest();
  }, 1000);
}

function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timer.textContent = `${minutes}:${seconds}`;
  timer.classList.toggle('warning', timeLeft <= 120);
}

nextButton.addEventListener('click', nextQuestion);
document.getElementById('restartButton').addEventListener('click', restartTest);
startTest();