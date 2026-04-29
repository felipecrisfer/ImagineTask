let tasks = [];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task";

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <p>${task.text}</p>
            <button onclick="toggleTask(${index})">
                ${task.completed ? "Desfazer" : "Concluir"}
            </button>
        `;

        list.appendChild(div);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("A tarefa não pode ser vazia!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}