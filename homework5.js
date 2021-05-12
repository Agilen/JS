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
    while(true){
        newUser.birthday=prompt("Enter ur birthday (dd.mm.yyyy)")
        alert("i hope u r clewer")
        break;
    }
    newUser.getPassWord()
    newUser.getAge()
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
        _birthday: "",
        _password: "",

        get firstName() {
            return this._firstName
        },
        get lastName() {
            return this._lastName
        },
        get birthday() {
            return this._birthday
        },
        get password() {
            return this._password
        },
        set firstName(value) {
            this._firstName = value
        },
        set lastName(value) {
            this._lastName = value
        },
        set birthday(value) {
            this._birthday = value
        },
        set password(value) {
            this._password = value
        },

        getLogin() {
            let fl = this.firstName[0].toLowerCase()
            console.log(fl + this.lastName.toLowerCase())
        },
        getPassWord(){
            let buf=this._firstName[0].toUpperCase()
            console.log(this.birthday)
            console.log(buf+this.lastName.toLowerCase()+this.birthday.substring(6));
        },
        getAge(){
            let buf=parseInt(this.birthday.substring(6))
            let date=new Date
            
            console.log(parseInt(date.getFullYear())-buf)
        }


    }
}
