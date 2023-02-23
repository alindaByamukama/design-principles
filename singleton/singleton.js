/**
 * We are hired by twirra to implement their login feature
    * - we are to use basic authnetication
    *  - username and password
    * - only one user should be logged in at any time
 */
// our singleton class step 1
var Twirra = /** @class */ (function () {
    // Step 1.3: Create and define a private constructor
    function Twirra() {
    }
    Twirra.login = function (credentials) {
        if (Twirra.twirra === null) {
            Twirra.twirra = new Twirra();
            Twirra.twirra.credentials = credentials;
        }
    };
    Twirra.logout = function () {
        Twirra.twirra = null;
    };
    Twirra.loggedInUser = function () {
        return Twirra.twirra;
    };
    // Step 1.2: Create a private and static instance variable
    Twirra.twirra = null;
    return Twirra;
}());
// here we are using class variables and methods
Twirra.login({ username: "Susan", password: "bootcamp012" });
console.log(Twirra.loggedInUser());
Twirra.logout();
Twirra.login({ username: "Sean", password: "bootcamp013" });
console.log(Twirra.loggedInUser());
// Twirra.logout();
Twirra.login({ username: "Ezra", password: "bootcamp014" });
console.log(Twirra.loggedInUser());
Twirra.login({ username: "Pearl", password: "bootcamp015" });
console.log(Twirra.loggedInUser());
// see screenshots for more information on your errors
