const getElementById = (id) => {
    const inputField = document.getElementById(id);
    return inputField;

}

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    const inputText = getElementById('todo-text').value;
    getElementById('todo-text').value = '';

    if (inputText !== '') {
        if (!todos) {
            const todoList = [
                {
                    title: inputText,
                    completed: false
                },
            ];

            localStorage.setItem('TODOS', JSON.stringify(todoList));

        } else {
            const todoList = [
                ...todos,
                {
                    title: inputText,
                    completed: false,
                },
            ];

            localStorage.setItem('TODOS', JSON.stringify(todoList));
        }
    } else {
        alert("The field can't be empty");
    }
    render();
};


const handleClearAll = () => {
    localStorage.clear();
    render();
}

// const handleRemoveOne = () =>{
//     localStorage.removeItem(key);
//     render();
// }
const handleRemoveOne = (title) => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    const filterData = todos.filter(todo => todo.title != title);
    console.log(filterData);
    localStorage.setItem('TODOS', JSON.stringify(filterData));
    render();
}

const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    // console.log(todos);
    const todoListContainer = getElementById('todos-list');
    todoListContainer.innerHTML = '';
    if (todos !== null) {
        todos.forEach(todo => {
            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between', 'py-1');
            div.innerHTML = `
            <h3 class="text-black">${todo.title}</h3>
            <button onclick="handleRemoveOne('${todo.title}')" title="Clear One">
              <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
            </button>
        `;
            todoListContainer.appendChild(div);
        });
    }
}
render();