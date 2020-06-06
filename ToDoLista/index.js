const database = new DatabaseManager("task-database", ["first-store"]);

class ToDoList {
  constructor() {
    this.task = {
      id: null,
      title: null,
      description: null,
    };
    //this.database = new DatabaseManager("task-database", ["first-store"]);
    this.UiSelectors = {
      addButton: "[data-addTaskButton]",
      inputTitle: "[data-input]",
      textArea: "[data-area]",
      checkButton: "[data-check]",
      footer: "[data-footer]",
      deadline: "[data-date]",
    };
  }
  initializeCatalog() {
    this.addTaskButton = document.querySelector(this.UiSelectors.addButton);
    this.inputTitle = document.querySelector(this.UiSelectors.inputTitle);
    this.taskDescription = document.querySelector(this.UiSelectors.textArea);
    this.checkButtonDeadline = document.querySelector(
      this.UiSelectors.checkButton
    );
    this.footerDeadline = document.querySelector(this.UiSelectors.footer);
    this.deadlineInput = document.querySelector(this.UiSelectors.deadline);
    this.addEventListeners();
  }

  addEventListeners() {
    this.addTaskButton.addEventListener("click", () => this.functionAddTask());
    this.checkButtonDeadline.addEventListener("click", () =>
      this.showDeadlineInput()
    );
  }

  functionCreateTask(id, title, description) {
    this.task = {
      id: id,
      title: title,
      description: description,
    };
    return this.task;
  }

  functionClear() {
    (this.inputTitle.value = null), (this.taskDescription.value = null);
  }

  functionRedirect() {
    window.location.href = "http://127.0.0.1:5500/todo.html";
  }

  functionAddTask() {
    database.createObject(
      "first-store",
      this.functionCreateTask(
        new Date().getUTCMilliseconds(),
        this.inputTitle.value,
        this.taskDescription.value
      ),
      this.functionClear(),
      this.functionRedirect()
    );
  }

  showDeadlineInput() {
    console.log("tutaj");
    if (this.deadlineInput.style.display === "block") {
      this.deadlineInput.style.display = "none";
    } else {
      this.deadlineInput.style.display = "block";
    }
  }
}
const todo = new ToDoList();
todo.initializeCatalog();

class ToDo {
  constructor() {
    this.task = null;
    //this.database = new DatabaseManager("task-database", ["first-store"]);
  }

  initializeCatalogToDo() {
    document.addEventlistener("DOMContentLoaded", this.functionCreateTasks());
  }

  functionCreateTasks() {
    database.getAllObjects("first-store", console.log("hey"));
  }
}

const makeTasks = new ToDo();
makeTasks.initializeCatalogToDo();
