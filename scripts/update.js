Parse.initialize("JfMeozLs8UZFxaZibAiZhlpDl5OZkyjVwzdxLfqw"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "fi6LWURzRGmTg7neZfI79MJaB2QHjWhiZ4nVFvKD"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("Pet");

// Test with different values of name and age and see the ParseDashboard to see the changes
var textName = "myName";
var textAge = 15;

readThenUpdate();

function readThenUpdate() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first({
        success: function (pet) {
            if (pet) {
                console.log('Pet found with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
                update(pet);
            } else {
                console.log("Nothing found, please try again");
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}

function update(foundPet) {
    foundPet.set('name', textName);
    foundPet.set('age', textAge);

    foundPet.save(null, {
        success: function (pet) {
            console.log('Pet updated! Name: ' + pet.get("name") + ' and new age: ' + pet.get("age"));
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}