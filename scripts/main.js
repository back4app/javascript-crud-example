Parse.initialize("PhmFwoYApJIR6Kz8fO1jxtlUXEmNxz9CmwQlpYma"); //PASTE YOUR Back4App APPLICATION ID
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.javaScriptKey = "oBxOBGpgHLNCmXHbLA3xo5DLKNBMWshmGOXe25ku"; //PASTE YOUR Javascript KEY

// EXPLICAR PARA NAO CRIAR CLASSE USER PORQUE ELA JÁ EXISTE = Parse.User()

var mypet, textName, textAge, textMessage, query, petId, petName, petAge;

var Pet = Parse.Object.extend("Pet");

//buttons and form
var createPet = document.getElementById("create");
var readPet = document.getElementById("read");
var updatePet = document.getElementById("update");
var deletePet = document.getElementById("delete");

var formPets = document.getElementById("form_pets");
var formTitle = document.getElementById("form_title");
var submitPet = document.getElementById("submit");

createPet.onclick = function () {
  getElements();
  textMessage.innerHTML = "";
  form_title.innerHTML = "Create New Pet";
  submitPet.value = "Save";
  input_age.disabled = false;
  updatePet.disabled = true;
  deletePet.disabled = true;
}

readPet.onclick = function () {
  getElements();
  textMessage.innerHTML = "";
  form_title.innerHTML = "Search Pet";
  input_age.disabled = true;
  updatePet.disabled = true;
  deletePet.disabled = true;
  submitPet.value = "Search";
}

updatePet.onclick = function () {
  getElements();
  textMessage.innerHTML = "";
  form_title.innerHTML = "Update Pet";
  submitPet.value = "Update";
  input_age.disabled = false;
  updatePet.disabled = false;
  deletePet.disabled = false;
  //considerando que ja fiz o retrieve acima:
  //check retrieve
  //set (update)
}

deletePet.onclick = function () {
  getElements();
  textMessage.innerHTML = "";
  form_title.innerHTML = "Delete Pet";
  submitPet.value = "Delete";
  console.log(petId);
  //abre form input com botão submit
  //considerando que ja fiz o retrieve acima:
  //check retrieve
  //delete
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

//Creating/saving
function newPet () {
  mypet = new Pet();

  mypet.set("name", textName);
  mypet.set("age", textAge);

  mypet.save(null, {
    success: function(mypet) {
      inputName.value = "";
      inputAge.value = "";
      textMessage.innerHTML = 'Pet created with objectId: ' + mypet.id + ', Name: ' + mypet.get("name") + ', Age: ' + mypet.get("age");
      alert('Pet create with success!');
    },
    error: function(response, error) {
      textMessage.innerHTML = error.message;
      alert('Erro: ' + error.message);
    }
  });
}

//Retrieve
function retrievePet (){
  query = new Parse.Query(Pet);
  petId = "";
  if (textName === "") {
    alert("Please type a pet name to search");
  } else {
    query.equalTo("name", textName);
    query.first({
      success: function(mypet) {
        if (mypet) {
          petId = mypet.id;
          petName = mypet.get("name");
          petAge = mypet.get("age");
          textMessage.innerHTML = 'Pet name: ' + petName + ', Age: ' + petAge;
          updatePet.disabled = false;
          deletePet.disabled = false;
          inputName.value = "";
          inputAge.value = "";
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
  inputName.value = petName;
  inputAge.value = petAge;
}
