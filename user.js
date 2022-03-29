class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }

}

const user = new User('Diego');

console.log(user.getIntroduction());

module.exports = User;