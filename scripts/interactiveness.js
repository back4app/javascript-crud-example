var mypet, textName, textAge, textMessage, query, findPet;

//buttons and form
var createPetBtn = document.getElementById("create");
var readPetBtn = document.getElementById("read");
var updatePetBtn = document.getElementById("update");
var deletePetBtn = document.getElementById("delete");
var submitPetBtn = document.getElementById("submit");

createPetBtn.onclick = createBtn;
readPetBtn.onclick = readBtn;
updatePetBtn.onclick = updateBtn;
deletePetBtn.onclick = deleteBtn;

function createBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Create New Pet";
  submitPetBtn.value = "Save";
  inputName.disabled = false;
  input_age.disabled = false;
  updatePetBtn.disabled = true;
  deletePetBtn.disabled = true;
}

function readBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Search Pet";
  inputName.disabled = false;
  input_age.value = null;
  input_age.disabled = true;
  // updatePet.disabled = true;
  // deletePet.disabled = true;
  submitPetBtn.value = "Search";
}

function updateBtn () {
  getElements();
  textMessage.innerHTML = "Pet id = " + findPet.id + " and age = " + findPet.get("age");
  form_title.innerHTML = "Update Pet";
  submitPetBtn.value = "Update";
  inputName.disabled = true;
  input_age.disabled = false;
  updatePetBtn.disabled = false;
  deletePetBtn.disabled = false;
  inputName.value = findPet.get("name");
  inputAge.value = findPet.get("age");
}

function deleteBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Delete Pet";
  submitPetBtn.value = "Delete";
  inputName.value = findPet.get("name");
  inputName.disabled = true;
  inputAge.value = findPet.get("age");
  input_age.disabled = true;
}

function getElements () {
    inputName = document.getElementById("input_name");
    inputAge = document.getElementById("input_age");
    textName = document.getElementById("input_name").value;
    textAge = document.getElementById("input_age").value;
    textMessage = document.getElementById("message");
}