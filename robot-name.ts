interface IRobot {
  name: string;
  resetName: () => void;
}

export class Robot implements IRobot {
  name: string;
  static usedNames: string[] = [];
  static releaseNames() {
    return null;
  }
  constructor() {
    let newName;
    do {
      newName = this.randomName;
    } while (Robot.usedNames.includes(newName));
    Robot.usedNames.push(newName);
    this.name = newName;
  }

  resetName() {
    this.name = this.randomName;
  }

  private get randomName() {
    return `${this.twoRandomLetters}${this.threeRandomDigits}`;
  }
  private get twoRandomLetters() {
    const letter1 = this.randomLetter;
    const letter2 = this.randomLetter;
    return `${letter1}${letter2}`;
  }
  private get randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNumber = Math.floor(Math.random() * 26);
    return letters[randomNumber];
  }
  private get threeRandomDigits() {
    return `${this.randomNumber0to9}${this.randomNumber0to9}${this.randomNumber0to9}`;
  }
  private get randomNumber0to9() {
    return Math.floor(Math.random() * 10);
  }
}
