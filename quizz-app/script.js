const quizData = [
    {
        question: 'Quel titan de la mythologie grecque est condamné à soutenir le ciel ?',
        a: 'Prométhée',
        b: 'Cronos',
        c: 'Atlas',
        d: 'Rhéa',
        correct: 'c'
    },
    {
        question: 'Quel animal est l\'emblème des États-Unis ?',
        a: 'L\'aigle royal',
        b: 'Le vautour fauve',
        c: 'Le pygargue',
        d: 'Le milan noir',
        correct: 'c'
    },
    {
        question: 'Qui est le dieu soleil dans la mythologie égyptienne ?',
        a: 'Osiris',
        b: 'Rê',
        c: 'Horus',
        d: 'Anubis',
        correct: 'b'
    },
    {
        question: 'Quelle théorie doit-on à Isaac Newton ?',
        a: 'La théorie des cordes',
        b: 'La théorie de l\'évolution des espèces',
        c: 'La théorie atomique',
        d: 'La théorie de la gravitation universelle',
        correct: 'd'
    },
    {
        question: 'En quelle année Charlemagne se fait-il sacrer empereur ?',
        a: '756 ap.J.-C',
        b: '800 ap.J.-C',
        c: '787 ap.J.-C',
        d: '843 ap.J.-C',
        correct: 'b'
    }
]

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Vous avez obtenu ${score}/${quizData.length}</h2>
                              <button onclick="location.reload()">Rééssayer</button>`;
        }
    }   
});