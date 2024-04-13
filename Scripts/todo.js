window.onload = function () {
    fetchTodos();
};

function fetchTodos() {
    fetch('get_todos.php')
        .then(response => response.json())
        .then(data => {
            let todosHTML = '';
            data.forEach(todo => {
                todosHTML += `
                    <tr>
                        <td>${todo.name}</td>
                        <td>${todo.description}</td>
                        <td>${todo.priority}</td>
                        <td>${todo.dueDate}</td>
                        <td>
                            <button onclick="editTodo(${todo.id})">Edit</button>
                            <button onclick="markAsDone(${todo.id}, '${todo.name}', '${todo.description}', '${todo.priority}', '${todo.dueDate}')">Mark as Done</button>
                        </td>
                    </tr>`;
            });
            document.getElementById('todos').innerHTML = todosHTML;
        })
        .catch(error => console.error('Error fetching todos:', error));
}

function editTodo(id) {
    window.location.href = `edit_todo.html?id=${id}`;
}

function markAsDone(id, name, description, priority, dueDate) {
    fetch('mark_as_done.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id=${id}&name=${name}&description=${description}&priority=${priority}&dueDate=${dueDate}`
    })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch(error => console.error('Error marking todo as done:', error));
}