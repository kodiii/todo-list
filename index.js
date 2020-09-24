const taskInput = document.getElementById('new-task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const taskListContainer = document.getElementById('task-list-container')
const taskList = document.getElementById('task-list')

let count = 0


// create task element items
function createTask() {

    // taskList.innerHTML = ''

    const taskItem = document.createElement('li')
    const btnContainer = document.createElement('div')
    const completeBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    if (taskInput.value) {
        window.localStorage.setItem('task' + count++, taskInput.value)
        // console.log(localStorage)

        for (const key in localStorage) {
            console.log(localStorage.getItem(key))

            taskItem
            taskItem.textContent = localStorage.getItem(key)
            taskItem.className = 'task-item'

            btnContainer
            btnContainer.className = 'btn-container'
            taskItem.append(btnContainer)

            completeBtn
            completeBtn.className = 'complete-btn'
            completeBtn.innerText = 'COMPLETE'
            btnContainer.append(completeBtn)

            deleteBtn
            deleteBtn.className = 'delete-btn'
            deleteBtn.innerText = 'DELETE'
            btnContainer.append(deleteBtn)

            taskList.append(taskItem)
        }
    } else {
        alert('Please add a task.')
    }

    taskInput.value = ''

    // button event listeners to add and remove data tasks
    completeBtn.addEventListener('click', function () {
        taskItem.style.textDecoration = 'line-through'
        completeBtn.style.backgroundColor = '#f77f00'
    })

    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskItem)
    })
}
// createTask()


// event listener to create item with input text
addTaskBtn.addEventListener('click', function (e) {
    e.preventDefault()
    createTask()
})


