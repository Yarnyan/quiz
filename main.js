/*Все ответы*/
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

/* Все ответы в одной */
const optionElements = document.querySelectorAll('.option');    
const voprosName = document.getElementById('voprosName')


const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestion = document.getElementById('number-of-all-questions');

let indexOfQuestion = 0, //вопрос
    indexOfPage = 0; //страница

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0; //результат 

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Выбери улицы, в названиях которых есть указания на профессии (которые названы в честь ведущих профессий):',
        voprosName: 'Улицы',
        options: [
            'Металлургов',
            'Чкалова',
            'Прокатчиков',
            'Папанинцев',
            'Строителей',
            'Космонавтов',
        ],
        rightAnswer: 3
    },
    {
        question: 'Дворец ледовых видов спорта находится на улице:',
        voprosName: 'Улицы',
        options: [
            'Ленина',
            'Ватутина',
            'проспекте Ильича',
            'Емлина',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какая улица названа в честь космонавта:',
        voprosName: 'Улицы',
        options: [
            'Емлина',
            'Володарского',
            'Луначарского',
            'Гагарина',
        ],
        rightAnswer: 3
    },
    {
        question: 'На фотографии изображена улица:',
        voprosName: 'Улицы',
        options: [
            'Ленина',
            'Вайнера',
            '1 Мая',
            'Герцена',
        ],
        rightAnswer: 3
    },
    {
        question: 'Исторически самая старая часть города называется:',
        voprosName: 'Улицы',
        options: [
            'Шайтанка',
            'Первомайка',
            'Ельничный',
            'Самстрой',
        ],
        rightAnswer: 3
    },
    {
        question: 'На фотографии изображен:',
        voprosName: 'Улицы',
        options: [
            'памятник В.И.Ленину',
            '«Якорь»',
            'Ю.Фучику',
            'Д.Карбышеву',
        ],
        rightAnswer: 3
    },
    {
        question: 'Памятник «Единство фронта и тыла» находится:',
        voprosName: 'Улицы',
        options: [
            'У центральной проходной Новотрубного завода',
            'На площади Победы',
            'В центральном парке культуры и отдыха',
            'На Украине',
        ],
        rightAnswer: 3
    },
    {
        question: 'Корабельная роща получила свое название:',
        voprosName: 'Улицы',
        options: [
            'Потому что в ней строили корабли',
            'Потому что в ней росли сосны, из которых делали мачты для кораблей',
            'В ней росли сосны, годные для изготовления корабельных мачт',
            'Исторически так сложилось',
        ],
        rightAnswer: 3
    },
    {
        question: 'Как первоуральцы называют инновационный культурный центр:',
        voprosName: 'Улицы',
        options: [
            'Шайба',
            'Колесо',
            'Окно',
            'Бутылка',
        ],
        rightAnswer: 3
    },
    {
        question: 'Современная стела «Европа-Азия» построена из:',
        voprosName: 'Улицы',
        options: [
            'Дерева',
            'Камня',
            'Гранита',
            'Мрамора',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоначально наш населенный пункт назывался:',
        voprosName: 'История',
        options: [
            'Первоуральск',
            'Хромпик',
            'Васильево-Шайтанский завод',
            'Ревда',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какое животное изображено на гербе города:',
        voprosName: 'История',
        options: [
            'Хорек',
            'Куница',
            'Белка',
            'Соболь',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первый железоделательный и чугуноделательный завод в Васильево-Шайтанском поселке выпустил первый чугун в',
        voprosName: 'История',
        options: [
            '17 веке',
            '18 веке',
            '19 веке',
            '20 веке',
        ],
        rightAnswer: 3
    },
    {
        question: 'Что символизирует соболь на гербе Первоуральска:',
        voprosName: 'История',
        options: [
            'Историческую роль Демидовых в освоении Урала',
            'Особенности местной фауны',
            'Черты уральского характера',
            'Птицу',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоуральск получил статус города и современное название в:',
        voprosName: 'История',
        options: [
            '19 веке',
            '18 веке',
            '20 веке',
            '21 веке',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоуральск стоит на реке:',
        voprosName: 'География',
        options: [
            'Кама',
            'Исеть',
            'Волга',
            'Чусовая',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоуральск находиться в:',
        voprosName: 'География',
        options: [
            'Европе',
            'Азии',
            'Африке',
            'Аргентине',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какие деревья не растут в окрестностях Первоуральска:',
        voprosName: 'География',
        options: [
            'Сосна',
            'Ель',
            'Береза',
            'Ясень',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоуральск – это:',
        voprosName: 'География',
        options: [
            'Город',
            'Посёлок',
            'Посёлок городского типа',
            'Село',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первоуральск находится в:',
        voprosName: 'География',
        options: [
            'Пермской области',
            'Кунгурской области',
            'Свердловской области',
            'Челябинской области',
        ],
        rightAnswer: 3
    },
    {
        question: 'Первый владелец завода в поселке Васильево-Шайтанский завод:',
        voprosName: 'Люди',
        options: [
            'Строганов',
            'Турчанинов',
            'Демидов',
            'Раимов',
        ],
        rightAnswer: 3
    },
    {
        question: '«Уральский трубник» - команда суперлиги по:',
        voprosName: 'Люди',
        options: [
            'Хоккею с мячом',
            'Хоккею с шайбой',
            'Футболу',
            'Баскетболу',
        ],
        rightAnswer: 3
    },
    {
        question: 'Жителей нашего города называют:',
        voprosName: 'Люди',
        options: [
            'Первоуральцы',
            'Первики',
            'Первоуряне',
            'Первочане',
        ],
        rightAnswer: 3
    },
    {
        question: 'Шайтан в переводе означает:',
        voprosName: 'Люди',
        options: [
            'Татарин',
            'Черт',
            'Лесной дух',
            'Узбек',
        ],
        rightAnswer: 3
    },
    {
        question: 'На какой фотографии изображен Новотрубный завод:',
        voprosName: 'Промышленность',
        options: [
            '1',
            '2',
            '3',
            '4',
        ],
        rightAnswer: 3
    },
    {
        question: 'Что не выпускают в Первоуральске:',
        voprosName: 'Промышленность',
        options: [
            'Хромовые соединения',
            'Трубы',
            'Огнеупорный кирпич',
            'Тракторы',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какой завод является самым крупным, градообразующим?',
        voprosName: 'Промышленность',
        options: [
            'Динасовый',
            'Хромпиковый',
            'Новотрубный',
            'Горного оборудования',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какого транспорта нет в нашем городе:',
        voprosName: 'Промышленность',
        options: [
            'Трамвай',
            'Автобус',
            'Автомобиля',
            'Троллейбус',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какого завода нет в Первоуральске:',
        voprosName: 'Промышленность',
        options: [
            'Хромпик',
            'НТМК',
            'Динас',
            'НТЗ',
        ],
        rightAnswer: 3
    },
];

numberOfAllQuestion.innerHTML = questions.length  // количество вопросов всех вопросов


const load = () => {
    question.innerHTML = questions[indexOfQuestion].question //вопрос
    voprosName.innerHTML = questions[indexOfQuestion].voprosName //категория
    
    option1.innerHTML = questions[indexOfQuestion].options[0]; //Варианты ответов
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3]; 

    numberOfQuestion.innerHTML = indexOfPage + 1; // номер страницы 
    indexOfPage++; // некст страница
}


let i = 0;

const question_run = () => {
    if(i === questions.length) {
        quizOver()
    } else {
        indexOfQuestion = i;
        load();
        i++;
    }
}

const randomQuestion = () => {
    console.log("===>>> randomQuestion");
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length) {
        quizOver()
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion()
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};

const numberQq = () => {
    indexOfQuestion++;
    load();
}

const checkAnswer = el => {
    console.log("===>>> checkAnswer");
    // console.log(el.target.dataset.id);
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

const disabledOptions = () => {
    console.log("===>>> disabledOptions");
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct')
        }
    })
}

const enableOptions = () => {                //обнуление стилей
    console.log("===>>> enableOptions");

    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
};

const answerTracker = () => {               //счёт
    console.log("===>>> answerTracker");
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {     //стиль счёта
    console.log("===>>> updateAnswerTracker");
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {                   //валидация ответов
    console.log("===>>> validate");
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Вам нужно выбрать один из вариантов ответа');
    } else {
        question_run();
        enableOptions();
    }
};



btnNext.addEventListener('click', validate);

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length
};

const TryAgain = () => {
    window.location.reload()
};

btnTryAgain.addEventListener('click', TryAgain);

window.addEventListener('load', () => {
    question_run();
    answerTracker();
})