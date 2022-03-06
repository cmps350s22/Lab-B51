/*Get the references of the html elements that we want to interact with*/
const todoInput = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-todo')
const todoListContainer = document.querySelector('#todolist-container')
const clearTodos = document.querySelector('#clear-todos')

addBtn.addEventListener('click', addTodo)
clearTodos.addEventListener('click', clearAllTodos)
let todos = []
showTodoList()

function clearAllTodos() {
    todos = []
    showTodoList()
}

function addTodo() {
    //simple todo object
    const todo = {
        id: Date.now(),
        title: todoInput.value,
        completed: false
    }
    todoInput.value = ''
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    showTodoList()
}

function showTodoList() {
    if (!localStorage.getItem('todos')) todos = []
    else todos = JSON.parse(localStorage.getItem('todos'))

    const todosHTML = todos.map(todo => todoToHTML(todo)).join(' ')
    todoListContainer.innerHTML = todosHTML
}

function todoToHTML(todo) {
    return `
        <div class="form-group todo" id="id-${todo.id}">
            <p class="todo-title" id="title-${todo.id}">${todo.title}</p>
            <input class="completed icon" type="checkbox"
               onclick="completed(${todo.id})">
            <i class="fa fa-trash icon" onclick="deleteTodoItem(${todo.id})"></i>
        </div> 
   `
}

function completed(todoId) {
    const classList = document.querySelector(`#title-${todoId}`).classList
    const index = todos.findIndex(todo => todo.id == todoId)
    todos[index].completed = !todos[index].completed
    localStorage.setItem('todos', JSON.stringify(todos))
    if (classList.contains('strike'))
        classList.remove('strike')
    else
        classList.add('strike')
}

function deleteTodoItem(todoId) {
    const index = todos.findIndex(todo => todo.id == todoId)
    todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
    showTodoList()
}

