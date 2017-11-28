Parse.initialize("JfMeozLs8UZFxaZibAiZhlpDl5OZkyjVwzdxLfqw"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "fi6LWURzRGmTg7neZfI79MJaB2QHjWhiZ4nVFvKD"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("Pet");

// Test with different values of name and age and see the ParseDashboard to see the changes
textName = "myName";
textAge = 10;

create();

function create() {
    mypet = new Pet();
    mypet.set("name", textName);
    mypet.set("age", textAge);

    mypet.save(null, {
        success: function (pet) {
            console.log('Pet created successful with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}