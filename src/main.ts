class coder {
  secondLang!: string; // Assertion on secondLang with "!" to not have it initialize right away

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript" // Making this param optional and adding default value of "TypeScript"
  ) {}

  public getAge() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const mirza = new WebDev("Mac", "Mirza", "Lofi", 23);

console.log(mirza.getLang());
/* console.log(mirza.age);
console.log(mirza.lang);
 */

//
// Implement an interface to a class
//

interface Musician {
  name: string;
  instrument?: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

//
// Static Members
//

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
