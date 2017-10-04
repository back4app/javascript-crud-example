Parse.initialize("PhmFwoYApJIR6Kz8fO1jxtlUXEmNxz9CmwQlpYma"); //PASTE YOUR Back4App APPLICATION ID
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.javaScriptKey = "oBxOBGpgHLNCmXHbLA3xo5DLKNBMWshmGOXe25ku"; //PASTE YOUR Javascript KEY

// EXPLICAR PARA NAO CRIAR CLASSE USER PORQUE ELA JÁ EXISTE = Parse.User()


var mypet, textName, textAge, textMessage, findpet, query;

var Pet = Parse.Object.extend("Pet");

//buttons
var savePet = document.getElementById("save");
var createPet = document.getElementById("create");
var readPet = document.getElementById("read");
var updatePet = document.getElementById("update");
var deletePet = document.getElementById("delete");

createPet.onclick = function () {
  //abre form input com botão submit
  getElements();
  newPet();
}

readPet.onclick = function () {
  //abre form input com botão submit
  getElements();
  //retrieve - using find first

}

updatePet.onclick = function () {
  //abre form input com botão submit
  //considerando que ja fiz o retrieve acima:
  //check retrieve
  //set (update)

}

deletePet.onclick = function () {
  //abre form input com botão submit
  //considerando que ja fiz o retrieve acima:
  //check retrieve
  //delete


}

function getElements () {
  textName = document.getElementById("input_name").value;
  textAge = document.getElementById("input_age").value;
  textMessage = document.getElementById("message");
}

//Creating/saving
function newPet () {
  mypet = new Pet(); //TODO: posso deixar local? ai eu não preciso criar uma variavel para cada newuser, eu reuso essa certo?

  mypet.set("name", textName);
  mypet.set("age", textAge);

  mypet.save(null, {
    success: function(mypet) {
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
  findpet = new Pessoa(); //TODO: posso deixar local? ai eu não preciso criar uma variavel para cada newuser, eu reuso essa certo?
  query = new Parse.Query(Pessoa);

  //como pegar objectId pelo name

  query.get("PASTE_HERE_OBJECT_ID", {
    success: function(response) {
      alert('Objeto trazido com objectId: ' + response.id);
       consultado = response;
    },
    error: function(object, error) {
      alert('Erro: ' + error.message);
    }
  });

}
