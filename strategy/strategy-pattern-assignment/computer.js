// S.O.L.I.D
// Class Definitions
// Authentication implementations
var BasicAuth = /** @class */ (function () {
    function BasicAuth() {
    }
    BasicAuth.prototype.authentication = function (credentials) {
        console.log("Basic Authentication credentials: " + credentials);
        return true;
    };
    return BasicAuth;
}());
// universally unique identifiers are 128 bit numbers, composed of 16 octets and represented as 32 base-16 characters, that can be used to identify information across a computer system. 
var UUIDAuth = /** @class */ (function () {
    function UUIDAuth() {
    }
    UUIDAuth.prototype.authentication = function (credentials) {
        console.log("UUID Authentication credentials: " + credentials);
        return true;
    };
    return UUIDAuth;
}());
var SocialAuth = /** @class */ (function () {
    function SocialAuth() {
    }
    SocialAuth.prototype.authentication = function (credentials) {
        console.log("Social Authentication credentials: " + credentials);
        return true;
    };
    return SocialAuth;
}());
// JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
var JWTAuth = /** @class */ (function () {
    function JWTAuth() {
    }
    JWTAuth.prototype.authentication = function (credentials) {
        console.log("JWT Authentication credentials: " + credentials);
        return true;
    };
    return JWTAuth;
}());
// Input Devices
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function (data) {
        console.log("I am a mouse and i am inputing data: " + data);
    };
    return Mouse;
}());
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.input = function (data) {
        console.log("I am a keyboard and i am inputing data: " + data);
    };
    return Keyboard;
}());
var ScreenTouch = /** @class */ (function () {
    function ScreenTouch() {
    }
    ScreenTouch.prototype.input = function (data) {
        console.log("I am a Touch Screen Device and i am inputing data: " + data);
    };
    return ScreenTouch;
}());
var USB = /** @class */ (function () {
    function USB() {
    }
    USB.prototype.input = function (data) {
        console.log("I am a USB Device and i am inputing data: " + data);
    };
    return USB;
}());
// Output Devices
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function (data) {
        console.log("I am a monitor and I am outputing data: " + data);
    };
    return Monitor;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.output = function (data) {
        console.log("I am a projector and I am outputing data: " + data);
    };
    return Projector;
}());
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.output = function (data) {
        console.log("I am a speaker and I am outputing data: " + data);
    };
    return Speaker;
}());
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.output = function (data) {
        console.log("I am a printer and I am outputing data: " + data);
    };
    return Printer;
}());
// Generic Computer
var Computer = /** @class */ (function () {
    // Methods
    function Computer(model, serialNumber, brand, inputDevice, outputDevice, authStrategy) {
        this.model = model;
        this.serialNumber = serialNumber;
        this.brand = brand;
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.authStrategy = authStrategy;
    }
    Computer.prototype.boot = function () {
        console.log("Booting.....");
        return true;
    };
    Computer.prototype.authentication = function (credentials) {
        this.authStrategy.authentication(credentials);
        return true;
    };
    Computer.prototype.input = function (data) {
        this.inputDevice.input(data);
    };
    Computer.prototype.store = function () {
        console.log("Storing data.....");
    };
    Computer.prototype.retrieve = function () {
        console.log("Retrieving data.....");
    };
    Computer.prototype.process = function () {
        console.log("Processing data.....");
    };
    Computer.prototype.output = function (data) {
        this.outputDevice.output(data);
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    Computer.prototype.setAuthStrategy = function (authStrategy) {
        this.authStrategy = authStrategy;
    };
    return Computer;
}());
// Computer extensions
// class Laptop extends Computer implements Foldable{
//     fold(): void {
//         console.log("I am folding");
//     }
// }
// class UnbootableComputer extends Computer{
//     boot(): boolean {
//         throw "Not supported!"
//     }
// }
// Testing for LSP
function testLiskov(computerArg) {
    computerArg.boot();
    computerArg.authentication('credentials');
    computerArg.input('data');
    computerArg.store();
    computerArg.retrieve();
    computerArg.process();
    computerArg.output('Zenah');
}
var computer;
computer = new Computer('XPS-13', 'DFH-BRA-BRA-BRA-1X34', 'DELL', new Mouse(), new Monitor(), new BasicAuth()); //Super
/**
 * let laptop:Computer = new Laptop('LPS-13', 'RFH-BXA-BRA-BRA-1X34', 'HP', new Keyboard(), new Projector(), new UUIDAuth()) // Subtype
 * let unbootableComputer:Computer = new UnbootableComputer('UPS-13', 'RFH-BXA-BRA-BRA-1X34', 'HP', new USB(), new Monitor(), new SocialAuth()) // Subtype
 */
computer.setAuthStrategy(new JWTAuth());
// computer.setInputDevice(new Keyboard());
testLiskov(computer);
// testLiskov(laptop)
// testLiskov(unbootableComputer)
// setters and getters
