const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    // Si on recharge la page et qu'on essaie d'afficher le contenu du LS
    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoEl = document.createElement('li');
        
        // Si on a récupérer une tâche dans le LS et qu'elle est complétée...
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');

            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = '';

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');
    const todos = [];

    // On prend toutes les tâches
    todosEl.forEach(todoEl => {
        // Et pour chacunes d'entres elles, on crée un objet qui les représente grâce à leur contenu et leur état
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}