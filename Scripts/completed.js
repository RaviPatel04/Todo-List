window.onload = function() {
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
                    </tr>`;
            });
            document.getElementById('completedTodos').innerHTML = completedTodosHTML;
        })
        .catch(error => console.error('Error fetching completed todos:', error));
}









// // Fetch completed todos
// fetch('get_completed_todos.php')
//     .then(response => response.json())
//     .then(data => {
//         let completedTodosHTML = '';
//         data.forEach(todo => {
//             completedTodosHTML += `<div>${todo.name} - ${todo.description} - ${todo.priority}</div>`;
//         });
//         document.getElementById('completedTodos').innerHTML = completedTodosHTML;
//     })
//     .catch(error => console.error('Error fetching completed todos:', error));