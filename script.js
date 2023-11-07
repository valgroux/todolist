const submitButton = document.querySelector('.button');
const ulList = document.querySelector('.list');
const addTask = document.querySelector('.input-text');

// Fonction pour créer un élément li avec un texte
function createTaskElement(text) {
    const createLi = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    createLi.classList.add('list-item');
    createLi.appendChild(textSpan);
    return createLi;
}

// Fonction pour créer un bouton avec un texte et un gestionnaire d'événements
function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (addTask.value.trim() !== '') {
        const createLi = createTaskElement(addTask.value.trim());

        const buttonsContainer = document.createElement('div');
        buttonsContainer.appendChild(createButton('Supprimer', () => {
            ulList.removeChild(createLi);
        }));
        buttonsContainer.appendChild(createButton('Done', () => {
            createLi.querySelector('span').style.textDecoration = 'line-through';
        }));

        createLi.appendChild(buttonsContainer);
        ulList.appendChild(createLi);

        addTask.value = '';
    } else {
        alert(`Merci d'indiquer une tâche`);
    }
});


