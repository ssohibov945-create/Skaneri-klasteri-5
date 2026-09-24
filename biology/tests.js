const questions = [
    { q: "Воҳиди хурдтарини сохторӣ ва вазифавии организм чист?", o: ["Бофта", "Ҳуҷайра", "Узв", "Система"], c: 1 },
    { q: "Кадом қисми ҳуҷайра маълумоти ирсиро нигоҳ медорад?", o: ["Ядро", "Рибосома", "Вакуола", "Мембрана"], c: 0 },
    { q: "Фотосинтез асосан дар кадом органоиди ҳуҷайраи растанӣ мегузарад?", o: ["Митохондрия", "Хлоропласт", "Лизосома", "Ядро"], c: 1 },
    { q: "Митохондрия дар ҳуҷайра чӣ вазифаи асосӣ дорад?", o: ["Ҳосил кардани энергия", "Нигоҳ доштани об", "Сохтани девори ҳуҷайра", "Интиқоли хун"], c: 0 },
    { q: "Кадом бофта сатҳи бадан ва узвҳоро мепӯшонад?", o: ["Мушакӣ", "Асабӣ", "Эпителӣ", "Пайвасткунанда"], c: 2 },
    { q: "Вазифаи асосии бофтаи мушакӣ кадом аст?", o: ["Ҳаракат", "Муҳофизати генҳо", "Ҳосил кардани тухм", "Гузаронидани нур"], c: 0 },
    { q: "Органи асосии фотосинтез дар аксари растаниҳо кадом аст?", o: ["Реша", "Барг", "Гул", "Мева"], c: 1 },
    { q: "Реша барои растанӣ пеш аз ҳама чӣ кор мекунад?", o: ["Гирифтани обу намакҳо", "Ҳосил кардани тухм", "Ҷалб кардани ҳашарот", "Нафасгирии ҳайвон"], c: 0 },
    { q: "Гардолудшавӣ чист?", o: ["Паҳншавии реша", "Гузаштани гард ба гардгирак", "Тақсимшавии барг", "Афзоиши мева"], c: 1 },
    { q: "Кадом гурӯҳи ҳайвонот сутунмӯҳра дорад?", o: ["Муҳрадорон", "Кирмҳо", "Ҳашарот", "Моллюскаҳо"], c: 0 },
    { q: "Ҳашарот чанд ҷуфт пой дорад?", o: ["2 ҷуфт", "3 ҷуфт", "4 ҷуфт", "5 ҷуфт"], c: 1 },
    { q: "Моҳӣ бо кадом узв нафас мегирад?", o: ["Шуш", "Пӯст", "Ғалсама", "Трахея"], c: 2 },
    { q: "Кадом узв хунро ба тамоми бадан меронад?", o: ["Дил", "Меъда", "Гурда", "Ҷигар"], c: 0 },
    { q: "Системаи нафаскашии инсон аз кадом узв газҳоро мегирад?", o: ["Шуш", "Гурда", "Рӯдаи борик", "Мағзи сар"], c: 0 },
    { q: "Мубодилаи газҳо дар шуш асосан дар куҷо мегузарад?", o: ["Алвеолаҳо", "Найчаи ғизо", "Гулӯ", "Дил"], c: 0 },
    { q: "Ҳозимаи ғизо дар инсон аз куҷо оғоз мешавад?", o: ["Меъда", "Даҳон", "Рӯдаи ғафс", "Ҷигар"], c: 1 },
    { q: "Ҷаббиши қисми зиёди моддаҳои ғизоӣ дар куҷо сурат мегирад?", o: ["Рӯдаи борик", "Рӯдаи ғафс", "Меъда", "Гулӯ"], c: 0 },
    { q: "Гурдаҳо кадом вазифаро иҷро мекунанд?", o: ["Филтр кардани хун ва ҳосил кардани пешоб", "Насос кардани хун", "Гирифтани оксиген", "Ҳосил кардани сафро"], c: 0 },
    { q: "Системаи асабро кадом узв бештар идора мекунад?", o: ["Мағзи сар", "Дил", "Шуш", "Пӯст"], c: 0 },
    { q: "Моддаи ирсии асосии ҳуҷайра чӣ ном дорад?", o: ["ДНК", "Об", "Глюкоза", "Крахмал"], c: 0 },
    { q: "Ген чист?", o: ["Қисми ДНК, ки аломатро муайян мекунад", "Як узви бадан", "Навъи бофта", "Моеъи ҳуҷайра"], c: 0 },
    { q: "Аломати ирсӣ аз волидон ба фарзанд чӣ тавр мегузарад?", o: ["Ба воситаи генҳо", "Ба воситаи об", "Танҳо бо ғизо", "Ба воситаи ҳаво"], c: 0 },
    { q: "Ҳуҷайраҳои ҷинсӣ дар одам чанд хромосома доранд?", o: ["46", "23", "92", "12"], c: 1 },
    { q: "Ҳангоми тақсимшавии митоз аз як ҳуҷайра чанд ҳуҷайраи духтарӣ пайдо мешавад?", o: ["1", "2", "3", "4"], c: 1 },
    { q: "Тағйироти ирсӣ ва ғайриирсӣ ба кадом мафҳум дохил мешаванд?", o: ["Тағйирпазирӣ", "Нафаскашӣ", "Ҳозима", "Гардолудшавӣ"], c: 0 },
    { q: "Эволютсия чист?", o: ["Инкишофи таърихии организмҳо", "Фақат афзоиши вазн", "Ҳаракати хун", "Тақсимшавии об"], c: 0 },
    { q: "Кадом олим назарияи интихоби табииро инкишоф дод?", o: ["Чарлз Дарвин", "Иван Павлов", "Луи Пастер", "Грегор Мендел"], c: 0 },
    { q: "Экология чиро меомӯзад?", o: ["Муносибати организмҳо бо муҳит", "Танҳо сохти ҳуҷайра", "Танҳо устухонҳо", "Ҳаракати сайёраҳо"], c: 0 },
    { q: "Маҷмӯи организмҳои як намуд, ки дар як ҳудуд зиндагӣ мекунанд, чӣ ном дорад?", o: ["Популятсия", "Бофта", "Узв", "Биосфера"], c: 0 },
    { q: "Истеҳсолкунандагон дар экосистемаҳо одатан киҳоянд?", o: ["Растаниҳои сабз", "Шикорчиён", "Занбӯруғҳо", "Паразитҳо"], c: 0 },
    { q: "Занҷири ғизоӣ бо кадом гурӯҳ оғоз мешавад?", o: ["Истеҳсолкунандагон", "Таҷзиякунандагон", "Ҳайвоноти дарранда", "Паразитҳо"], c: 0 },
    { q: "Бактерияҳо чӣ гуна организмҳо мебошанд?", o: ["Прокариотҳои якҳуҷайра", "Ҳайвоноти серҳуҷайра", "Растаниҳои гулдор", "Вирусҳои калон"], c: 0 },
    { q: "Вирус барои афзоиш ба чӣ ниёз дорад?", o: ["Ҳуҷайраи зинда", "Танҳо нур", "Хоки хушк", "Оби бе намак"], c: 0 },
    { q: "Ваксина барои чӣ истифода мешавад?", o: ["Ташаккули масуният", "Баланд кардани ҳарорат", "Кам кардани оксиген", "Иваз кардани хун"], c: 0 },
    { q: "Кадом витамини офтобӣ ном дорад?", o: ["A", "B", "C", "D"], c: 3 },
    { q: "Устухонҳо бо мушакҳо чӣ вазифаро якҷоя иҷро мекунанд?", o: ["Таъмини ҳаракат", "Ҳозима", "Филтр кардани хун", "Гарм кардани ҳаво"], c: 0 },
    { q: "Моддаи асосии девори ҳуҷайраи растанӣ кадом аст?", o: ["Селлюлоза", "Гемоглобин", "Гликоген", "Кератин"], c: 0 },
    { q: "Кадом раванди ҳуҷайравӣ оксигенро истифода бурда энергия ҳосил мекунад?", o: ["Нафаскашии ҳуҷайравӣ", "Фотосинтез", "Гардолудшавӣ", "Транспиратсия"], c: 0 },
    { q: "Гемоглобин дар хун асосан кадом газро интиқол медиҳад?", o: ["Оксиген", "Нитроген", "Гелий", "Гидроген"], c: 0 },
    { q: "Биосфера чист?", o: ["Қисми Замин, ки дар он ҳаёт вуҷуд дорад", "Танҳо қабати хок", "Танҳо оби баҳр", "Системаи асаб"], c: 0 }
];

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let correctAnswers = 0;
let timeLeft = 20 * 60;
let timerInterval = null;

