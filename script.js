const addButton = document.getElementById('add-button');
const input = document.getElementById('text');
const ul = document.getElementById('ul');
const emptyList = document.getElementsByClassName('empty-list');

addButton.addEventListener('click', addList);
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addList();
    }
})

function addList() {
    if (input.value === '') {
        alert('Please input something!');
    }
    else {
        const delButton = document.createElement('button');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');
        delButton.textContent = 'Delete';
        delButton.classList.add('delete-button');
        li.innerHTML = `<span class='span-text'>${input.value}</span>`;
        li.prepend(checkbox);
        li.appendChild(delButton);

        ul.appendChild(li);
        check();
        input.value = '';

        delButton.addEventListener('click', () => {
            delButton.parentElement.remove();
            check();
        })
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        })
    }

}


function check() {
    let li = document.createElement('li');
    li.innerHTML = '(example: do laundry, study, etc.)';
    li.setAttribute('class', 'empty-list');
    if (ul.children.length > 1) {
        Array.from(emptyList).forEach(element => {
            element.remove();
        });
    } else if (ul.children.length == 0) {
        ul.appendChild(li);
    }
}
check();
