const textarea = document.querySelector("#prompt-textarea");
const addTodoBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector(".tasks-list");

function checkPrompt() {
    textarea.addEventListener('input', function () {
        if (textarea.value !== "") {
            addTodoBtn.style.backgroundColor = "black";
            addTodoBtn.removeAttribute("disabled");
        }
        else {
            addTodoBtn.style.backgroundColor = "#d7d7d7";
            addTodoBtn.setAttribute("disabled", "disabled");
        }
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight}px`;
    });
}

checkPrompt();

function addTodo() {

    addTodoBtn.addEventListener("click", () => {
        if (textarea.value !== "") {
            taskList.innerHTML += ` <div class="task">
            <span class="normal"></span>
            <p>${textarea.value}</p>
            <i onclick="showMenu(this)" class="ri-more-2-line options-btn"></i>
            <div class="menu">
                <li onclick="deleteTask(this)"><i class="ri-delete-bin-line"></i> Delete</li>
                <li onclick="editTodo(this)"><i class="ri-pencil-line"></i> Edit</li>
                <li onclick="changeColor(this,'#ff00003e','#ff0000')"><span class="red"></span> Urgent</li>
                <li onclick="changeColor(this,'#ffff0038','#daa520')"><span class="yellow"></span> Important</li>
                <li onclick="changeColor(this,'#87cfeb51','#0f99d0')"><span class="blue"></span> Assigned</li>
            </div>
        </div>`;
            textarea.value = "";
        }
    });

}

addTodo();

let saveTodoBtn = document.querySelector("#save-todo");
let discardChanges = document.querySelector("#discard-todo");
let editContainer = document.querySelector(".edit-todo-div");
let editTextArea = document.querySelector("#edit-textarea");

function editTodo(elem) {

    let target = elem.parentNode.parentNode.childNodes[3];
    editContainer.style.display = "flex";
    editTextArea.value = target.innerHTML;

    saveTodoBtn.addEventListener("click", () => {
        if (editTextArea.value !== "") {
            target.innerHTML = editTextArea.value;
            editContainer.style.display = "none";
        }
    });

    discardChanges.addEventListener("click", () => {
        if (editTextArea.value !== "") {
            editContainer.style.display = "none";
        }
    })

}

function changeColor(elem, bgColor, border) {
    let targetElem = elem.parentNode.parentNode.childNodes;
    targetElem[1].style.backgroundColor = bgColor;
    targetElem[1].style.border = `1px solid ${border}`;
}

function deleteTask(elem) {
    let targetElem = elem.parentNode.parentNode;
    targetElem.remove();
}

let flag = false;
function showMenu(elem) {
    let targetElem = elem.parentNode.childNodes[7];
    if (flag === false) {
        gsap.to(targetElem, {
            visibility: "visible",
            opacity: 1
        })
        flag = true;
    }
    else if (flag === true) {
        gsap.to(targetElem, {
            visibility: "hidden",
            opacity: 0.5
        })
        flag = false;
    }
}