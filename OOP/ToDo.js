class ToDo {
  constructor() {
    this.form = document.querySelector("form");
    this.ul = document.querySelector("ul");
    this.taskNumber = document.querySelector("h1 span");
    this.listItems = document.getElementsByClassName("task");
    this.input = document.querySelector("input");
  }
  removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
  };

  createTask() {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + "<button>Usuń</button>";
    ul.appendChild(task);
    input.value = "";
    // const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector("button").addEventListener("click", removeTask);
    this.form.addEventListener("submit", createTask);
  }
}
