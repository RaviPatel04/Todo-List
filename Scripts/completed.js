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
<<<<<<< HEAD
                        <td>${todo.dueDate}</td>
                        <td>${todo.completedDate}</td>
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
                    </tr>`;
            });
            document.getElementById('completedTodos').innerHTML = completedTodosHTML;
        })
        .catch(error => console.error('Error fetching completed todos:', error));
}




<<<<<<< HEAD
// window.onload = function () {
//     fetchCompletedTodos();
// };

// function fetchCompletedTodos() {
//     fetch('get_completed_todos.php')
//         .then(response => response.json())
//         .then(data => {
//             let completedTodosHTML = '';
//             data.forEach(todo => {
//                 completedTodosHTML += `
//                     <tr>
//                         <td>${todo.name}</td>
//                         <td>${todo.description}</td>
//                         <td>${todo.priority}</td>
//                     </tr>`;
//             });
//             document.getElementById('completedTodos').innerHTML = completedTodosHTML;
//         })
//         .catch(error => console.error('Error fetching completed todos:', error));
// }




=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327




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