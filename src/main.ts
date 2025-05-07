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
