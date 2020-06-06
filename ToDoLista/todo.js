class ToDo {
  constructor() {
    this.task = null;
    this.database = new DatabaseManager("task-database", ["first-store"]);
  }

  initializeCatalogToDo() {
    document.addEventlistener("DOMContentLoaded", this.functionCreateTasks());
  }

  functionCreateTasks() {
    this.database.getAllObjects("first-store", console.log("hey"));
  }
}

const makeTasks = new ToDo();
makeTasks.initializeCatalogToDo();
