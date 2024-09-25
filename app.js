document.getElementById('add-task-btn').addEventListener('click',function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if(taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; //xoa noi dung input sau khi them
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Them nut xoa cho tung cong viec
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('Click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}