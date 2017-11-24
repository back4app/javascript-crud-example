Parse.initialize("Your Back4App App Id Here"); //PASTE YOUR Back4App APPLICATION ID
Parse.javaScriptKey = "Your Back4App Javascript Key Here"; //PASTE YOUR Javascript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var Pet = Parse.Object.extend("Pet");

submitPetBtn.onclick = function() {
    getElements();
    if (submitPetBtn.value === "Save") {
        createPet();
    } else if (submitPetBtn.value === "Search") {
        readPet();
    } else if (submitPetBtn.value === "Update") {
        updatePet();
    } else if (submitPetBtn.value === "Delete") {
        deletePet();
    }
};

function createPet() {
    if (textName === null || textName === "") {
        alert("Please type a pet name");
    } else if(textAge === null || textAge === "") {
        alert("Please type an age");
    } else {
        mypet = new Pet();
        mypet.set("name", textName);
        mypet.set("age", textAge);

        mypet.save(null, {
            success: function (mypet) {
                inputName.value = null;
                inputAge.value = null;
                textMessage.innerHTML = 'Pet created with name: ' + mypet.get("name") + ' and age: ' +
                    mypet.get("age");
                alert('Pet created with success!');
            },
            error: function (response, error) {
                textMessage.innerHTML = error.message;
                alert('Error: ' + error.message);
            }
        });
    }
}

function readPet() {
    findPet = new Pet ();
    query = new Parse.Query(Pet);

    if (textName === null || textName === "") {
        alert("Please type a pet name to search");
    } else {
        query.equalTo("name", textName);
        query.first({
            success: function(mypet) {
                if (mypet) {
                    findPet = mypet;
                    textMessage.innerHTML = 'Pet name: ' + mypet.get("name") + ' and age: ' +
                        mypet.get("age");
                    updatePetBtn.disabled = false;
                    deletePetBtn.disabled = false;
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

function updatePet() {
    if(textAge === null || textAge === "") {
        alert("Please type an age");
    } else {
        findPet.set('name', textName);
        findPet.set('age', textAge);

        findPet.save(null, {
            success: function (response) {
                alert('Pet updated with objectId: ' + response.id);
                textMessage.innerHTML = 'Pet name: ' + response.get("name") + ' and age: ' +
                    response.get("age");

            },
            error: function (response, error) {
                alert('Error: ' + error.message);
            }
        });
    }
}

function deletePet() {
    findPet.set('name', textName);
    findPet.set('age', textAge);

    findPet.destroy({
        success: function(response) {
            alert('Pet erased successfully');
            findPet = null;
            textAge = null;
            textName = null;
            textMessage = null;
            inputName.value = null;
            inputAge.value = null;
            updatePetBtn.disabled = true;
            deletePetBtn.disabled = true;
            readBtn();
        },
        error: function(response, error) {
            alert('Error: '+ error.message);
        }
    });
}
