Parse.initialize("PhmFwoYApJIR6Kz8fO1jxtlUXEmNxz9CmwQlpYma"); //PASTE YOUR Back4App APPLICATION ID
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.javaScriptKey = "oBxOBGpgHLNCmXHbLA3xo5DLKNBMWshmGOXe25ku"; //PASTE YOUR Javascript KEY

var Pet = Parse.Object.extend("Pet");
var mypet, textName, textAge, textMessage, query, findPet;

//buttons and form
var createPet = document.getElementById("create");
var readPet = document.getElementById("read");
var updatePet = document.getElementById("update");
var deletePet = document.getElementById("delete");
var formPets = document.getElementById("form_pets");
var formTitle = document.getElementById("form_title");
var submitPet = document.getElementById("submit");

createPet.onclick = createBtn;
readPet.onclick = readBtn;
updatePet.onclick = updateBtn;
deletePet.onclick = deleteBtn;

function createBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Create New Pet";
  submitPet.value = "Save";
  input_age.disabled = false;
  updatePet.disabled = true;
  deletePet.disabled = true;
}

function readBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Search Pet";
  input_age.value = null;
  input_age.disabled = true;
  updatePet.disabled = true;
  deletePet.disabled = true;
  submitPet.value = "Search";
}

function updateBtn () {
  getElements();
  textMessage.innerHTML = findPet.id;
  form_title.innerHTML = "Update Pet";
  submitPet.value = "Update";
  input_age.disabled = false;
  updatePet.disabled = false;
  deletePet.disabled = false;
  inputName.value = findPet.get("name");
  inputAge.value = findPet.get("age");
}

function deleteBtn () {
  getElements();
  textMessage.innerHTML = null;
  form_title.innerHTML = "Delete Pet";
  submitPet.value = "Delete";
  inputName.value = findPet.get("name");
  inputAge.value = findPet.get("age");
}

submitPet.onclick = function () {
  getElements();
  if (submitPet.value === "Save") {
    newPet();
  } else if (submitPet.value === "Search") {
    retrievePet();
  } else if (submitPet.value === "Update") {
    changePet();
  } else if (submitPet.value === "Delete") {
    erasePet();
  }
}


function getElements () {
  inputName = document.getElementById("input_name");
  inputAge = document.getElementById("input_age");
  textName = document.getElementById("input_name").value;
  textAge = document.getElementById("input_age").value;
  textMessage = document.getElementById("message");
}



function newPet () {
  mypet = new Pet();

  mypet.set("name", textName);
  mypet.set("age", textAge);

  mypet.save(null, {
    success: function(mypet) {
      inputName.value = null;
      inputAge.value = null;
      textMessage.innerHTML = 'Pet created with objectId: ' + mypet.id + ', Name: ' + mypet.get("name") + ', Age: ' + mypet.get("age");
      alert('Pet create with success!');
    },
    error: function(response, error) {
      textMessage.innerHTML = error.message;
      alert('Erro: ' + error.message);
    }
  });
}



function retrievePet (){
  findPet = new Pet ();
  query = new Parse.Query(Pet);
  if (textName == null) {
    alert("Please type a pet name to search");
  } else {
    query.equalTo("name", textName);
    query.first({
      success: function(mypet) {
        if (mypet) {
          findPet = mypet;
          textMessage.innerHTML = 'Pet name: ' + mypet.get("name") + ', Age: ' + mypet.get("age");
          updatePet.disabled = false;
          deletePet.disabled = false;
          inputName.value = null;
          inputAge.value = null;
        } else {
          alert("Nothing found, please try again");
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}



function changePet(){
  findPet.set('name', textName);
  findPet.set('age', textAge);

  findPet.save(null, {
    success: function(response) {
      alert('Objeto salvo com objectId: ' + response.id);
      textMessage.innerHTML = 'Pet name: ' + response.get("name") + ', Age: ' + response.get("age");

    },
    error: function(response, error) {
      alert('Erro: ' + error.message);
    }
  });
}


function erasePet() {
  findPet.set('name', textName);
  findPet.set('age', textAge);

  findPet.destroy({
    success: function(response) {
      alert('Objeto: apagado com sucesso');
      findPet = null;
      textAge = null;
      textName = null;
      textMessage = null;
      updatePet.disabled = true;
      deletePet.disabled = false;
      read();
    },
    error: function(response, error) {
      alert('Erro: '+ error.message);
    }
  });
}
