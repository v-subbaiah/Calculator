  function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") { alert("Please enter a task."); return; }

      const li = document.createElement("li");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const btnGroup = document.createElement("div");
      btnGroup.className = "btn-group";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.className = "complete-btn";
      completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });
      btnGroup.appendChild(completeBtn);
      btnGroup.appendChild(deleteBtn);
      li.appendChild(taskSpan);
      li.appendChild(btnGroup);

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  