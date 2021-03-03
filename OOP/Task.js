document.addEventListener(
  "DOMContentLoaded",
  () => {
    class Task {
      constructor() {
        this.tasksList = [];
      }
      addTask(input) {
        //console.log("heyyyy");
        const titleTask = input.value;
        if (titleTask === "") return;
        const task = document.createElement("li");
        task.className = "task";
        task.innerHTML = titleTask + "<button>Usuń</button>";

        this.tasksList.push(task);

        this.tasksNumber = document.querySelector("h1 span");
        this.tasksNumber.textContent = this.tasksList.length;
        this.tasksList.forEach((element, key) => {
          element.dataset.key = key;
          ul.appendChild(element);
        });
        task.querySelector("button").addEventListener("click", this.removeTask);
        //console.log(this.tasksList);
      }

      removeTask = (e) => {
        console.log("remove");
        e.target.parentNode.remove();
        const index = e.target.parentNode.dataset.key;

        this.tasksList.splice(index, 1);
        this.tasksNumber = document.querySelector("h1 span");
        this.tasksNumber.textContent = this.tasksList.length;
        ul.textContent = "";
        this.tasksList.forEach((element, key) => {
          element.dataset.key = key;
          ul.appendChild(element);
        });
        console.log(this.tasksList);
      };
    }
    let todo = new Task();
    input = document.querySelector("input");
    //console.log("sheeeyt");
    form = document.querySelector("form");
    ul = document.querySelector("ul");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      todo.addTask(input);
      console.log("hey");
    });
  },
  false
);
