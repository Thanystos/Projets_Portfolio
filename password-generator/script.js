const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getLowercase() {
    // On ne fait que retourner aléatoirement un des caractères minuscules...
    return lowerLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = '';

    // On récupère autant de caractères que la taille du mot de passe
    for(let i=0; i<len; i++) {
        // Puis on fait des vérifications
        const x = generateX();
        password += x
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    // On vérifie qu'elles sont les cases qui ont été cochées
    if(upperEl.checked) {
        // On génére un caractère associé aléatoire
        xs.push(getUppercase());
    }

    if(lowerEl.checked) {
        xs.push(getLowercase());
    }

    if(numberEl.checked) {
        xs.push(getNumber());
    }

    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    // On retourne aléatoirement le caractère d'une des fonctions autorisées
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);