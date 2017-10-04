var saveTask = document.getElementById("saveTask");
var editTask = document.getElementById("editTask");
var task_edit = document.getElementById("task_edit");

function newTask () {
  var table = document.getElementById("taskTable");
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var text = document.getElementById("task_input").value;
  var label = document.createTextNode("Edit");

  var celltext = document.createTextNode(text);
  var editButton = document.createElement("button");
  //cria botao
  editButton.appendChild(label);
  editButton.name = "teste";
  editButton.type = "button";

  cell.appendChild(celltext);
  row.appendChild(cell);

  cell.appendChild(editButton);
  row.appendChild(cell);
  table.appendChild(row);

  // <button type="button" name="editTask" id="editTask">Edit Task</button>
  //appen botao
  //append celltext
}

function save () {
  // //First things first, we need our text:
  // var node = document.createElement("Li");
  // var text = document.getElementById("task_input").value;
  // var textnode = document.createTextNode(text);
  // node.appendChild(textnode);
  //
  // //Now use appendChild and add it to the list!
  // document.getElementById("taskList").appendChild(node);
  newTask();
}

function edit () {
  // get task
  // editTask

  // save();

  // if (task_edit.className === "") {
  //   task_edit.className = "hide";
  // }
}


//Defining a listener for our button, specifically, an onclick handler
saveTask.onclick = function () {
  save();
}


editTask.addEventListener("click", function() {
  if (task_edit.className === "hide" && task_input.className === "") {
    task_edit.className = "";
    task_input.className = "hide";

    //edit();

  }
});

saveTask.addEventListener("click", function() {

});
