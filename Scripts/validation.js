function validateForm() {
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