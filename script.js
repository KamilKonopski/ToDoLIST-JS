const task = document.getElementById('task');
const btn = document.getElementById('button');
const addedContainer = document.getElementById('addedContainer')

btn.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = task.value
    addedContainer.appendChild(paragraph);
    task.value = ""

    paragraph.addEventListener('click', function () {
        addedContainer.removeChild(paragraph);
    })
});