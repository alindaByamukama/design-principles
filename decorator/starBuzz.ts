/**
 * Welcome to StarBuzz Cafe, can we take your order?
 * With the decorator pattern you will be able to give your objects new responsibilities without making ny code changes
 * start with a beverage and "decorate" it with condiments at runtime
 * Step 1: Start with a DarkRoast Object.
 * Step 2: Decorate it with a Mocha Object.
 * Step 3: Decorate it with a Whip Object.
 * Step 4: Call the cost() method and rely on delegation to add up the condiment costs.
 */

// beverage acts as our abstract component class - you can also use an interface
abstract class Beverage { 
    public description: string = "Unkown beverage";

    constructor(description: string) {
        this.description = description;
    }

    public getDescription(): string {
        return this.description
    }
    // because its abstract it must overridden in a subclass (java)
    public abstract cost(): number;
    
}

// these are the four concrete components - one per coffee type
class HouseBlend extends Beverage {
    public HouseBlend() {
        this.description = "HouseBlend"
    }
    public cost(): number{
        return 0.89;
    }
}
class DarkRoast extends Beverage {
    public DarkRoast() {
        this.description = "DarkRoast"
    }
    public cost(): number{
        return 0.99;
    }
}
class Decaf extends Beverage {
    public Decaf() {
        this.description = "Decaf"
    }
    public cost(): number{
        return 1.05;
    }
}
class Espresso extends Beverage {
    public Espresso() {
        this.description = "Espresso"
    }
    public cost(): number{
        return 1.99;
    }
}

// here is the reference to the beverage that the decorators will be wrapping
// note we are extending beverage here to have the correct type not to inherit behaviour
// the behavior comes via the composition of decorators with the base components and other decorators
abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;

    constructor(description: string, beverage: Beverage) {
        // we must call upon super - this is a reference to the parent class
        super(description);
        this.beverage = beverage;
    }

    public getDescription():string { 
        return this.description
    }
}

/*
- instatiate Mocha with a reference to a Beverage
- set the instance to the object we are wrapping to the decorators constructor
- first we delegate to the object we are decorating to get its description, then append "Mocha" to that description
- then we compute the cost of our beverage with Mocha by first delegating the call to the object we're decorating and ten we add the cost of Mocha
*/

// these are our condiment decorators - they need to implement cost() and getDescription()
class Milk extends CondimentDecorator {
    public Milk(beverage: Beverage) {
        this.beverage = beverage;
    }
    
    public getDescription():string { 
        return this.beverage.getDescription() + ", Milk";
    }

    public cost():number { return 0.10 }
}
class Mocha extends CondimentDecorator {
    public Mocha(beverage: Beverage) {
        this.beverage = beverage;
    }
    
    public getDescription():string { 
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost():number { return 0.20 }
    
}
class Soy extends CondimentDecorator {
    public Soy(beverage: Beverage) {
        this.beverage = beverage;
    }
    
    public getDescription():string { 
        return this.beverage.getDescription() + ", Soy";
    }

    public cost():number { return 0.15 }
}
class Whip extends CondimentDecorator {
    public Whip(beverage: Beverage) {
        this.beverage = beverage;
    }
    
    public getDescription():string { 
        return this.beverage.getDescription() + ", Whip";
    }

    public cost():number { return 0.10 }
}

