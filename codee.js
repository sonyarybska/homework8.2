//Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class PC {
    constructor(op, cpuPower, name) {
        this.op = op;
        this.cpuPower = cpuPower;
        this.name = name;
    }

    turnOn() {
        console.log(`Включення: ${this.name}`);
    }
}

let comp = new PC(2, 250, 'Lenovo');
comp.turnOn();
console.log(comp)


//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends PC {
    constructor(op, cpuPower, name, inches, workBattery = cpuPower / (inches * op)) {
        super(op, cpuPower, name);
        this.inches = inches;
        this.workBattery = workBattery;

    }

}

let laptop = new Laptop(4, 140, 'Asus', 32, undefined);
console.log(laptop);

//Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class UltraLaptop extends Laptop {
    constructor(op, cpuPower, name, inches, weight, workBattery) {
        super(op, cpuPower, name, inches, workBattery);
        this.weight = weight;
    }

    turnOn(weight, workBattery) {
        super.turnOn(weight, workBattery);
        if (this.weight > 2 && this.workBattery < 4) {
            console.log(`Помилка`);
        }

    }
}

let ultra = new UltraLaptop(1, 2, 'Dall', 14, 4, undefined);
ultra.turnOn();
console.log(ultra);

//Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class basePC extends PC {
    constructor(op, cpuPower, name) {
        super(op, cpuPower, name);

    }

    setupGame(game, fpc = this.cpuPower / this.op) {
        console.log(`You are playing ${game} with ${fpc} FSP`)
    }

    Power(Increas) {
        if (Increas <= this.cpuPower / 100 * 10)
            this.cpuPower += Increas;
        else{
            console.log('Не можна збільшувати більше, аніж на 10%');
        }

    }

    OP() {
        this.op = this.op * 2
    }
}
let base=new basePC(4,100,'Samsung');
base.turnOn()
base.setupGame('The Sims 4',45);
base.Power(9);
base.OP();
console.log(base);

//Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.

class gamePC extends basePC {
    constructor(op, cpuPower, name) {
        super(op, cpuPower, name);
    }


    setupGame(game, fpc = this.cpuPower / this.op) {
        console.log(`You are playing ${game} with ${fpc * 2} FSP`);
        this.cpuPower = this.cpuPower - (this.cpuPower / 100)
        return this.cpuPower;
    }

    error() {
        if (this.cpuPower < 500 && this.op < 8)
            console.log('Error');
    }
}
let game=new gamePC(4,150,'Zevs');
game.turnOn()
game.setupGame('GTA 5',30);
game.error();
console.log(game);