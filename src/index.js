document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    applyToForm(e.target['new-task-description'].value)
    e.target.reset();
  })
});

function applyToForm(text){
  let p = document.createElement('p');
  p.textContent = text + ' ';
  document.querySelector('#tasks').append(p);
}






  


 /** // OO solution
document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const taskList = new TaskList();
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  //attach event listeners

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});*/