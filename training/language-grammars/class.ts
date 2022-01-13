// 类
class Greeter {
    greeting: string;

    constructor (message: string) {
        this.greeting = message;
    }

    greet (): string {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

// 继承
class Animal {
    move (x: number = 0) {
        console.log(`Animal moved ${x}m.`);
    }
}

class Dog extends Animal {
    bark () {
        console.log('Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(5);
dog.bark();


class Animal2 {
    public name: string;

    constructor (name: string) {
        this.name = name;
    }

    move (x: number = 0) {
        console.log(`Animal moved ${x}m.`);
    }
}

class Snake extends Animal2 {
    constructor (name: string) {
        super(name);
    }

    move (x: number = 111) {
        console.log('Slithering...');
        super.move(x);
    }
}

class Horse extends Animal2 {
    constructor (name: string) {
        super(name);
    }

    move (x: number = 222) {
        console.log('Galloping...')
        super.move(x);
    }
}

let snake = new Snake('Snake');
snake.move();
let horse = new Horse('Horse');
horse.move(333);


// 存取器
class Employee {
    private _name: string;

    constructor() {
        this._name = 'default'
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let employee = new Employee();
console.log(employee.name);
employee.name = 'vjudge';
console.log(employee.name);
// tsc -t es5 class.ts


// 抽象类
abstract class Department {
    constructor (public name: string) {
    }

    printName (): void {
        console.log('Department name:', this.name)
    }
    // 必须在派生类中实现
    abstract printMeeting(): void;
}

class Account extends Department {
    constructor() {
        super("Account");
    }

    printMeeting(): void {
        console.log('The Account Department.')
    }

    report(): void {
        console.log('This Account report.');
    }
}
let department: Department;
let account = new Account();
account.printName();
account.printMeeting();
account.report();


