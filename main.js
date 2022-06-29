const form = document.getElementById('form');
const txt = document.getElementById('text');
const date = document.getElementById('date');
const num = document.getElementById('number');
const tableBody = document.getElementById('table-body');
const error = document.getElementById('error');

const data = {};

// spitting the data to the screen
const spitData = () => {
    tableBody.innerHTML += `
        <tr class="table-row">
            <td colspan="2">${data.name}</td>
            <td>${data.date}</td>
            <td>${data.amount}</td>
            <td><button onclick="deleteItem(this)" id="delete">x</button></td>
        </tr>
    `;
    txt.value = '';
    date.value = '';
    num.value = '';
}

// accepting data
const getData = () => {
    data['name'] = txt.value;
    data['date'] = date.value;
    data['amount'] = `$${num.value}`;
    // console.log(data);
    spitData();
}

// form validation
const formValidate = () => {
    if ((txt.value === '' && num.value === '') || (txt.value !== '' && num.value === '') || (txt.value === '' && num.value !== '')) {
        // console.log('* are supposed to be empty');
        error.innerHTML = '<strong>* cannot be empty</strong>';
    }
    else {
        getData();
        error.innerHTML = '';
    }
}

// adding eventListener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidate();
});

// adding delete function to the delete button
const deleteItem = (x) => {
    x.parentElement.parentElement.remove();
    // console.log('deleted');
}

// deleting the whole list

const clearAll = () => {
    // let parent = document.getElementById('table-body');
    // let children = parent.getElementsByTagName('tr');
    if (tableBody.innerText === '') {
        console.log('no list to delete');
        error.innerHTML = '<small>No list to delete</small>';
    }
    else {
        // parent.removeChild(children);
        tableBody.innerHTML = '';
        // console.log('success');
    }
    // console.log('no list to delete');
    // error.innerHTML = '<small>cant delete empty list</small>';
}