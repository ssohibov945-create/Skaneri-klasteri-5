const QUESTIONS = [
    { q: 'Кадом калима исм аст?', o: ['зебо', 'китоб', 'тез', 'хондан'], c: 1 },
    { q: 'Ҷумлаи дурустро интихоб кунед.', o: ['Ман ба мактаб меравад.', 'Ман ба мактаб меравам.', 'Ман ба мактаб рафтан.', 'Ман ба мактаб рафтамӣ.'], c: 1 },
    { q: 'Кадом калима сифат аст?', o: ['дониш', 'донишманд', 'донишмандӣ', 'донистан'], c: 1 },
    { q: 'Феъли замони гузашта кадом аст?', o: ['мехонад', 'хоҳад хонд', 'хонд', 'хон'], c: 2 },
    { q: 'Ҷумлаи мураккабро ёбед.', o: ['Бориш борид.', 'Модар омад ва кӯдак хурсанд шуд.', 'Кӯдак хурсанд аст.', 'Осмон соф аст.'], c: 1 },
    { q: 'Кадом калима ҷонишин аст?', o: ['мо', 'сабз', 'фардо', 'мактаб'], c: 0 },
    { q: 'Шакли дуруст: «Мо ҳар рӯз ...».', o: ['мехонад', 'мехонем', 'хондам', 'хондан'], c: 1 },
    { q: 'Калимаи «ором» дар «ором сухан гуфт» кадом ҳиссаи нутқ аст?', o: ['зарф', 'исм', 'сифат', 'шумора'], c: 0 },
    { q: 'Пешоянди дуруст: «рафтан ... дӯст».', o: ['ба', 'бо', 'дар', 'аз'], c: 1 },
    { q: 'Кадом ҷумла сода аст?', o: ['Офтоб баромад ва ҳаво гарм шуд.', 'Вақте омад, ман рафтам.', 'Кӯдакон дар саҳни мактаб бозӣ мекунанд.', 'Борон борид, вале мо рафтем.'], c: 2 },
    { q: 'Синоними «зуд» кадом аст?', o: ['тез', 'оҳиста', 'дур', 'паст'], c: 0 },
    { q: 'Антоними «равшан» кадом аст?', o: ['дурахшон', 'торик', 'сафед', 'гарм'], c: 1 },
    { q: 'Синоними «зебо»-ро ёбед.', o: ['хушрӯ', 'зишт', 'калон', 'сахт'], c: 0 },
    { q: 'Антоними «баланд» кадом аст?', o: ['дароз', 'паст', 'васеъ', 'калон'], c: 1 },
    { q: 'Дар «дили бузург дорад» маънои «бузург» чист?', o: ['қадбаланд', 'саховатманд', 'пир', 'дур'], c: 1 },
    { q: 'Маънои «сар ба осмон расидан» чист?', o: ['парвоз кардан', 'хеле хурсанд шудан', 'хобидан', 'баланд гуфтан'], c: 1 },
    { q: 'Маънои «чашм ба роҳ будан» чист?', o: ['роҳро дидан', 'интизор шудан', 'сафар кардан', 'тарсидан'], c: 1 },
    { q: '«Як даст садо надорад» чӣ меомӯзонад?', o: ['Танҳо кор кардан осон аст.', 'Ҳамкорӣ зарур аст.', 'Даст садо медиҳад.', 'Садо аз кор муҳим аст.'], c: 1 },
    { q: 'Навишти дуруст кадом аст?', o: ['муаллим', 'муалим', 'муаллимм', 'муалимм'], c: 0 },
    { q: 'Кадом шакл дуруст аст?', o: ['масъала', 'масала', 'масьала', 'масъалаь'], c: 0 },
    { q: 'Калимаи дурустро ёбед.', o: ['таърих', 'таърех', 'тарих', 'таърихъ'], c: 0 },
    { q: 'Навишти дурусти номи шаҳр кадом аст?', o: ['душанбе', 'Душанбе', 'Душанбеӣ', 'ДУШАНБЕӣ'], c: 1 },
    { q: 'Кадом калима дуруст навишта шудааст?', o: ['рӯзнома', 'рузнома', 'рӯзномма', 'рӯснома'], c: 0 },
    { q: 'Шакли дуруст кадом аст?', o: ['меҳмонхона', 'мехмонхона', 'меҳмон ҳона', 'меҳмонҳона'], c: 0 },
    { q: 'Кадом навишт дуруст аст?', o: ['маориф', 'маъориф', 'мориф', 'маорифъ'], c: 0 },
    { q: 'Ҳарфи аввали номи одам чӣ гуна навишта мешавад?', o: ['ҳамеша хурд', 'бо ҳарфи калон', 'бо рақам', 'бо аломати ъ'], c: 1 },
    { q: 'Асосгузори адабиёти классикии форсу тоҷик кист?', o: ['Рӯдакӣ', 'Айнӣ', 'Турсунзода', 'Лоҳутӣ'], c: 0 },
    { q: 'Муаллифи «Шоҳнома» кист?', o: ['Саъдӣ', 'Ҳофиз', 'Фирдавсӣ', 'Рӯдакӣ'], c: 2 },
    { q: '«Гулистон» асари кист?', o: ['Саъдӣ', 'Фирдавсӣ', 'Айнӣ', 'Турсунзода'], c: 0 },
    { q: '«Бӯстон» ба кадом адиб тааллуқ дорад?', o: ['Рӯдакӣ', 'Саъдӣ', 'Ҳофиз', 'Камол'], c: 1 },
    { q: 'Кадом адиб поягузори адабиёти муосири тоҷик аст?', o: ['Садриддин Айнӣ', 'Фирдавсӣ', 'Саъдӣ', 'Рӯдакӣ'], c: 0 },
    { q: 'Мирзо Турсунзода бештар бо кадом мавзӯъ маъруф аст?', o: ['сулҳ ва дӯстӣ', 'илми тиб', 'табиати ҳайвонот', 'саёҳати баҳрӣ'], c: 0 },
    { q: 'Ғазал бештар ба кадом навъи адабӣ дохил мешавад?', o: ['назм', 'наср', 'мақол', 'луғат'], c: 0 },
    { q: 'Матни насрӣ бо чӣ навишта мешавад?', o: ['ҷумлаҳои манзум танҳо', 'ҷумлаҳои одии ривоятӣ', 'танҳо мақолҳо', 'формулаҳо'], c: 1 },
    { q: 'Матн: «Китоб инсонро донишманд мекунад ва ҷаҳонбиниашро васеъ месозад.» Ғояи асосӣ чист?', o: ['Китоб вазнин аст.', 'Китоб ба дониш ва ҷаҳонбинӣ ёрӣ медиҳад.', 'Ҷаҳонбинӣ муҳим нест.', 'Инсон бояд кам хонад.'], c: 1 },
    { q: 'Матн: «Субҳ барвақт хестан ба саломатӣ фоида дорад.» Чӣ фоида дорад?', o: ['Дер хестан', 'Барвақт хестан', 'Кам хобидан', 'Шаб кор кардан'], c: 1 },
    { q: 'Матн: «Варзиш баданро қавӣ ва рӯҳро болида мекунад.» Маънои асосӣ чист?', o: ['Варзиш зарар дорад.', 'Варзиш ба ҷисм ва рӯҳ фоида дорад.', 'Рӯҳ аз бадан ҷудо аст.', 'Танҳо варзишгарон мехонанд.'], c: 1 },
    { q: 'Кадом мақол маънои меҳнатро таъкид мекунад?', o: ['Ҳар чӣ корӣ, ҳамон даравӣ.', 'Як даст садо надорад.', 'Дӯст дар рӯзҳои сахт маълум мешавад.', 'Об аз сар гузашт.'], c: 0 },
    { q: 'Кадом жанр фикри пандомӯзро кӯтоҳ ифода мекунад?', o: ['роман', 'мақол', 'драма', 'достон'], c: 1 },
    { q: 'Дар ҷумлаи «Духтари боғайрат вазифаро иҷро кард» калимаи «боғайрат» чист?', o: ['исм', 'сифат', 'феъл', 'пешоянд'], c: 1 },
    { q: 'Кадом ҷумла мувофиқати дуруст дорад?', o: ['Донишҷӯён мехонад.', 'Донишҷӯён мехонанд.', 'Донишҷӯён хондам.', 'Донишҷӯён хондан.'], c: 1 },
    { q: 'Идомаи мақолро ёбед: «Дониш чароғи ... аст».', o: ['хона', 'ақл', 'роҳ', 'кӯҳ'], c: 1 }
];
let questionIndex = 0, score = 0, selectedAnswer = null, timerId = null, secondsLeft = 1500;
const $ = id => document.getElementById(id);
function startTest() { questionIndex = 0; score = 0; selectedAnswer = null; secondsLeft = 1500; $('test-start').classList.add('hidden'); $('test-result').classList.add('hidden'); $('test-area').classList.remove('hidden'); startTimer(); showQuestion() }
function showQuestion() { const item = QUESTIONS[questionIndex]; $('progress-text').textContent = `Савол ${questionIndex + 1} аз ${QUESTIONS.length}`; $('question-number').textContent = `Саволи ${questionIndex + 1}`; $('question-text').textContent = item.q; $('test-message').textContent = ''; $('next-button-test').textContent = questionIndex === QUESTIONS.length - 1 ? 'Анҷоми тест' : 'Навбатӣ →'; $('test-options').innerHTML = item.o.map((option, index) => `<button class="option-button" type="button" data-option="${index}">${option}</button>`).join(''); document.querySelectorAll('#test-options .option-button').forEach(button => button.addEventListener('click', () => selectAnswer(Number(button.dataset.option)))) }
function selectAnswer(index) { selectedAnswer = index; document.querySelectorAll('#test-options .option-button').forEach((button, i) => button.classList.toggle('selected', i === index)); $('test-message').textContent = 'Ҷавоб интихоб шуд. Барои идома «Навбатӣ»-ро пахш кунед.' }
function nextQuestion() { if (selectedAnswer === null) { $('test-message').textContent = 'Барои идома як ҷавобро интихоб кунед.'; return } if (selectedAnswer === QUESTIONS[questionIndex].c) score++; if (questionIndex < QUESTIONS.length - 1) { questionIndex++; selectedAnswer = null; showQuestion() } else finishTest() }
function finishTest() { stopTimer(); $('test-area').classList.add('hidden'); $('test-result').classList.remove('hidden'); const percent = Math.round(score / QUESTIONS.length * 100); $('test-result').innerHTML = `<h2>Тест ба анҷом расид</h2><span class="result-score">${score} / ${QUESTIONS.length}</span><p class="result-detail">Натиҷа: ${percent}%. Шумо метавонед тестро аз нав супоред.</p><button class="primary-button" type="button" id="restart-button">Бори дигар</button>`; $('restart-button').addEventListener('click', restartTest) }
function restartTest() { $('test-result').classList.add('hidden'); $('test-start').classList.remove('hidden'); $('timer').textContent = '25:00'; $('timer').classList.remove('warning') }
function startTimer() { stopTimer(); timerId = setInterval(() => { secondsLeft--; const minutes = Math.floor(secondsLeft / 60); const seconds = String(secondsLeft % 60).padStart(2, '0'); $('timer').textContent = `${minutes}:${seconds}`; if (secondsLeft <= 60) $('timer').classList.add('warning'); if (secondsLeft <= 0) { $('timer').textContent = '0:00'; finishTest() } }, 1000) }
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null } }
document.addEventListener('DOMContentLoaded', () => { if ($('start-button')) { $('start-button').addEventListener('click', startTest); $('next-button-test').addEventListener('click', nextQuestion) } });