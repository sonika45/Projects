let input = document.querySelector("#box");
let btn = document.querySelector("#btn");
let taskList = document.querySelector("#taskList");

btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
        
    }

    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = "X";
    li.appendChild(delBtn);

    taskList.appendChild(li);
    input.value = "";

    delBtn.addEventListener('click', () => {
        li.remove();
    });
});
