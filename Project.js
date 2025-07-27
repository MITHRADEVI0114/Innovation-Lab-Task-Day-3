let tasks = [];

function printTasks() {
  if (tasks.length === 0) {
    console.log("No tasks yet.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, idx) => {
      console.log(`${idx + 1}. ${task}`);
    });
  }
  console.log(""); 
}

function addTask(task, callback) {
  tasks.push(task);
  callback();
}

function addTaskFromUser() {
  const input = prompt("Enter a new task (or leave empty to stop):");
  if (input && input.trim() !== "") {
    addTask(input.trim(), printTasks);
    addTaskFromUser();
  } else {
    console.log("No more tasks added.");
  }
}

addTaskFromUser();
