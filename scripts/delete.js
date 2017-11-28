Parse.initialize("JfMeozLs8UZFxaZibAiZhlpDl5OZkyjVwzdxLfqw"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "fi6LWURzRGmTg7neZfI79MJaB2QHjWhiZ4nVFvKD"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("Pet");

// Pass the name of the pet you want to delete
var textName = "myName";

readThenDelete();

function readThenDelete() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first({
        success: function (pet) {
            if (pet) {
                console.log('Pet found with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
                update(pet);
            } else {
                console.log("Nothing found, please try again");
                return null;
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
            return null;
        }
    });
}

function update(foundPet) {
    foundPet.destroy({
        success: function(response) {
            console.log('Pet '+ foundPet.get("name") + ' erased successfully');
        },
        error: function(response, error) {
            console.log('Error: '+ error.message);
        }
    });
}