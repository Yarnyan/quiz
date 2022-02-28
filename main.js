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

const QuestionImg = document.getElementById('QuestionImg');
const QuestionAudio = document.getElementById('audioQuestion');


const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Выбери улицу, в названии которой есть указание на профессию',
        voprosName: 'Улицы',
        options: [
            'Прокатчиков',
            'Чкалова',
            'Емлина',
            'Папанинцев',
        ],
        rightAnswer: 0,
        QuestionImg: '',
        QuestionAudio: 'Audio/2(2).m4a'
    },
    {
        question: 'Дворец ледовых видов спорта находится на улице',
        voprosName: 'Улицы',
        options: [
            'Ленина',
            'Ватутина',
            'проспекте Ильича',
            'Емлина',
        ],
        rightAnswer: 2,
        QuestionImg: 'https://sun9-33.userapi.com/impg/XUDB_945zyNr2cWCL0z49qYNkGgt7NtVhMFZpQ/MD2omb0HOE8.jpg?size=999x446&quality=96&sign=282b28bf78bdc6a0654dfc33441f72fa&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Какая улица названа в честь космонавта?',
        voprosName: 'Улицы',
        options: [
            'Емлина',
            'Володарского',
            'Луначарского',
            'Гагарина',
        ],
        rightAnswer: 3,
        QuestionImg: 'https://sun9-68.userapi.com/impg/wE2dGG5M6OA-JaMLSjJRd2RfVUzn0IkhQTN-MA/SfVKHJOmKjg.jpg?size=1513x2048&quality=96&sign=42ccd2e09e79a2f542640e045b184a70&type=album',
        QuestionAudio: ''
    },
    {
        question: 'На фотографии изображена улица',
        voprosName: 'Улицы',
        options: [
            'Ленина',
            'Вайнера',
            '1 Мая',
            'Герцена',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-88.userapi.com/impg/wH11oGm6RiV00LjKM70PZZsSz9DZAh7fuTWIxg/CzY8K4_VMQA.jpg?size=1024x768&quality=96&sign=455ef320c4cecb336bba88ac7d22b6b7&type=album',
        QuestionAudio: ''
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
        rightAnswer: 0,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'На фотографии изображен памятник:',
        voprosName: 'Достопримечательности',
        options: [
            'В.И.Ленину',
            'Ю.Фучику',
            'Д.Карбышеву',
            'А.Пушкину',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-15.userapi.com/impg/mNfeEbUGVU-QH3IFCet_eYtIjhyWmwYP0GneVQ/-Al61kiaV7g.jpg?size=1125x1500&quality=96&sign=46c1db6bd02ba4602f6ba4a79a2be3db&type=album',
        QuestionAudio: 'Audio/3.m4a'
    },
    {
        question: 'Памятник «Единство фронта и тыла» находится',
        voprosName: 'Достопримечательности',
        options: [
            'у центральной проходной Новотрубного завода',
            'на площади Победы',
            'в центральном парке культуры и отдыха',
            'у пруда',
        ],
        rightAnswer: 2,
        QuestionImg: 'https://sun9-62.userapi.com/impg/2PPjD6Z7Rbdz5mpxCX669NmkddyqQu9mLnmQHg/dCaGEFHTHPc.jpg?size=1620x2160&quality=96&sign=700c13e6043bb63e1a47a101e146eb0b&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Корабельная роща получила свое название, потому что',
        voprosName: 'Достопримечательности',
        options: [
            'в ней строили корабли',
            'в ней росли сосны',
            'в ней изготавливали корабельные  мачты',
            'в ней росли сосны, годные для изготовления корабельных мачт',
        ],
        rightAnswer: 3,
        QuestionImg: 'https://sun9-51.userapi.com/impg/QZQv2pN1jTXr9mdSSyxeCx_rPAJ-Fd8WAA2aXA/U1q44jw0UIE.jpg?size=900x600&quality=96&sign=421b6c3c47c666b9ca99639686d7f599&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Как первоуральцы называют инновационный культурный центр?',
        voprosName: 'Достопримечательности',
        options: [
            'Шайба',
            'Колесо',
            'Окно',
            'Бутылка',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-65.userapi.com/impg/_fOh8pwRVbIXrIzr1uIGBqpTLcpKbs2BQuHSGQ/FSYGaZWiC3g.jpg?size=1275x850&quality=96&sign=b74edb2b92adf4adf4c7c75dbd2c7812&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Современная стела «Европа-Азия» построена из',
        voprosName: 'Достопримечательности',
        options: [
            'камня',
            'гранита',
            'мрамора',
            'земли',
        ],
        rightAnswer: 2,
        QuestionImg: 'https://sun9-64.userapi.com/impg/ehp0_SpQWpSy9TepJy6ueMOpJUBQMO-EcJiIUw/S7ih-svvMjg.jpg?size=1170x658&quality=96&sign=929d8e86d954cb1bec8bd1d273fff2b7&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Первоначально наш населенный пункт назывался',
        voprosName: 'История',
        options: [
            'Первоуральск',
            'Хромпик',
            'Васильево-Шайтанский завод',
            'Ревда',
        ],
        rightAnswer: 2,
        QuestionImg: 'https://sun9-66.userapi.com/impg/OoxI_xkTN3PJd72HWTddxhAF8HA1q2IhDg3gog/L95l6lCMotE.jpg?size=1152x652&quality=96&sign=9ec701c4c5f24f31c9b9e6146d8dfab4&type=album',
        QuestionAudio: 'Audio/4.m4a'
    },
    {
        question: 'Какое животное изображено на гербе города?',
        voprosName: 'История',
        options: [
            'Хорек',
            'Куница',
            'Белка',
            'Соболь',
        ],
        rightAnswer: 3,
        QuestionImg: 'https://sun9-8.userapi.com/impg/gXiQhTnpQJ-1yiwN86KyUWFsxFLnVK4Luvswsg/2CmbFEeK79E.jpg?size=600x600&quality=96&sign=01470bb2ab2dd06d71272e7b8ca57d26&type=album',
        QuestionAudio: ''
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
        rightAnswer: 1,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Что символизирует соболь на гербе Первоуральска?',
        voprosName: 'История',
        options: [
            'Историческую роль Демидовых в освоении Урала',
            'Особенности местной фауны',
            'Черты уральского характера',
            'Природу Урала',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-1.userapi.com/impg/I0OdqDXSBmhvelFtCDhIcvsYCobuYgYpg9dyMA/Dr7rzjDaDLw.jpg?size=1332x850&quality=96&sign=de6d6dee4cd98f90f19ebea74f425b6d&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Первоуральск получил статус города и современное название в',
        voprosName: 'История',
        options: [
            '19 веке',
            '18 веке',
            '20 веке',
            '21 веке',
        ],
        rightAnswer: 2,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Первоуральск стоит на реке',
        voprosName: 'География',
        options: [
            'Кама',
            'Исеть',
            'Волга',
            'Чусовая',
        ],
        rightAnswer: 3,
        QuestionImg: 'https://sun9-33.userapi.com/impg/TlSHSCxtbUXD1sNUsHFt0sY9hs6IAmMnG9NUkA/ThGkTlyCWvA.jpg?size=1024x680&quality=96&sign=af6592e2e4db0aed0560685efe98c4ac&type=album',
        QuestionAudio: 'Audio/5.m4a'
    },
    {
        question: 'Первоуральск находится в',
        voprosName: 'География',
        options: [
            'Европе',
            'Азии',
            'Африке',
            'Казахстане',
        ],
        rightAnswer: 0,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Какие деревья не растут в окрестностях Первоуральска?',
        voprosName: 'География',
        options: [
            'Сосна',
            'Ель',
            'Береза',
            'Ясень',
        ],
        rightAnswer: 3,
        QuestionImg: 'https://sun9-34.userapi.com/impg/o0AwA09f9UEVgDMJOSRJlkG-EstwGRVIsM_wmA/QU5kLAJq9Do.jpg?size=1200x900&quality=96&sign=7e20114604b5e53b9f88fd0a57672f6a&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Первоуральск – это',
        voprosName: 'География',
        options: [
            'Город',
            'Посёлок',
            'Посёлок городского типа',
            'Село',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-66.userapi.com/impg/nDXmtrODT275xOGvhn82NKtKniHljo-biF0ALQ/4c6ZZmhzHls.jpg?size=1920x1280&quality=96&sign=9744b284a52f437643bcba8d5f157cc6&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Самое крупное животное в уральских лесах – это',
        voprosName: 'География',
        options: [
            'Рысь',
            'Медведь',
            'Лось',
            'Волк',
        ],
        rightAnswer: 2,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Первоуральск находится в',
        voprosName: 'География',
        options: [
            'Пермской области',
            'Кунгурской области',
            'Свердловской области',
            'Челябинской области',
        ],
        rightAnswer: 2,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Первый владелец завода в поселке Васильево-Шайтанский завод - ',
        voprosName: 'Люди',
        options: [
            'Строганов',
            'Турчанинов',
            'Демидов',
            'Яковлев',
        ],
        rightAnswer: 2,
        QuestionImg: 'https://sun9-82.userapi.com/impg/_tCLRwh1XmfIqoshA_BRL00lt9obW4iYq9VerQ/FXvnQ2tZtcU.jpg?size=600x806&quality=96&sign=627f09a4b7635dd0ec058b3a69e39bac&type=album',
        QuestionAudio: 'Audio/6.m4a'
    },
    {
        question: 'Уральский трубник» - команда суперлиги по',
        voprosName: 'Люди',
        options: [
            'хоккею с мячом',
            'хоккею с шайбой',
            'футболу',
            'баскетболу',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-57.userapi.com/impg/G6maK5kfFW88vuh83O7bpJhqHDrt6sHW-lA_NQ/mMei_7YTzlM.jpg?size=1320x708&quality=96&sign=9c20a72afa556fb74a0324fa9cb544de&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Жителей нашего города называют',
        voprosName: 'Люди',
        options: [
            'первоуральцы',
            'первики',
            'первоуряне',
            'первочане',
        ],
        rightAnswer: 0,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Шайтан в переводе означает',
        voprosName: 'Люди',
        options: [
            'татарин',
            'черт',
            'лесной дух',
            'узбек',
        ],
        rightAnswer: 1,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Какой завод изображён на фото?',
        voprosName: 'Промышленность',
        options: [
            'Новотрубный завод',
            'НТМК',
            'Динас',
            'Хромпик',
        ],
        rightAnswer: 0,
        QuestionImg: 'https://sun9-64.userapi.com/impg/nmB0E4WLbPC9Poh6rnqS3oTkAKEGQG2O-3dURw/CbGF77fQPyw.jpg?size=1200x848&quality=96&sign=68a22d3e3b8c1f50304150c390bcc446&type=album',
        QuestionAudio: 'Audio/7.m4a'
    },
    {
        question: 'Что не выпускают в Первоуральске?',
        voprosName: 'Промышленность',
        options: [
            'Хромовые соединения',
            'Трубы',
            'Огнеупорный кирпич',
            'Тракторы',
        ],
        rightAnswer: 3,
        QuestionImg: '',
        QuestionAudio: ''
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
        rightAnswer: 2,
        QuestionImg: 'https://sun9-49.userapi.com/impg/BTw79FlNN4ub6pau0dBA-2dW_UJjebYdxHmqKQ/IBLLeKTkkMw.jpg?size=600x418&quality=96&sign=6e8d1f3f2903bd163c5a27ad4ef2f6fe&type=album',
        QuestionAudio: ''
    },
    {
        question: 'Какого транспорта нет в нашем городе?',
        voprosName: 'Промышленность',
        options: [
            'Трамвай',
            'Автобус',
            'Автомобиля',
            'Самоката',
        ],
        rightAnswer: 0,
        QuestionImg: '',
        QuestionAudio: ''
    },
    {
        question: 'Какого завода нет в Первоуральске?',
        voprosName: 'Промышленность',
        options: [
            'Хромпик',
            'НТМК',
            'Динас',
            'НТЗ',
        ],
        rightAnswer: 1,
        QuestionImg: '',
        QuestionAudio: ''
    },
];

numberOfAllQuestion.innerHTML = questions.length  // количество вопросов всех вопросов



const load = () => {
    question.innerHTML = questions[indexOfQuestion].question //вопрос
    voprosName.innerHTML = questions[indexOfQuestion].voprosName //категория
    
    if(questions[indexOfQuestion].QuestionImg == '') { //проверка на пустую строку для ссылки на фото
        console.log('===>>> CheckImg')
        QuestionImg.classList.add('noactive'), 
        question.classList.add('questionNoActive')
     } else {
        question.classList.remove('questionNoActive')
        QuestionImg.classList.remove('noactive'), 
        QuestionImg.src = questions[indexOfQuestion].QuestionImg
     }

     if(questions[indexOfQuestion].QuestionAudio == '') { //проверка на пустую строку для ссылки на аудио
        console.log('===>>> CheckAudio')
        QuestionAudio.classList.add('audioNoActive')
     } else {
        QuestionAudio.classList.remove('audioNoActive')
        QuestionAudio.src = questions[indexOfQuestion].QuestionAudio
     }

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


/*
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
*/


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
