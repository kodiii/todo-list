const todoList = ['check 1', 'check 2', 'check 3']
// console.log(todoList)

function renderTodos() {
    const todosContainer = document.getElementById('todos-container')
    //todosContainer.innerHTML = ''

    for (let i = 0; i < todoList.length; i++) {

        const todoEntry = document.createElement('span')
        todoEntry.className = 'single-todo'
        todoEntry.textContent = todoList[i]
        // console.log(todoEntry)

        const inputCheckBox = document.createElement('input')
        inputCheckBox.style.className = 'todoCheckBox'
        inputCheckBox.setAttribute('type', 'checkbox')
        inputCheckBox.checked = false

        todosContainer.append(todoEntry)
        todoEntry.appendChild(inputCheckBox)
    }
}

renderTodos()

const unshiftBtn = document.getElementById('unshiftBtn')
console.log(unshiftBtn)
unshiftBtn.addEventListener('submit', function () {
    const addTodo = document.getElementById('addTodo')
    console.log(addTodo.value)
    if (addTodo.value) {
        todoList.unshift(addTodo.value)
        renderTodos()
        addTodo.value = ''
    }
})