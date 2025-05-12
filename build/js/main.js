"use strict";
class coder {
    constructor(name, music, age, lang = "TypeScript" // Making this param optional and adding default value of "TypeScript"
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Ismail = new coder("Ismail", "Indie", 26);
console.log(Ismail.getAge());
/* console.log(Ismail.age);
console.log(Ismail.lang); */
//
// Extend a class
//
class WebDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const mirza = new WebDev("Mac", "Mirza", "Lofi", 23);
console.log(mirza.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
//
// Static Members
//
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
//
// Getters & Setters
//
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
//MyBands.data = "Van Halen";
//MyBands.data = ["Van Halen", 5150];
MyBands.data = ["Van Halen"];
console.log(MyBands.data);
