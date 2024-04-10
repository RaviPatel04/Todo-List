function validateForm() {
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