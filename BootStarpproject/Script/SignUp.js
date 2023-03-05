let users = [];

class User {
      password; //use it like this.#password throughout the class

      constructor() {
            this.organisation = "masai";
      }
      #validateUsername(username) {
            // if username includes @, return false
            let value = username.includes("@") ? false : true;

            return value;
      }
      #validatePassword(password) {
            let value = password.includes("123") ? false : true;
            return value;
            //  password.includes('123') ? showError() : showSuccesss
      }
      login(username, passwaord) {
            if (username === this.username && passwaord === this.password) {
                  console.log("login succes");
                  alert("login succes");

            } else {
                  console.log("login field");
                  alert("UserName  or Password is Wrong")
            }
      }

      signUp(username, password) {
         
            let isValidated = false;

            isValidated =
                  this.#validateUsername(username) && this.#validatePassword(password);

            if (isValidated) {
                  // store data and show success message

                  this.username = username;
                  this.password = password;

                  console.log("User Registered Successfully");
                  alert("User Registered Successfully");


                  users.push(this);
            } else {
                  console.log("Please enter correct detials");
            }
      }
}


// let u = new User();
// u.signUp('aa','aaa')
// u.login('aa','aaa')

function SignUpStudent() {
      let signupArr=JSON.parse(localStorage.getItem("SignUpId"))||[];
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      let s1 = new User();
      s1.signUp(username, password);
      console.log(users);
      localStorage.setItem("SignUpId",JSON.stringify(users))
}