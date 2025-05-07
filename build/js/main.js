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
