const form = document.querySelector('#task-form')
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')

//load all event listener
loadEventListeners()

//load all event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask)
}
//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('enter an input');
    }
// create a list element    
const li = document.createElement('li')
//add a class
li.className = 'collection-item'
//create text node and ppend to li
li.appendChild(document.createTextNode(taskInput.value))
//create a new link to element
const link = document.createElement('a')
//add class
link.className = 'delete-item secondary-content'
//add icon htnl
link.innerHTML = '<i class ="fa fa-remove"></i>'
//appebd the link to li
li.appendChild(link);

//append li to ul
taskList.appendChild(li)

//clear input
taskInput.value= '';
    e.preventDefault();

}

