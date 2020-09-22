const taskInput = document.getElementById('new-task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')

// create task element items
function createTaskElement() {
    taskInput
    const taskItem = document.createElement('li')
    taskItem.className = 'task-item'
    taskItem.textContent = taskInput.value
    taskList.append(taskItem)
    // console.log(taskItem)

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerText = 'DELETE'
    taskItem.append(deleteBtn)
}

// delete task
function removeTask() {
    const tasklist = document.getElementById('task-list')
    const taskItem = document.getElementsByClassName('task-item')
    // console.log(deleteBtn)
}

removeTask()

// event listener to create item with input text
addTaskBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (taskInput.value) {
        createTaskElement()
        taskInput.value = ''
    } else {
        alert('Please add a task.')
    }
})

const deleteBtn = document.getElementsByTagName('button')

deleteBtn.addEventListener('click', function (e) {
    e.preventDefault()
    // removeTask()

})

