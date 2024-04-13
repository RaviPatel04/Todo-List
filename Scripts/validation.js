function validateForm() {
<<<<<<< HEAD
    const name = document.getElementById('name').value;
    const text = document.getElementById('qty').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').innerText = "⚠️Please enter a todo name";
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    if (text === "") {
        document.getElementById('qtyError').innerText = "⚠️Please enter a todo description";
        isValid = false;
    } else {
        document.getElementById('qtyError').innerText = "";
    }

    if (priority === "--") {
        document.getElementById('priorityError').innerText = "⚠️Please select a priority";
        isValid = false;
    } else {
        document.getElementById('priorityError').innerText = "";
    }

    if (dueDate === "") {
        document.getElementById('dueDateError').innerText = "⚠️Please select a due date";
        isValid = false;
    } else {
        document.getElementById('dueDateError').innerText = "";
    }

    return isValid;
}




// function validateForm() {
//     let isValid = true;

//     const name = document.getElementById('name').value.trim();
//     const text = document.getElementById('qty').value.trim();
//     const priority = document.getElementById('priority').value;

//     document.getElementById('nameError').innerText = '';
//     document.getElementById('qtyError').innerText = '';
//     document.getElementById('priorityError').innerText = '';

//     if (name === '') {
//         document.getElementById('nameError').innerText = '⚠️Please enter a Todo.';
//         isValid = false;
//     }

//     if (text === '') {
//         document.getElementById('qtyError').innerText = '⚠️Please enter a Todo Description.';
//         isValid = false;
//     }

//     if (priority === '--') {
//         document.getElementById('priorityError').innerText = '⚠️Please select a Priority.';
//         isValid = false;
//     }
//     return isValid;
// }
=======
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('qty').value.trim();
    const priority = document.getElementById('priority').value;

    document.getElementById('nameError').innerText = '';
    document.getElementById('qtyError').innerText = '';
    document.getElementById('priorityError').innerText = '';

    if (name === '') {
        document.getElementById('nameError').innerText = '⚠️Please enter a Todo.';
        isValid = false;
    }

    if (text === '') {
        document.getElementById('qtyError').innerText = '⚠️Please enter a Todo Description.';
        isValid = false;
    }

    if (priority === '--') {
        document.getElementById('priorityError').innerText = '⚠️Please select a Priority.';
        isValid = false;
    }
    return isValid;
}
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
