// Create a class called PersonAccount.
// It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
// Incomes is an array of objects. incomes object have income and discription properties.
// Expenses is also an array of objects which has expense and description properties.

console.log("Question 01");
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses, properties) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses;
        this.properties = properties
    };
    totalIncome() {
        let total = 0;
        this.incomes.forEach(element => {
            total += element;
        });
        console.log("the total income = " + total);
        return total;
    }
    totalExpense() {
        let total = 0;
        this.expenses.forEach(element => {
            total += element;
        });
        console.log("the total Expenses = " + total);
        return total;
    }
    addIncome(amount) {
        this.incomes.push(amount);
        console.log(this.incomes);
    }
    addExpense(amount) {
        this.expenses.push(amount);
        console.log(this.expenses);
    }
    accountBalance() {
        let accountBalance = this.totalIncome() - this.totalExpense();
        console.log("the Account Balance = " + accountBalance);
    }
}
let personAccount = new PersonAccount("ahad", "mansoori", [50000, 30000, 70000, 90000], [12000, 1400, 55844, 55987], [12000, 1400, 55844, 55987]);
console.log(personAccount.incomes);
personAccount.totalIncome();
personAccount.totalExpense();
personAccount.addIncome(12000);
personAccount.addExpense(15500);
personAccount.accountBalance();
personAccount.addIncome(1201212);
personAccount.addExpense(1556);
personAccount.accountBalance();


// Create an automobile class. The class will have name, model, color, type: automatic or manual properties and create different methods e-g: start() logs car is ready for drive, opendoor() logs door is open
// Create child classes of Automobile Car, Truck, Bus these classes also have extra information like doors property, maxspeed.
console.log("Question 02");
class automobile {
    constructor(name, model, color, type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type === "m" ? "manual" : "automatic"
    }
    start() {
        console.log(`${this.name} is ready for drive`);
    }
    opendoor() {
        console.log(`${this.name} door is open`);
    }
}
class Automobile_Car extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}
class Automobile_Truck extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}
class Automobile_Bus extends automobile {
    constructor(name, model, color, type, doors, maxspeed) {
        super(name, model, color, type)
        this.doors = doors
        this.maxspeed = maxspeed
    }
}
let car = new Automobile_Car("Alto", "2016", "bass white", "m", "4", "160");
car.start();
car.opendoor();
let truck = new Automobile_Truck("Masda", "2016", "blue", "m", "4", "150");
truck.start();
truck.opendoor();
let bus = new Automobile_Bus("Coach", "2016", "black", "a", "4", "260");
bus.start();
bus.opendoor();
console.log(truck.type);