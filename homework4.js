let newUser = createNewUser()
while (true) {

    while (true) {
        let firstName = prompt("Enter ur FirstName")
        if (!firstName.trim()) {
            alert("TryAgain!")
        }
        else {
            newUser.firstName = firstName
            break
        };
    }
    while (true) {
        let lastName = prompt("Enter ur LastName")
        if (!lastName.trim()) {
            alert("TryAgain!")
        }
        else {
            newUser.lastName = lastName
            break
        }
    }
    newUser.getLogin()
    if (confirm("Continue?")) {
        continue;
    }
    else {
        break;
    }

}

function createNewUser() {
    return {
        _firstName: "",
        _lastName: "",

        get firstName() {
            return this._firstName
        },
        get lastName() {
            return this._lastName
        },
        set firstName(value) {
            this._firstName = value
        },
        set lastName(value) {
            this._lastName = value
        },
        getLogin() {
            let fl = this.firstName[0].toLowerCase()
            console.log(fl + this.lastName.toLowerCase())
        },


    }
}