const progressText = document.getElementById('progressText');
const timerElement = document.getElementById('timer');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextButton = document.getElementById('nextButton');
const testMessage = document.getElementById('testMessage');
const testArea = document.getElementById('testArea');
const resultPanel = document.getElementById('resultPanel');
const scoreValue = document.getElementById('scoreValue');
const percentValue = document.getElementById('percentValue');
const restartButton = document.getElementById('restartButton');

function startTest() {
    currentQuestionIndex = 0;
    selectedAnswerIndex = null;
    correctAnswers = 0;
    timeLeft = 20 * 60;
    testArea.classList.remove('hidden');
    resultPanel.classList.add('hidden');
    startTimer();
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = questions[index];
    selectedAnswerIndex = null;
    progressText.textContent = `Савол ${index + 1} аз ${questions.length}`;
    questionNumber.textContent = `Саволи ${index + 1}`;
    questionText.textContent = question.q;
    testMessage.textContent = '';
    optionsContainer.innerHTML = '';
    question.o.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-button';
        button.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}`;
        button.addEventListener('click', () => selectAnswer(optionIndex));
        optionsContainer.appendChild(button);
    });
    nextButton.textContent = index === questions.length - 1 ? 'Анҷом додани тест' : 'Саволи навбатӣ →';
}

function selectAnswer(index) {
    selectedAnswerIndex = index;
    document.querySelectorAll('.option-button').forEach((button, buttonIndex) => {
        button.classList.toggle('selected', buttonIndex === index);
    });
    testMessage.textContent = '';
}

function nextQuestion() {
    if (selectedAnswerIndex === null) {
        testMessage.textContent = 'Аввал як ҷавобро интихоб кунед.';
        return;
    }
    if (selectedAnswerIndex === questions[currentQuestionIndex].c) correctAnswers++;
    if (currentQuestionIndex === questions.length - 1) {
        finishTest();
        return;
    }
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function finishTest() {
    stopTimer();
    const percent = Math.round((correctAnswers / questions.length) * 100);
    testArea.classList.add('hidden');
    resultPanel.classList.remove('hidden');
    scoreValue.textContent = `${correctAnswers} / ${questions.length}`;
    percentValue.textContent = `${percent}% ҷавобҳои дуруст`;
}

function restartTest() {
    startTest();
}

function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) finishTest();
    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(Math.max(0, timeLeft) / 60);
    const seconds = Math.max(0, timeLeft) % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.classList.toggle('warning', timeLeft <= 60);
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartTest);
startTest();
