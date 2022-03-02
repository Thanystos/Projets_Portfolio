const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

// Au chargement de la page, on vérifie le contenu du LS et on l'affiche si on trouve quelque chose
if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea class="${text ? 'hidden' : ''}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // Ces 2 lignes n'ont de sens que si on a du contenu dans le LS. On le copie dans textarea et on permet l'utilisation de marker
    textArea.value = text;
    main.innerHTML = marked.parse(text);

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked.parse(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() {
    // Je récupère le texte de toutes les notes
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    // Pour chacunes des notes, je les stocke dans le tableau notes
    notesText.forEach(note => {
        notes.push(note.value);
    });

    // Que j'enregistre dans le LS
    localStorage.setItem('notes', JSON.stringify(notes));
}



