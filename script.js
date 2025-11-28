const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasksContainer = document.getElementById("tasksContainer");

const counterDiv = document.getElementById("taskCounters");

let totalTasks = 0;
let doneTasks = 0;

addBtn.addEventListener("click", addTask);

function addTask() {
    let text = input.value.trim();
    if (text === "") return;

    totalTasks++;
    updateCounter();

    let box = document.createElement("div");
    box.className = "taskBox";
    let taskText = document.createElement("div");
    taskText.className = "taskText";
    taskText.textContent = text;

    let delBtn = document.createElement("button");
    delBtn.className = "deleteBtn";
    delBtn.innerHTML = `<img src="close.png" alt="delete">`;
    delBtn.addEventListener("click", () => {
        if (box.classList.contains("done")) {
        doneTasks--;  
    }
        box.remove();
        totalTasks--;
        updateCounter();
        
    });

    let doneBtn = document.createElement("button");
    doneBtn.className = "doneBtn";
    doneBtn.innerHTML = `<img src="done.png" alt="done">`;
    doneBtn.addEventListener("click", () => {
        if (!box.classList.contains("done")) {
            box.classList.add("done");
            doneTasks++;
            doneBtn.style.display = "none";
            updateCounter();
            if (totalTasks > 0 && doneTasks === totalTasks) {
        showParty();
    }
        }
    });

    box.appendChild(taskText);
    box.appendChild(doneBtn);
    box.appendChild(delBtn);
    

    tasksContainer.prepend(box);
    input.value = "";
}

function updateCounter() {
    counterDiv.textContent = `( ${doneTasks} / ${totalTasks} )`;
    
}
function showParty() {
    const container = document.getElementById('fireworks-container');
    container.innerHTML = ''; 

    for (let x = 1; x <= 15; x++) {
        const div = document.createElement('div');
        div.className = `firework-${x}`;
        container.appendChild(div);
    }

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = "✨ You did it! Time to celebrate! ✨";
    container.appendChild(title);

    setTimeout(() => {
        container.innerHTML = '';
    }, 4000);
}

