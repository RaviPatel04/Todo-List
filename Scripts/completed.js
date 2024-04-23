window.onload = function () {
    fetchCompletedTodos();
};

function fetchCompletedTodos() {
    fetch('get_completed_todos.php')
        .then(response => response.json())
        .then(data => {
            let completedTodosHTML = '';
            data.forEach(todo => {
                let dueDate = todo.formatted_due_date;
                let completedDate = todo.formatted_completed_date;
                completedTodosHTML += `
                    <tr>
                        <td>${todo.name}</td>
                        <td>${todo.description}</td>
                        <td>${todo.priority}</td>
                        <td>${dueDate}</td>
                        <td>${completedDate}</td>
                    </tr>`;
            });
            document.getElementById('completedTodos').innerHTML = completedTodosHTML;
        })
        .catch(error => console.error('Error fetching completed todos:', error));
}