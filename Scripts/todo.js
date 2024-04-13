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
<<<<<<< HEAD
                        <td>${todo.dueDate}</td>
                        <td>
                            <button onclick="editTodo(${todo.id})">Edit</button>
                            <button onclick="markAsDone(${todo.id}, '${todo.name}', '${todo.description}', '${todo.priority}', '${todo.dueDate}')">Mark as Done</button>
=======
                        <td>
                            <button onclick="editTodo(${todo.id})">Edit</button>
                            <button onclick="markAsDone(${todo.id}, '${todo.name}', '${todo.description}', '${todo.priority}')">Mark as Done</button>
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
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

<<<<<<< HEAD
function markAsDone(id, name, description, priority, dueDate) {
=======
function markAsDone(id, name, description, priority) {
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
    fetch('mark_as_done.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
<<<<<<< HEAD
        body: `id=${id}&name=${name}&description=${description}&priority=${priority}&dueDate=${dueDate}`
=======
        body: `id=${id}&name=${name}&description=${description}&priority=${priority}`
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
    })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch(error => console.error('Error marking todo as done:', error));
}






<<<<<<< HEAD
// window.onload = function () {
//     fetchTodos();
// };

// function fetchTodos() {
//     fetch('get_todos.php')
//         .then(response => response.json())
//         .then(data => {
//             let todosHTML = '';
//             data.forEach(todo => {
//                 todosHTML += `
//                     <tr>
//                         <td>${todo.name}</td>
//                         <td>${todo.description}</td>
//                         <td>${todo.priority}</td>
//                         <td>
//                             <button onclick="editTodo(${todo.id})">Edit</button>
//                             <button onclick="markAsDone(${todo.id}, '${todo.name}', '${todo.description}', '${todo.priority}')">Mark as Done</button>
//                         </td>
//                     </tr>`;
//             });
//             document.getElementById('todos').innerHTML = todosHTML;
//         })
//         .catch(error => console.error('Error fetching todos:', error));
// }

// function editTodo(id) {
//     window.location.href = `edit_todo.html?id=${id}`;
// }

// function markAsDone(id, name, description, priority) {
//     fetch('mark_as_done.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `id=${id}&name=${name}&description=${description}&priority=${priority}`
//     })
//         .then(response => {
//             if (response.redirected) {
//                 window.location.href = response.url;
//             }
//         })
//         .catch(error => console.error('Error marking todo as done:', error));
// }






=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327






// // Fetch todos
// fetch('get_todos.php')
//     .then(response => response.json())
//     .then(data => {
//         let todosHTML = '';
//         data.forEach(todo => {
//             todosHTML += `<div>${todo.name} - ${todo.description} - ${todo.priority} <button onclick="markAsDone(${todo.id}, '${todo.name}', '${todo.description}', '${todo.priority}')">Mark as Done</button></div>`;
//         });
//         document.getElementById('todos').innerHTML = todosHTML;
//     })
//     .catch(error => console.error('Error fetching todos:', error));

// // Function to mark todo as done
// function markAsDone(id, name, description, priority) {
//     fetch('mark_as_done.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `id=${id}&name=${name}&description=${description}&priority=${priority}`
//     })
//     .then(response => {
//         if (response.redirected) {
//             window.location.href = response.url;
//         }
//     })
//     .catch(error => console.error('Error marking todo as done:', error));
// }