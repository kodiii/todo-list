const taskInput = document.getElementById('new-task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const taskListContainer = document.getElementById('task-list-container')
const taskList = document.getElementById('task-list')

// localstorage initiate variable
let savedData
// variable to serialize localstorage keys
let count = 0

// function elementsData() {

// }

window.onload = function () {

    if (savedData !== null) {

        for (let i = 0; i < localStorage.length; i++) {
            // console.log(localStorage.key(i))
            let key = localStorage.key(i)

            // create and append all new elements with localStorage
            // data
            const taskItem = document.createElement('li')
            taskItem.textContent = localStorage.getItem(key)
            taskItem.className = 'task-item'

            const btnContainer = document.createElement('div')
            btnContainer.className = 'btn-container'
            taskItem.append(btnContainer)

            const completeBtn = document.createElement('button')
            completeBtn.className = 'complete-btn'
            completeBtn.innerText = 'COMPLETE'
            btnContainer.append(completeBtn)

            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'delete-btn'
            deleteBtn.innerText = 'DELETE'
            btnContainer.append(deleteBtn)

            taskList.append(taskItem)

            // button event listeners to mark as complete and remove data tasks
            completeBtn.addEventListener('click', function () {
                taskItem.style.textDecoration = 'line-through'
                completeBtn.style.backgroundColor = '#f77f00'
            })

            deleteBtn.addEventListener('click', function () {
                localStorage.removeItem(key)
                taskList.removeChild(taskItem)
            })
        }
    }
}

// create task element items
function createTask(e) {
    e.preventDefault()

    // clear taskList element in way to not duplicate with
    // the rendered elements onload
    taskList.innerHTML = ''

    if (taskInput.value) {

        savedData = localStorage.setItem('task' + count++, taskInput.value)
        // console.log(localStorage)

        for (let i = 0; i < localStorage.length; i++) {
            // console.log(localStorage.key(i))
            let key = localStorage.key(i)

            // create and append all new elements with localStorage
            // data
            const taskItem = document.createElement('li')
            taskItem.textContent = localStorage.getItem(key)
            taskItem.className = 'task-item'

            const btnContainer = document.createElement('div')
            btnContainer.className = 'btn-container'
            taskItem.append(btnContainer)

            const completeBtn = document.createElement('button')
            completeBtn.className = 'complete-btn'
            completeBtn.innerText = 'COMPLETE'
            btnContainer.append(completeBtn)

            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'delete-btn'
            deleteBtn.innerText = 'DELETE'
            btnContainer.append(deleteBtn)

            taskList.append(taskItem)

            // buttons event listeners to mark completed task
            // and delete tasks from localstorage
            completeBtn.addEventListener('click', function () {
                taskItem.style.textDecoration = 'line-through'
                completeBtn.style.backgroundColor = '#f77f00'
            })

            deleteBtn.addEventListener('click', function () {
                localStorage.removeItem(key)
                taskList.removeChild(taskItem)
            })
        }

    } else {
        alert('Please add a task.')
    }

    // clear input field value
    taskInput.value = ''

}

// event listener to create item with input text
addTaskBtn.addEventListener('click', createTask)


