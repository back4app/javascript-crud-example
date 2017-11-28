Parse.initialize("JfMeozLs8UZFxaZibAiZhlpDl5OZkyjVwzdxLfqw"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "fi6LWURzRGmTg7neZfI79MJaB2QHjWhiZ4nVFvKD"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("Pet");

// Pass the name you want to search on the database
textName = "myName";

read();

function read() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first({
        success: function (pet) {
            if (pet) {
                console.log('Pet found successful with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
            } else {
                console.log("Nothing found, please try again");
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}