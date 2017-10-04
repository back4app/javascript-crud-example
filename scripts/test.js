Parse.initialize("My_App_ID");
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.javaScriptKey = "My_JS_ID";


//Create /save
var Pessoa = Parse.Object.extend("Pessoa");
var pessoa1 = new Pessoa();

pessoa1.set("idade", 27);
pessoa1.set("nome", "Ingrid Um");
pessoa1.set("desenvolvedor", true);

pessoa1.save(null, {
  success: function(response) {
    alert('Novo objeto criado com objectId: ' + response.id);
  },
  error: function(response, error) {
    alert('Erro: ' + error.message);
  }
});

//Criar um objeto já salvando
var Pessoa2 = Parse.Object.extend("Pessoa");
var pessoa2 = new Pessoa();

pessoa2.save({
  idade: 37,
  nome: "Ingrid Dois",
  desenvolvedor: false
}, {
  success: function(response) {
    alert('Novo objeto criado com objectId: ' + response.id);
  },
  error: function(response, error) {
    alert('Erro: ' + error.message);
  }

});

//Apagando Objeto
consultado.destroy({
  success: function(response) {
  	console.log('Objeto apagado');
  },
  error: function(response, error) {
  	console.log('ERRO: ' + error.message);
  }
});



//Update
pessoa2.set('idade', 38);

pessoa2.save(null, {
  success: function(response) {
    alert('Objeto salvo com objectId: ' + response.id);
  },
  error: function(response, error) {
    alert('Erro: ' + error.message);
  }
});

//Retrieve em um objeto
var Pessoa = Parse.Object.extend("Pessoa");
var consultado = new Pessoa();
var query = new Parse.Query(Pessoa);
query.get("PASTE_HERE_OBJECT_ID", {
  success: function(response) {
    alert('Objeto trazido com objectId: ' + response.id);
	   consultado = response;
  },
  error: function(object, error) {
    alert('Erro: ' + error.message);
  }
});

//Uso do Get
var idade = consultado.get("idade");
var nome = consultado.get("nome");
var desenvolvedor = consultado.get("desenvolvedor");

console.log(idade);
console.log(nome);
console.log(desenvolvedor);

//Reserved
var objectId = consultado.id;
var updatedAt = consultado.updatedAt;
var createdAt = consultado.createdAt;

console.log(objectId);
console.log(updatedAt);
console.log(createdAt);

// If you need to refresh an object you already have with the latest data that is
// in the Parse Cloud, you can call the fetch method like so:
consultado.fetch({
  success: function(response) {
        // The object was refreshed successfully.
    console.log("Sucesso!");
  },
  error: function(response, error) {
    // The object was not refreshed successfully.
// error is a Parse.Error with an error code and message.
    console.log("Erro! " + error.message);
  }
});

var idade = consultado.get("idade");
var nome = consultado.get("nome");
var desenvolvedor = consultado.get("desenvolvedor");

console.log(idade);
console.log(nome);
console.log(desenvolvedor);

//Update
consultado.set("idade", 27);
consultado.save();

//Arrays
consultado.addUnique("skills", "Python");
consultado.addUnique("skills", "Java");
consultado.save(null, {
  success: function(response) {
    alert('Objeto salvo com objectId: ' + response.id);
  },
  error: function(response, error) {
    alert('Erro: ' + error.message);
  }
});



//Consultando
carro1.fetch({
  success: function(response) {
    console.log("Sucesso!");
  },
  error: function(response, error) {
    console.log("Erro! " + error.message);
  }
});

var pessoa4 = carro1.get("parent");
pessoa4.fetch({
  success: function(post) {
    var nome = post.get("nome");
    console.log(nome);
  }
});
