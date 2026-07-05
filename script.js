/*const inputBox = document.querySelector("#input-box");

const btn = document.querySelector("#btn");

const listContainer = document.querySelector(".list-container");

const list = document.createElement("li");*/

/*listContainer.innerHTML = `<li class="checked">Task1</li>`;*/

/*listContainer.innerHTML = `${inputBox.value}`;

listContainer.appendChild(list);

btn.addEventListener("click", () => {
    if (inputBox.value === ""){
        alert("You must write something!");
    }else{
     listContainer.appendChild(document.createElement("li")).innerText = `${inputBox.value}`;

    console.log("btn clicked");
    let span = document.createElement("span");
    

    span.innerHTML = `<span class="material-symbols-outlined">
cancel
</span>`;
    list.appendChild(span);

    }
    inputBox.value = "";
});*/
const inputBox = document.querySelector("#input-box");
const btn = document.querySelector("#btn");
const listContainer = document.querySelector(".list-container");

// Add Task Function
function addTask() {
    const task = inputBox.value.trim();

    if (task === "") {
        alert("You must write something!");
        return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.innerText = task;

    // Create delete button
    const span = document.createElement("span");
    span.innerHTML = `<span class="material-symbols-outlined">cancel</span>`;
    span.style.float = "right";
    span.style.cursor = "pointer";

    // Append delete button
    li.appendChild(span);

    // Append task
    listContainer.appendChild(li);

    // Clear input
    inputBox.value = "";
}

// Button Click
btn.addEventListener("click", addTask);

// Press Enter
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Event Delegation
listContainer.addEventListener("click", (e) => {

    // Delete task
    if (
        e.target.classList.contains("material-symbols-outlined") &&
        e.target.innerText === "cancel"
    ) {
        e.target.parentElement.parentElement.remove();
        return;
    }

    // Check/Uncheck task
    const li = e.target.closest("li");

    if (li) {
        li.classList.toggle("checked");
    }
});

// Save data to localStorage
function saveData() {
    localStorage.setItem("todo-data", listContainer.innerHTML);

}
// Load data from localStorage
function showTask() {
    const savedData = localStorage.getItem("todo-data");

    if (savedData) {
        listContainer.innerHTML = savedData;
    }
    
}

// Load tasks when page opens
showTask();
saveData();
