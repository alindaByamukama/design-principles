/**
 * We are hired by twirra to implement their login feature
    * - we are to use basic authnetication
    *  - username and password
    * - only one user should be logged in at any time
 */

/**
 * 1. Ensure that a class has just a single instance.
 * Step 1.1.: Create the singleton class.
 * Step 1.2: Create a private and static instance variable
 * Step 1.3: Create and define a private constructor
 * 2. Provide a global access point to that instance.
 * Step 2.1.: Create and define a public and static accessor(s) of the instance.
*/ 

/**
 * Go and research more about:
    * class variables - static variables
        * are accessed throught the class itself
    * object variables - dynamic variables
        * accessed through objects NOT thourgh the class that created them 
 */

/**
 *  test first approach(function testTwirraLogin() {})();
*/ 

interface Credentials {
    username: string;
    password: string;
}

// our singleton class step 1
class Twirra {
    // data step 1.2 
    private static credentials: Credentials;
    // Step 1.2: Create a private and static instance variable
    private static twirra: any = null;

    // Step 1.3: Create and define a private constructor
    private constructor(){ }
    
    static login(credentials: Credentials) {
        if (Twirra.twirra === null) {
            Twirra.twirra = new Twirra();
            Twirra.twirra.credentials = credentials;
        }
    }
    
    static logout() {
        Twirra.twirra = null;
    }

    static loggedInUser() {
        return Twirra.twirra;
    }
}

// here we are using class variables and methods
Twirra.login({username:"Susan", password:"bootcamp012"});
console.log(Twirra.loggedInUser());
Twirra.logout();


Twirra.login({username:"Sean", password:"bootcamp013"});
console.log(Twirra.loggedInUser());
// Twirra.logout();

Twirra.login({username:"Ezra", password:"bootcamp014"});
console.log(Twirra.loggedInUser());

Twirra.login({username:"Pearl", password:"bootcamp015"});
console.log(Twirra.loggedInUser());

// see screenshots for more information on your errors