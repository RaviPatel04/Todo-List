window.onload = function () {
    fetchCompletedTodos();
};

function fetchCompletedTodos() {
    fetch('get_completed_todos.php')
        .then(response => response.json())
        .then(data => {
            let completedTodosHTML = '';
            data.forEach(todo => {
                completedTodosHTML += `
                    <tr>
                        <td>${todo.name}</td>
                        <td>${todo.description}</td>
                        <td>${todo.priority}</td>
                        <td>${todo.dueDate}</td>
                        <td>${todo.completedDate}</td>
                    </tr>`;
            });
            document.getElementById('completedTodos').innerHTML = completedTodosHTML;
        })
        .catch(error => console.error('Error fetching completed todos:', error));
}