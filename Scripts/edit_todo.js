const urlParams = new URLSearchParams(window.location.search);
const todoId = urlParams.get('id');

fetch(`get_todo_details.php?id=${todoId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('todoId').value = data.id;
        document.getElementById('name').value = data.name;
        document.getElementById('description').value = data.description;
        document.getElementById('priority').value = data.priority;
        document.getElementById('dueDate').value = data.dueDate;
    })
    .catch(error => console.error('Error fetching todo details:', error));





// const urlParams = new URLSearchParams(window.location.search);
// const todoId = urlParams.get('id');

// fetch(`get_todo_details.php?id=${todoId}`)
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('todoId').value = data.id;
//         document.getElementById('name').value = data.name;
//         document.getElementById('description').value = data.description;
//         document.getElementById('priority').value = data.priority;
//     })
//     .catch(error => console.error('Error fetching todo details:', error));