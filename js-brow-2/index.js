
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const taskList = document.querySelector('.task-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const deleteAllButton = document.querySelector('.delete-all-btn');

form.addEventListener('submit', handleSubmit);
taskList.addEventListener('click', handleCheckTask);
deleteAllButton.addEventListener('click', handleDeleteAll);
filterButtons.forEach(button => button.addEventListener('click', handleFilter));

function handleSubmit(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task !== '') {
        addTask(task);
        input.value = '';
    }
}

function addTask(task) {
    const taskId = Date.now().toString();
    const taskItem = createTaskItem(taskId, task);
    taskList.appendChild(taskItem);
}

function createTaskItem(id, title) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.id = id;
    taskItem.innerHTML = `
  <label class="task-checkbox">
  <input type="checkbox" class="checkbox">
  <span class="checkmark"></span>
</label>
    <span class="task-title">${title}</span>
  `;
    return taskItem;
}

function handleCheckTask(event) {
    const checkbox = event.target;
    if (checkbox.classList.contains('checkbox')) {
        const taskItem = checkbox.closest('.task-item');
        taskItem.classList.toggle('completed');
    }
}

function handleDeleteAll() {
    const completedTasks = document.querySelectorAll('.task-item.completed');
    completedTasks.forEach(taskItem => taskItem.remove());
}

function handleFilter(event) {
    const filter = event.target.dataset.filter;
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(taskItem => {
        if (filter === 'all') {
            taskItem.style.display = 'flex';
        } else if (filter === 'pending') {
            taskItem.style.display = taskItem.classList.contains('completed') ? 'none' : 'flex';
        } else if (filter === 'completed') {
            taskItem.style.display = taskItem.classList.contains('completed') ? 'flex' : 'none';
        }
    });
}


